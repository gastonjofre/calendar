import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Drawer,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForeverOutlined';
import { get, assign } from 'lodash';
import moment from 'moment';
import RemindersContext from 'contexts/remindersContext';
import ConfirmationModal from 'components/confirmationModal';
import ReminderFrom from './reminderForm';
import ReminderInfo from './reminderInfo';
import Reminders from './reminders';

const drawerWidth = 350;

const styles = (theme) => ({
  root: {
    width: '13%',
    minWidth: '13%',
    borderRadius: 0,
  },
  content: {
    padding: '1px',
  },
  title: {
    fontSize: 14,
    height: '22%',
  },
  actualDay: {
    borderRadius: '50%',
    background: theme.palette.primary.light,
    padding: '3px',
  },
  drawer: {
    width: drawerWidth,
  },
  disabled: {
    width: '13%',
    minWidth: '13%',
    borderRadius: 0,
    background: '#EBEBE4',
  },
});

const sortRemindersByHour = (a, b) => {
  const x = a.time.toLowerCase();
  const y = b.time.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
};

const Day = ({ classes, disabled, day, month, year, height }) => {
  const remindersContext = useContext(RemindersContext);
  const [showReminderInfo, setShowReminderInfo] = useState(false);
  const [showReminderAddEdit, setShowReminderAddEdit] = useState(false);
  const [reminder, setReminder] = useState(null);
  const [numberHover, setNumberHover] = useState(false);
  const [showConfirmDeleteAll, setShowConfirmDeleteAll] = useState(false);
  const reminderDate = new Date(year, month, day);
  const allReminders = { ...remindersContext };
  delete allReminders.updateReminders;
  const reminders = get(remindersContext, `${year}.${month}.${day}`, []);
  const setReminders = remindersContext.updateReminders;

  const addOrEditReminder = (reminderToEdit) => {
    setReminder(reminderToEdit);
    setShowReminderAddEdit(true);
    setShowReminderInfo(false);
  };

  const saveReminder = (newReminder) => {
    if (!reminder) {
      const newReminders = [...reminders, newReminder];
      newReminders.sort(sortRemindersByHour);
      const newAllReminders = { ...allReminders };
      assign(newAllReminders, {
        [year]: {
          ...get(allReminders, `${year}`, {}),
          [month]: {
            ...get(allReminders, `${year}.${month}`, {}),
            [day]: newReminders,
          },
        },
      });
      setReminders(newAllReminders);
    } else {
      const editedReminder = { ...newReminder };
      delete editedReminder.index;
      const newReminders = [...reminders];
      newReminders[newReminder.index] = editedReminder;
      newReminders.sort(sortRemindersByHour);
      const newAllReminders = { ...allReminders };
      assign(newAllReminders, {
        [year]: {
          ...get(allReminders, `${year}`, {}),
          [month]: {
            ...get(allReminders, `${year}.${month}`, {}),
            [day]: newReminders,
          },
        },
      });
      setReminders(newAllReminders);
    }
    setShowReminderAddEdit(false);
  };

  const closeReminderInfo = () => {
    setReminder(null);
    setShowReminderInfo(false);
    setShowReminderAddEdit(false);
  };

  const showReminderInfoDrawer = (reminderToShow) => {
    setReminder(reminderToShow);
    setShowReminderInfo(true);
    setShowReminderAddEdit(false);
  };

  const deleteReminder = (reminderToDelete) => {
    closeReminderInfo();
    reminders.splice(reminderToDelete.index, 1);
    const newAllReminders = { ...allReminders };
    assign(newAllReminders, {
      [year]: {
        ...get(allReminders, `${year}`, {}),
        [month]: {
          ...get(allReminders, `${year}.${month}`, {}),
          [day]: reminders,
        },
      },
    });
    setReminders(newAllReminders);
  };

  const showDeleteAllRemindersButton = () => numberHover && reminders.length > 0 && !disabled;

  const deleteAllReminders = () => {
    setShowConfirmDeleteAll(false);
    const newAllReminders = { ...allReminders };
    assign(newAllReminders, {
      [year]: {
        ...get(allReminders, `${year}`, {}),
        [month]: {
          ...get(allReminders, `${year}.${month}`, {}),
          [day]: [],
        },
      },
    });
    setReminders(newAllReminders);
  };

  const cleanState = () => {
    setShowReminderInfo(false);
    setShowReminderAddEdit(false);
    setReminder(null);
    setNumberHover(false);
    setShowConfirmDeleteAll(false);
  };

  const isActualDay = () => {
    const acutalDay = new Date();
    return moment(acutalDay).isSame(reminderDate, 'day');
  };

  const getHeightAction = () => {
    let heightAction;
    const diffLength = reminders.length >= 3 ? 3 : reminders.length;

    switch (height) {
      case '21vh':
        heightAction = `${85 - 17 * diffLength}%`;
        break;
      case '16vh':
        heightAction = `${75 - 20 * diffLength}%`;
        break;
      case '14vh':
        heightAction = `${69 - 20 * diffLength}%`;
        break;
      default:
        break;
    }
    return heightAction;
  };

  useEffect(() => {
    cleanState();
  }, [month, year]);

  return (
    <>
      <Card
        className={disabled ? classes.disabled : classes.root}
        style={{ height }}
        variant="outlined"
      >
        <CardContent className={classes.content}>
          <Grid container direction="column" justify="center" alignItems="stretch">
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom={!showDeleteAllRemindersButton()}
              align="center"
              onMouseEnter={() => setNumberHover(true)}
              onMouseLeave={() => setNumberHover(false)}
            >
              {showDeleteAllRemindersButton() ? (
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => setShowConfirmDeleteAll(true)}
                >
                  <DeleteIcon />
                </IconButton>
              ) : (
                <span className={isActualDay() ? classes.actualDay : undefined}>{day}</span>
              )}
            </Typography>
            {!disabled && (
              <Reminders
                reminders={reminders}
                showReminderInfo={showReminderInfoDrawer}
                height={height}
              />
            )}
          </Grid>
        </CardContent>
        {!disabled && (
          <CardActionArea
            style={{
              height: getHeightAction(),
              maxHeight: getHeightAction(),
            }}
            onClick={() => addOrEditReminder(null)}
          >
            <CardContent />
          </CardActionArea>
        )}
      </Card>
      {showConfirmDeleteAll && (
        <ConfirmationModal
          onConfirm={deleteAllReminders}
          onCancel={() => setShowConfirmDeleteAll(false)}
          title="Are you sure you want to delete ALL the reminders?"
        />
      )}
      <Drawer
        open={showReminderInfo || showReminderAddEdit}
        anchor="right"
        onClose={closeReminderInfo}
        classes={{ paper: classes.drawer }}
      >
        {showReminderInfo && (
          <ReminderInfo
            reminder={reminder}
            editReminder={() => addOrEditReminder(reminder)}
            deleteReminder={deleteReminder}
          />
        )}
        {showReminderAddEdit && (
          <ReminderFrom
            date={reminderDate}
            reminder={reminder}
            saveReminder={saveReminder}
            day={day}
            month={month}
            year={year}
          />
        )}
      </Drawer>
    </>
  );
};

Day.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  disabled: PropTypes.bool,
  day: PropTypes.number.isRequired,
  month: PropTypes.number,
  year: PropTypes.number,
  height: PropTypes.string,
};

Day.defaultProps = {
  disabled: false,
  month: 0,
  year: 0,
  height: '16.75vh',
};

export default withStyles(styles)(Day);
