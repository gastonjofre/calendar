import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    minWidth: '14%',
    'border-radius': 0,
    height: '16.75vh',
  },
  title: {
    fontSize: 14,
  },
});

const Day = ({ classes, day }) => {
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
          {day}
        </Typography>
      </CardContent>
    </Card>
  );
};

Day.propTypes = {
  classes: PropTypes.object.isRequired,
  day: PropTypes.number.isRequired,
};

export default withStyles(styles)(Day);
