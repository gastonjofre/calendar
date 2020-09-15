import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, TextField, Button, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CirclePicker } from 'react-color';
import { get } from 'lodash';
import Weather from './weather';

const styles = (theme) => ({
  title: {
    fontSize: 15,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
});

const ReminderForm = ({ classes, date, saveReminder, reminder, day, month, year }) => {
  const [title, setTitle] = useState(get(reminder, 'title', ''));
  const [time, setTime] = useState(get(reminder, 'time', '09:30'));
  const [city, setCity] = useState(get(reminder, 'city', ''));
  const [errorTitle, setErrorTitle] = useState(false);
  const [cities, setCities] = useState([]);
  const [cityAux, setCityAux] = useState(get(reminder, 'city', ''));
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

  const fetchCities = useCallback(() => {
    if (cityAux.length >= 3) {
      const apiDomain = `https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityAux}`;
      fetch(apiDomain)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          setCities(myJson);
        });
    }
  }, [cityAux]);

  useEffect(() => {
    fetchCities();
  }, [cityAux, fetchCities]);

  return (
    <Grid container direction="column" justify="flex-start" alignItems="stretch">
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
        <Autocomplete
          id="city-auto-input"
          options={cities}
          fullWidth
          getOptionLabel={(option) => option.name}
          // helperText="At least 3 chars"
          className={classes.input}
          inputValue={cityAux}
          margin="normal"
          onInputChange={(event, newInputValue) => {
            if (event) {
              if (event.type === 'change') {
                setCityAux(newInputValue !== undefined ? newInputValue : '');
              }
              if (event.type === 'click') {
                setCity(newInputValue !== undefined ? newInputValue : '');
                setCityAux(newInputValue !== undefined ? newInputValue : '');
              }
            }
          }}
          renderInput={(params) => <TextField {...params} label="City" />}
        />
      </Grid>
      {city && (
        <Grid item className={classes.container} container direction="row" justify="center">
          <Grid item className={classes.container} container direction="row" justify="center">
            <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
              Weather
            </Typography>
          </Grid>
          <Weather day={day} month={month} year={year} city={city} />
        </Grid>
      )}
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
  day: PropTypes.number.isRequired,
  month: PropTypes.number,
  year: PropTypes.number,
};

ReminderForm.defaultProps = {
  reminder: {},
  month: 0,
  year: 0,
};

export default withStyles(styles)(ReminderForm);
