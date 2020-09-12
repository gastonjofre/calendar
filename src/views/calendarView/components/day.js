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

const drawerWidth = 300;

const styles = (theme) => ({
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

const Day = ({ classes, disabled, day, month, year }) => {
  const [showCreateReminder, setShowCreateReminder] = useState(false);
  const [reminders, setReminders] = useState([]);
  const reminderDate = new Date(year, month, day);

  const addOrEditReminder = () => {
    setShowCreateReminder(true);
  };

  const saveReminder = (reminder) => {
    setReminders([...reminders, reminder]);
    setShowCreateReminder(false);
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
              reminders.map((reminder, index) => (
                <Card
                  key={`${reminder.title}-${index}`}
                  style={{ backgroundColor: reminder.color.hex }}
                >
                  {/* TODO: COMING SOON: New component */}
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    {reminder.title}
                  </Typography>
                </Card>
              ))}
          </Grid>
        </CardContent>
        {!disabled && (
          <CardActionArea onClick={addOrEditReminder}>
            <CardContent></CardContent>
          </CardActionArea>
        )}
      </Card>
      <Drawer
        open={showCreateReminder}
        anchor="right"
        onClose={() => setShowCreateReminder(false)}
        classes={{ paper: classes.drawer }}
      >
        <ReminderFrom date={reminderDate} saveReminder={saveReminder} />
      </Drawer>
    </>
  );
};

Day.propTypes = {
  classes: PropTypes.object.isRequired,
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
