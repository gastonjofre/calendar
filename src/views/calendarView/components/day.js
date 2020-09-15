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
import RemindersContext from 'contexts/remindersContext';
import ConfirmationModal from 'components/confirmationModal';
import ReminderFrom from './reminderForm';
import ReminderInfo from './reminderInfo';
import Reminders from './reminders';

const drawerWidth = 300;

const styles = () => ({
  root: {
    width: '13%',
    minWidth: '13%',
    borderRadius: 0,
    height: '16.75vh',
  },
  content: {
    padding: '1px',
  },
  title: {
    fontSize: 14,
  },
  drawer: {
    width: drawerWidth,
  },
  disabled: {
    width: '13%',
    minWidth: '13%',
    borderRadius: 0,
    height: '16.75vh',
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

const Day = ({ classes, disabled, day, month, year }) => {
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

  useEffect(() => {
    cleanState();
  }, [month, year]);

  return (
    <>
      <Card className={disabled ? classes.disabled : classes.root} variant="outlined">
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
                  className={classes.margin}
                  size="small"
                  onClick={() => setShowConfirmDeleteAll(true)}
                >
                  <DeleteIcon />
                </IconButton>
              ) : (
                  day
                )}
            </Typography>
            {!disabled && <Reminders reminders={reminders} showReminderInfo={showReminderInfoDrawer} />}
          </Grid>
        </CardContent>
        {!disabled && (
          <CardActionArea style={{
            height: `${80 - (20 * (reminders.length >= 3 ? 3 : reminders.length))}%`,
            maxHeight: `${80 - (20 * (reminders.length >= 3 ? 3 : reminders.length))}%`,
          }} onClick={() => addOrEditReminder(null)}>
            <CardContent />
          </CardActionArea>
        )}
      </Card>
      {showConfirmDeleteAll && (
        <ConfirmationModal
          onConfirm={deleteAllReminders}
          onCancel={() => setShowConfirmDeleteAll(false)}
          title="Are you sure you want to delete ALL the reminders for this day?"
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
};

Day.defaultProps = {
  disabled: false,
  month: 0,
  year: 0,
};

export default withStyles(styles)(Day);
