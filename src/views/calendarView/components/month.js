import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Day from './day';
import DaysHeader from './daysHeader';

const Month = ({ month, year }) => {
  const actualMonth = new Date(year, month + 1, 0);
  const daysAmount = actualMonth.getDate();
  const actualMonthFirstDay = new Date(year, month, 1);
  const firstDay = actualMonthFirstDay.getDay();

  const getLeftDisabledDays = () => {
    const newMonth = month > 0 ? month : 12;
    const lastMonth = new Date(year, newMonth, 0);
    const lastMonthDaysAmount = lastMonth.getDate();

    return [...Array(firstDay)].map((item, index) => lastMonthDaysAmount - firstDay + 1 + index);
  };

  const getNormalDays = () => {
    const days = [...Array(daysAmount + 1).keys()];
    days.shift();
    return days;
  };

  const getRightDisabledDays = () => {
    const nextSevenMultiplo = Math.ceil((daysAmount + firstDay) / 7) * 7;
    const disabledAmount = nextSevenMultiplo - (daysAmount + firstDay);

    const days = [...Array(disabledAmount + 1).keys()];
    days.shift();
    return days;
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
      <DaysHeader />
      {getLeftDisabledDays().map((disabledDay) => (
        <Day key={`disabled-${disabledDay}`} disabled day={disabledDay} />
      ))}
      {getNormalDays().map((day) => (
        <Day key={`enabled-${day}`} day={day} month={month} year={year} />
      ))}
      {getRightDisabledDays().map((disabledDay) => (
        <Day key={`disabled-${disabledDay}`} disabled day={disabledDay} />
      ))}
    </Grid>
  );
};

Month.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default Month;
