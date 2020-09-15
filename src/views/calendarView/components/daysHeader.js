import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Card, Typography } from '@material-ui/core';
import days from 'constants/days';

const styles = (theme) => ({
  root: {
    minWidth: '13%',
    width: '13%',
    'max-height': '5vh',
    'border-radius': 0,
    background: theme.palette.primary.light,
  },
  shortTitle: {
    display: 'inline',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  longTitle: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
    },
  },
});

const DaysHeader = ({ classes }) =>
  days.map((day) => (
    <Card key={`header-${day.short}`} className={classes.root} variant="outlined">
      <Grid container direction="column" justify="center" alignItems="stretch">
        <Typography
          variant="subtitle1"
          className={classes.longTitle}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          {day.long}
        </Typography>
        <Typography
          variant="body2"
          className={classes.shortTitle}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          {day.short}
        </Typography>
      </Grid>
    </Card>
  ));

DaysHeader.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(DaysHeader);
