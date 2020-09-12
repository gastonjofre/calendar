import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import monthsNames from 'constants/months';

const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  monthYearText: {
    fontWeight: 300,
  },
});

const HeadBar = ({ classes, month, year }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography
            variant="h4"
            className={classes.monthYearText}
            display="inline"
            color="primary"
          >
            {`${monthsNames[month]} ${year}`}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

HeadBar.propTypes = {
  classes: PropTypes.object.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default withStyles(styles)(HeadBar);
