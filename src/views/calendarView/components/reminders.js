import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, Typography, Popover, Box } from '@material-ui/core';

const styles = (theme) => ({
    popover: {
        minWidth: '14vw',
        width: '14vw',
        borderRadius: 0,
        minHeight: '10vh',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    title: {
        fontSize: 14,
    },
    clickable: {
        cursor: 'pointer',
    },
});
const Reminders = ({ classes, reminders, showReminderInfo }) => {
    const [showRemindersExpanse, setShowReminderExpanse] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const getRemindersDiff = () => reminders.length - 2;

    const showAllRemindersExpanse = (newAnchorEl) => {
        setShowReminderExpanse(true);
        setAnchorEl(newAnchorEl)
    }

    const showAllReminders = () => reminders.map((reminderIterator, index) => (
        <Card
            key={`${reminderIterator.title}-${index}`}
            style={{ backgroundColor: reminderIterator.color.hex }}
            className={classes.clickable}
            onClick={() => showReminderInfo({ ...reminderIterator, index })}
        >
            <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                align="center"
            >
                {reminderIterator.title}
            </Typography>
        </Card>
    ));

    return (
        reminders.length > 3
            ?
            <>
                {reminders.slice(0, 2).map((reminderIterator, index) => (
                    <Card
                        key={`${reminderIterator.title}-${index}`}
                        style={{ backgroundColor: reminderIterator.color.hex }}
                        className={classes.clickable}
                        onClick={() => showReminderInfo({ ...reminderIterator, index })}
                    >
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                            align="center"
                        >
                            {reminderIterator.title}
                        </Typography>
                    </Card>
                ))}
                <Card
                    key={'more-reminders'}
                    style={{ backgroundColor: '#2196F3' }}
                    className={classes.clickable}
                    onClick={(e) => showAllRemindersExpanse(e.currentTarget)}
                >
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        align="center"
                    >
                        {`+${getRemindersDiff()}`}
                    </Typography>
                </Card>
                <Popover
                    id={"reminders-expanse"}
                    open={showRemindersExpanse}
                    anchorEl={anchorEl}
                    onClose={() => { setShowReminderExpanse(false); setAnchorEl(null); }}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                    }}
                >
                    <Box className={classes.popover}>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                            align="center"
                        >
                            Reminders
                        </Typography>
                        {showAllReminders()}
                    </Box>

                </Popover>
            </>
            : showAllReminders()
    );
};

Reminders.propTypes = {
    reminders: PropTypes.instanceOf(Array).isRequired,
};

export default withStyles(styles)(Reminders);
