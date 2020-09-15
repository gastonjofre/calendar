import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Card, CardContent, Typography, Avatar } from '@material-ui/core';

import moment from 'moment';
import { get } from 'lodash';

const styles = (theme) => ({
  weatherCard: {
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
});
const apiDomain = 'https://api.weatherapi.com/v1/';

const DaysHeader = ({ classes, day, month, year, city }) => {
  const actualDate = new Date();
  actualDate.setHours(0, 0, 0, 0);
  const weatherDate = new Date(year, month, day);
  const [weather, setWeather] = useState(null);

  const fetchWeather = useCallback(() => {
    if (city !== '') {
      const diffDays = moment(weatherDate).diff(actualDate, 'days') + 1;
      const cityAux = city.split(',')[0];

      if (moment(actualDate).isBefore(weatherDate) && diffDays <= 10) {
        fetch(
          `${apiDomain}forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityAux}&days=${diffDays}`
        )
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            const weathersAux = get(myJson, 'forecast.forecastday', []);
            const newWeather = weathersAux.find((weatherIterator) =>
              moment(weatherIterator.date).isSame(weatherDate)
            );
            setWeather({
              condition: get(newWeather, 'day.condition', {}),
              max_temp: get(newWeather, 'day.maxtemp_c', null),
              min_temp: get(newWeather, 'day.mintemp_c', null),
              current_temp: null,
            });
          });
      }

      if (moment(actualDate).isAfter(weatherDate) && diffDays <= 30) {
        fetch(
          `${apiDomain}history.json?key=${
            process.env.REACT_APP_WEATHER_API_KEY
          }&q=${cityAux}&dt=${moment(weatherDate).format('YYYY-MM-DD')}`
        )
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            const weathersAux = get(myJson, 'forecast.forecastday', []);
            const newWeather = weathersAux.find((weatherIterator) =>
              moment(weatherIterator.date).isSame(weatherDate)
            );
            setWeather({
              condition: get(newWeather, 'day.condition', {}),
              max_temp: get(newWeather, 'day.maxtemp_c', null),
              min_temp: get(newWeather, 'day.mintemp_c', null),
              current_temp: null,
            });
          });
      }

      if (moment(actualDate).isSame(weatherDate)) {
        fetch(`${apiDomain}current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${cityAux}`)
          .then((response) => {
            return response.json();
          })
          .then((myJson) => {
            const newWeather = get(myJson, 'current', {});
            setWeather({
              condition: get(newWeather, 'condition', {}),
              max_temp: null,
              min_temp: null,
              current_temp: newWeather.temp_c,
            });
          });
      }
    }
  }, [city, actualDate, weatherDate]);

  useEffect(() => {
    fetchWeather();
  }, [city, fetchWeather]);

  return (
    weather && (
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Card key={`header-${day}`} className={classes.weatherCard}>
          <CardContent>
            {weather && (
              <Grid container direction="row" justify="center" alignItems="center">
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
            )}
          </CardContent>
        </Card>
      </Grid>
    )
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
