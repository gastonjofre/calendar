import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography, IconButton, Card, CardContent } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EventIcon from '@material-ui/icons/EventOutlined';
import PlaceIcon from '@material-ui/icons/PlaceOutlined';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PaletteIcon from '@material-ui/icons/PaletteOutlined';
import ConfirmationModal from 'components/confirmationModal';
import { get } from 'lodash';
import Divider from '@material-ui/core/Divider';
import Weather from './weather';

const styles = (theme) => ({
  title: {
    fontSize: 20,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  subtitle: {
    fontSize: 15,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  content: {
    fontSize: 13,
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

const ReminderInfo = ({ classes, reminder, deleteReminder, editReminder }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const onConfirmDelete = () => {
    setShowDeleteConfirmation(false);
    deleteReminder(reminder);
  };

  const onCancelDelete = () => setShowDeleteConfirmation(false);

  return (
    <>
      <Grid container direction="column" justify="flex-start" alignItems="stretch">
        <Grid
          item
          className={classes.container}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={editReminder}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item className={classes.container} container direction="row" justify="center">
          <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
            {reminder.title}
          </Typography>
        </Grid>
        <Grid item className={classes.container} container direction="row" justify="center">
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            gutterBottom
            align="center"
          >
            Date
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.container}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={3} container direction="row" justify="center">
            <EventIcon />
          </Grid>
          <Grid item xs={9}>
            <Typography
              className={classes.content}
              color="textSecondary"
              gutterBottom
              align="justify"
            >
              {`${reminder.date.toDateString()}`}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid item className={classes.container} container direction="row" justify="center">
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            gutterBottom
            align="center"
          >
            Hour
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.container}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={3} container direction="row" justify="center">
            <QueryBuilderIcon />
          </Grid>
          <Grid item xs={9}>
            <Typography
              className={classes.content}
              color="textSecondary"
              gutterBottom
              align="justify"
            >
              {`${get(reminder, 'time', '')}`}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid item className={classes.container} container direction="row" justify="center">
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            gutterBottom
            align="center"
          >
            City
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.container}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={3} container direction="row" justify="center">
            <PlaceIcon />
          </Grid>
          <Grid item xs={9}>
            <Typography
              className={classes.content}
              color="textSecondary"
              gutterBottom
              align="justify"
            >
              {`${reminder.city === '' ? 'Unspecified' : reminder.city}`}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        {reminder.city !== '' && (
          <>
            <Grid item className={classes.container} container direction="row" justify="center">
              <Typography
                className={classes.subtitle}
                color="textSecondary"
                gutterBottom
                align="center"
              >
                Weather
              </Typography>
            </Grid>
            <Grid item className={classes.container} container direction="row" justify="center">
              <Weather
                day={reminder.date.getDate()}
                month={reminder.date.getMonth()}
                year={reminder.date.getFullYear()}
                city={reminder.city}
              />
            </Grid>
            <Divider />
          </>
        )}
        <Grid item className={classes.container} container direction="row" justify="center">
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            gutterBottom
            align="center"
          >
            Color
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.container}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={3} container direction="row" justify="center">
            <PaletteIcon />
          </Grid>
          <Grid item xs={9}>
            <Card style={{ backgroundColor: reminder.color.hex }}>
              <CardContent />
            </Card>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      {showDeleteConfirmation && (
        <ConfirmationModal
          title="Are you sure you want to delete this reminder?"
          onConfirm={onConfirmDelete}
          onCancel={onCancelDelete}
        />
      )}
    </>
  );
};

ReminderInfo.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  reminder: PropTypes.instanceOf(Object).isRequired,
  deleteReminder: PropTypes.func.isRequired,
  editReminder: PropTypes.func.isRequired,
};

export default withStyles(styles)(ReminderInfo);
