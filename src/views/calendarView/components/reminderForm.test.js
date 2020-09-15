/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { TextField, Button, Typography } from '@material-ui/core';
import { CirclePicker } from 'react-color';
import { act } from '@testing-library/react';
import waitForExpect from 'wait-for-expect';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ReminderForm from './reminderForm';

jest.mock('./weather', () => () => <div id="weather" />);

describe('Reminder Form Component', () => {
  test('Reminder Form - Test render without a reminder', () => {
    // Arrange
    const date = new Date(2020, 8, 1);
    const saveReminderSpy = jest.fn();
    const day = 1;

    // Act
    const wrapper = mount(<ReminderForm date={date} saveReminder={saveReminderSpy} day={day} />);

    // Assert
    const textfields = wrapper.find(TextField);
    const typographies = wrapper.find(Typography);
    const autocomplete = wrapper.find(Autocomplete);
    const colorPicker = wrapper.find(CirclePicker);
    const buttons = wrapper.find(Button);

    expect(textfields.length).toBe(3);
    expect(typographies.length).toBe(2);
    expect(autocomplete.length).toBe(1);
    expect(colorPicker.length).toBe(1);
    expect(buttons.length).toBe(1);

    expect(textfields.at(0).prop('label')).toBe('Title');
    expect(textfields.at(0).prop('value')).toBe('');
    expect(textfields.at(1).prop('label')).toBe('Hour');
    expect(textfields.at(1).prop('value')).toBe('09:30');

    expect(textfields.at(2).prop('label')).toBe('City');
    expect(autocomplete.at(0).prop('inputValue')).toBe('');

    expect(typographies.at(0).text()).toBe(date.toDateString());
    expect(typographies.at(1).text()).toBe('Color');

    expect(colorPicker.at(0).prop('color')).toStrictEqual({ hex: '#607d8b', source: 'hex' });

    expect(buttons.at(0).text()).toBe('Save');
  });

  test('Reminder Form - Create new reminder', async () => {
    // Arrange
    const date = new Date(2020, 8, 1);
    const saveReminderSpy = jest.fn();
    const day = 1;

    // Act
    const wrapper = mount(<ReminderForm date={date} saveReminder={saveReminderSpy} day={day} />);

    let textfields = wrapper.find(TextField);
    let colorPicker = wrapper.find(CirclePicker);
    const autocomplete = wrapper.find(Autocomplete);

    act(() => {
      textfields.at(0).prop('onChange')({ target: { value: 'Reminder Title Test' } });
      textfields.at(1).prop('onChange')({ target: { value: '11:45' } });
      autocomplete.at(0).prop('onInputChange')({ type: 'click' }, 'Córdoba');
      colorPicker.at(0).prop('onChange')({ hex: '#e91e63', source: 'hex' });
    });

    wrapper.update();
    const buttons = wrapper.find(Button);
    act(() => {
      buttons.at(0).prop('onClick')();
    });
    wrapper.update();

    // Assert
    await waitForExpect(() => {
      expect(saveReminderSpy).toHaveBeenCalledTimes(1);
    });
    expect(saveReminderSpy).toHaveBeenCalledWith({
      title: 'Reminder Title Test',
      date: new Date('2020-09-01T03:00:00.000Z'),
      time: '11:45',
      city: 'Córdoba',
      color: {
        hex: '#e91e63',
        source: 'hex',
      },
      index: null,
    });

    textfields = wrapper.find(TextField);
    colorPicker = wrapper.find(CirclePicker);
    const typographies = wrapper.find(Typography);
    // FYI: Clean State
    expect(textfields.length).toBe(3);
    expect(typographies.length).toBe(2);
    expect(colorPicker.length).toBe(1);
    expect(buttons.length).toBe(1);

    expect(textfields.at(0).prop('label')).toBe('Title');
    expect(textfields.at(0).prop('value')).toBe('');
    expect(textfields.at(1).prop('label')).toBe('Hour');
    expect(textfields.at(1).prop('value')).toBe('09:30');
    expect(textfields.at(2).prop('label')).toBe('City');

    expect(typographies.at(0).text()).toBe(date.toDateString());
    expect(typographies.at(1).text()).toBe('Color');

    expect(colorPicker.at(0).prop('color')).toStrictEqual({ hex: '#607d8b', source: 'hex' });
  });

  test('Reminder Form - Try to create without title and with title with mora than 30 chars', async () => {
    // Arrange
    const date = new Date(2020, 8, 1);
    const saveReminderSpy = jest.fn();
    const day = 1;

    // Act
    const wrapper = mount(<ReminderForm date={date} saveReminder={saveReminderSpy} day={day} />);

    let textfields = wrapper.find(TextField);
    act(() => {
      textfields.at(0).prop('onChange')({ target: { value: 'a'.repeat(31) } });
    });
    wrapper.update();

    const buttons = wrapper.find(Button);
    act(() => {
      buttons.at(0).prop('onClick')();
    });
    wrapper.update();

    // Assert
    expect(saveReminderSpy).toHaveBeenCalledTimes(0);
    textfields = wrapper.find(TextField);

    expect(textfields.at(0).prop('value')).toBe('a'.repeat(31));
    expect(textfields.at(0).prop('error')).toBe(true);
    expect(textfields.at(0).prop('helperText')).toBe('31/30');

    // Act
    act(() => {
      textfields.at(0).prop('onChange')({ target: { value: '' } });
    });
    wrapper.update();

    act(() => {
      wrapper.find(Button).at(0).prop('onClick')();
    });
    wrapper.update();

    // Assert
    expect(saveReminderSpy).toHaveBeenCalledTimes(0);
    textfields = wrapper.find(TextField);

    expect(textfields.at(0).prop('value')).toBe('');
    expect(textfields.at(0).prop('error')).toBe(true);
    expect(textfields.at(0).prop('helperText')).toBe('0/30');
  });

  test('Reminder Form - Test render with a reminder - Edit', () => {
    // Arrange
    const date = new Date(2020, 8, 1);
    const saveReminderSpy = jest.fn();
    const day = 1;
    const reminder = {
      title: 'Reminder Title Test',
      date: new Date('2020-09-01T03:00:00.000Z'),
      time: '10:35',
      city: 'Córdoba',
      color: {
        hex: '#e91e63',
        source: 'hex',
      },
      index: 1,
    };

    // Act
    const wrapper = mount(
      <ReminderForm date={date} reminder={reminder} saveReminder={saveReminderSpy} day={day} />
    );

    // Assert
    const textfields = wrapper.find(TextField);
    const typographies = wrapper.find(Typography);
    const colorPicker = wrapper.find(CirclePicker);
    const buttons = wrapper.find(Button);

    expect(textfields.length).toBe(3);
    expect(typographies.length).toBe(3);
    expect(colorPicker.length).toBe(1);
    expect(buttons.length).toBe(1);

    expect(textfields.at(0).prop('label')).toBe('Title');
    expect(textfields.at(0).prop('value')).toBe('Reminder Title Test');
    expect(textfields.at(1).prop('label')).toBe('Hour');
    expect(textfields.at(1).prop('value')).toBe('10:35');
    expect(textfields.at(2).prop('label')).toBe('City');

    expect(typographies.at(1).text()).toBe('Weather');

    expect(colorPicker.at(0).prop('color')).toStrictEqual({ hex: '#e91e63', source: 'hex' });
  });
});
