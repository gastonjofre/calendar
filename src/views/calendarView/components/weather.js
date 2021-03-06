/* eslint-disable no-undef */
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Card, Typography, Avatar } from '@material-ui/core';

import moment from 'moment';
import { get } from 'lodash';

const styles = (theme) => ({
  weatherCard: {
    boxShadow: theme.shadows[5],
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  title: {
    fontSize: 15,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  subtitle: {
    fontSize: 13,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  warning: {
    fontSize: 15,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
});
const apiDomain = 'https://api.weatherapi.com/v1/';

const DaysHeader = ({ classes, day, month, year, city }) => {
  const actualDate = new Date();
  actualDate.setHours(0, 0, 0, 0);
  const [weather, setWeather] = useState(null);

  const fetchWeather = useCallback(() => {
    if (city !== '') {
      const actualDateAux = new Date();
      actualDateAux.setHours(0, 0, 0, 0);
      const weatherDateAux = new Date(year, month, day);
      const diffDays = moment(weatherDateAux).diff(actualDateAux, 'days') + 1;
      const cityAux = city.split(',')[0];

      if (moment(actualDateAux).isBefore(weatherDateAux) && diffDays <= 10) {
        fetch(
          `${apiDomain}forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityAux}&days=${diffDays}`
        )
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            if (!('error' in myJson)) {
              const weathersAux = get(myJson, 'forecast.forecastday', []);
              const newWeather = weathersAux.find((weatherIterator) =>
                moment(weatherIterator.date).isSame(weatherDateAux)
              );
              if (newWeather) {
                setWeather({
                  condition: get(newWeather, 'day.condition', {}),
                  max_temp: get(newWeather, 'day.maxtemp_c', null),
                  min_temp: get(newWeather, 'day.mintemp_c', null),
                  current_temp: null,
                });
              }
            }
          });
      }

      if (moment(actualDateAux).isAfter(weatherDateAux) && diffDays <= 30) {
        fetch(
          `${apiDomain}history.json?key=${
            process.env.REACT_APP_WEATHER_API_KEY
          }&q=${cityAux}&dt=${moment(weatherDateAux).format('YYYY-MM-DD')}`
        )
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            if (!('error' in myJson)) {
              const weathersAux = get(myJson, 'forecast.forecastday', []);
              const newWeather = weathersAux.find((weatherIterator) =>
                moment(weatherIterator.date).isSame(weatherDateAux)
              );
              if (newWeather) {
                setWeather({
                  condition: get(newWeather, 'day.condition', {}),
                  max_temp: get(newWeather, 'day.maxtemp_c', null),
                  min_temp: get(newWeather, 'day.mintemp_c', null),
                  current_temp: null,
                });
              }
            }
          });
      }

      if (moment(actualDateAux).isSame(weatherDateAux)) {
        fetch(`${apiDomain}current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityAux}`)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            if (!('error' in myJson)) {
              const newWeather = get(myJson, 'current', {});
              setWeather({
                condition: get(newWeather, 'condition', {}),
                max_temp: null,
                min_temp: null,
                current_temp: newWeather.temp_c,
              });
            }
          });
      }
    }
  }, [city, year, month, day]);

  useEffect(() => {
    fetchWeather();
  }, [city, fetchWeather]);

  return (
    <Grid container direction="column" justify="center" alignItems="stretch">
      <Card key={`header-${day}`} className={classes.weatherCard}>
        {weather !== null ? (
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={3}>
              <Avatar
                alt={get(weather, 'condition.text', '')}
                src={get(weather, 'condition.icon', '')}
              />
            </Grid>
            <Grid item xs={9}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="center"
              >
                {get(weather, 'condition.text', '')}
              </Typography>
              {weather.current_temp ? (
                <Typography
                  className={classes.subtitle}
                  color="textSecondary"
                  gutterBottom
                  align="center"
                >
                  {`Current temp: ${weather.current_temp} °C`}
                </Typography>
              ) : (
                <>
                  <Typography
                    className={classes.subtitle}
                    color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    {`Max. temp: ${weather.max_temp} °C`}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    color="textSecondary"
                    gutterBottom
                    align="center"
                  >
                    {`Min. temp: ${weather.min_temp} °C`}
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        ) : (
          <Typography className={classes.warning} color="textSecondary" gutterBottom align="center">
            Weather not available for this day
          </Typography>
        )}
      </Card>
    </Grid>
  );
};

DaysHeader.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number,
  year: PropTypes.number,
  city: PropTypes.string,
};

DaysHeader.defaultProps = {
  month: 0,
  year: 0,
  city: '',
};

export default withStyles(styles)(DaysHeader);
