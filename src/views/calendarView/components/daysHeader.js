import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import days from 'constants/days';

const styles = () => ({
  root: {
    minWidth: '14%',
    'max-height': '5vh',
    'border-radius': 0,
  },
  title: {
    fontSize: 13,
  },
});

const DaysHeader = ({ classes }) =>
  days.map((day) => (
    <Card key={`header-${day}`} className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
          {day}
        </Typography>
      </CardContent>
    </Card>
  ));

DaysHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DaysHeader);
