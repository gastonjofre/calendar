import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Drawer,
} from '@material-ui/core';
import ReminderFrom from './reminderForm';
import ReminderInfo from './reminderInfo';

const drawerWidth = 300;

const styles = () => ({
  root: {
    minWidth: '14%',
    borderRadius: 0,
    height: '16.75vh',
  },
  content: {
    padding: '0px',
  },
  title: {
    fontSize: 14,
  },
  drawer: {
    width: drawerWidth,
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
  const [showReminderInfo, setShowReminderInfo] = useState(false);
  const [showReminderAddEdit, setShowReminderAddEdit] = useState(false);
  const [reminders, setReminders] = useState([]);
  const [reminder, setReminder] = useState(null);
  const reminderDate = new Date(year, month, day);

  const addOrEditReminder = (reminderToEdit) => {
    setReminder(reminderToEdit);
    setShowReminderAddEdit(true);
    setShowReminderInfo(false);
  };

  const saveReminder = (newReminder) => {
    if (!reminder) {
      const newReminders = [...reminders, newReminder];
      newReminders.sort(sortRemindersByHour);
      setReminders(newReminders);
    } else {
      const editedReminder = { ...newReminder };
      delete editedReminder.index;
      const newReminders = [...reminders];
      newReminders[newReminder.index] = editedReminder;
      newReminders.sort(sortRemindersByHour);
      setReminders([...newReminders]);
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
    setReminders([...reminders]);
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.content}>
          <Grid container direction="column" justify="center" alignItems="stretch">
            <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
              {day}
            </Typography>
            {!disabled &&
              reminders.map((reminderIterator, index) => (
                <Card
                  key={`${reminderIterator.title}-${index}`}
                  style={{ backgroundColor: reminderIterator.color.hex }}
                  onClick={() => showReminderInfoDrawer({ ...reminderIterator, index })}
                >
                  {/* TODO: COMING SOON: New component */}
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    {reminderIterator.title}
                  </Typography>
                </Card>
              ))}
          </Grid>
        </CardContent>
        {!disabled && (
          <CardActionArea onClick={() => addOrEditReminder(null)}>
            <CardContent />
          </CardActionArea>
        )}
      </Card>
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
          <ReminderFrom date={reminderDate} reminder={reminder} saveReminder={saveReminder} />
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