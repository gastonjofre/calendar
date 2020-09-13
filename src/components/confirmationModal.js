import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const styles = (theme) => ({
  title: {
    fontSize: 20,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const ConfirmationModal = ({ classes, title, onCancel, onConfirm }) => (
  <Modal
    open
    onClose={onCancel}
    aria-labelledby="delete-reminder"
    aria-describedby="delete-reminder"
  >
    <div className={classes.paper}>
      <Typography className={classes.title} gutterBottom align="center">
        {title}
      </Typography>
      <Grid container direction="row" justify="space-evenly" alignItems="center">
        <Button variant="contained" color="primary" onClick={onConfirm}>
          Confirm
        </Button>
        <Button variant="contained" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Grid>
    </div>
  </Modal>
);

ConfirmationModal.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default withStyles(styles)(ConfirmationModal);
