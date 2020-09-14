import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, TextField, Button, Typography } from '@material-ui/core';
import { CirclePicker } from 'react-color';
import { get } from 'lodash';

const styles = (theme) => ({
  title: {
    fontSize: 13,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
});

const ReminderForm = ({ classes, date, saveReminder, reminder }) => {
  const [title, setTitle] = useState(get(reminder, 'title', ''));
  const [time, setTime] = useState(get(reminder, 'time', '09:30'));
  const [city, setCity] = useState(get(reminder, 'city', ''));
  const [errorTitle, setErrorTitle] = useState(false);
  const [color, setColor] = useState(
    get(reminder, 'color', {
      hex: '#607d8b',
      source: 'hex',
    })
  );

  const cleanState = () => {
    setTitle('');
    setTime('09:30');
    setCity('');
    setColor({
      hex: '#607d8b',
      source: 'hex',
    });
  };

  const onSaveReminder = () => {
    if (title.length <= 0) {
      setErrorTitle(true);
    }

    if (title.length <= 30 && title.length > 0) {
      saveReminder({
        title,
        time,
        date,
        city,
        color,
        index: get(reminder, 'index', null),
      });
      cleanState();
    }
  };

  const changeTitle = (e) => {
    setErrorTitle(e.target.value.length > 30);
    setTitle(e.target.value);
  };

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
      <Grid item className={classes.container}>
        <TextField
          id="title-input"
          label="Title"
          value={title}
          helperText={`${title.length}/30`}
          fullWidth
          onChange={changeTitle}
          error={errorTitle}
          className={classes.input}
          margin="normal"
        />
      </Grid>
      <Grid item className={classes.container} container direction="row" justify="center">
        <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
          {`${date.toDateString()}`}
        </Typography>
      </Grid>
      <Grid item className={classes.container}>
        <TextField
          id="hour-input"
          label="Hour"
          type="time"
          fullWidth
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={classes.input}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
        />
      </Grid>
      <Grid item className={classes.container}>
        <TextField
          id="city-input"
          label="City"
          value={city}
          fullWidth
          onChange={(e) => setCity(e.target.value)}
          className={classes.input}
          margin="normal"
        />
      </Grid>
      <Grid item className={classes.container} container direction="row" justify="center">
        <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
          Color
        </Typography>
      </Grid>
      <Grid item className={classes.container} container direction="row" justify="center">
        <CirclePicker onChange={(newColor) => setColor(newColor)} color={color} />
      </Grid>
      <Grid item className={classes.container} container direction="row" justify="center">
        <Button variant="contained" color="primary" onClick={onSaveReminder}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

ReminderForm.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  saveReminder: PropTypes.func.isRequired,
  reminder: PropTypes.instanceOf(Object),
};

ReminderForm.defaultProps = {
  reminder: {},
};

export default withStyles(styles)(ReminderForm);
