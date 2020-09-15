import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles, IconButton } from '@material-ui/core';
import monthsNames from 'constants/months';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const styles = (theme) => ({
  appBar: {
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  monthYearText: {
    fontWeight: 500,
  },
  changeMonth: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
});

const HeadBar = ({ classes, month, year, setNewMonth, setNewYear }) => {
  const onChangeMonth = (newMonth) => {
    if (newMonth === 12) {
      setNewMonth(0);
      setNewYear(year + 1);
    } else if (newMonth === -1) {
      setNewMonth(11);
      setNewYear(year - 1);
    } else {
      setNewMonth(newMonth);
    }
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography
            variant="h5"
            className={classes.monthYearText}
            display="inline"
            color="primary"
          >
            {`${monthsNames[month]} ${year}`}
          </Typography>
        </div>
        <div>
          <IconButton
            aria-label="left"
            className={classes.changeMonth}
            onClick={() => onChangeMonth(month - 1)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton aria-label="right" onClick={() => onChangeMonth(month + 1)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

HeadBar.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  setNewMonth: PropTypes.func.isRequired,
  setNewYear: PropTypes.func.isRequired,
};

export default withStyles(styles)(HeadBar);
