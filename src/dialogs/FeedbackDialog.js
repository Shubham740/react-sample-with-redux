import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import useStyles from './FeedbackDialogStyles'
import CustomInput from '../custom/inputbox/CustomInput';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CustomButton from '../custom/button/CustomButton';
import STRINGS from '../utils/Strings';


const FeedbackDialog = (props) => {
    const [open, setOpen] = React.useState(true);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    return (
        <div >
            <Dialog open={open} onClose={handleClose}
                fullScreen={true}
                classes={{ paper: classes.paper }}
            >
                <p className={classes.title} >Feedback</p>
                <TextareaAutosize
                    multiline={true}
                    label={'Message'}
                    className={classes.inputBoxBorder}
                    rows={2}
                    rowsMax={3}
                />
                <div style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '30px', marginTop: '20px' }}>

                    <CustomButton
                        title={STRINGS.SEND_FEEDBACK}
                    />
                </div>

            </Dialog>
        </div>

    )
}

export default FeedbackDialog;
