import React, { useRef } from 'react'
import CustomButton from '../../../../custom/button/CustomButton';
import useStyles from './UploadProfileImageStyles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import COLORS from '../../../../utils/Colors';

const UploadProfileImage = (props) => {
    const classes = useStyles();
    const inputFile = useRef(null)
    return (
        <div className={classes.parentView}>
            <div className={classes.iconView}>
            <CloudUploadIcon className={classes.iconStyle}  />
            <p className={classes.heading}>Upload Profile Image</p>
            </div>
            <p className={classes.uploadVideo}>Image Size must be less than 2mb</p>
            <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                onChange={(event) => {
                    console.log("file Name=>>>" + event)
                }}
            />
            <CustomButton
                isSecondary={true}
                title={"+Select"}
                onClick={(event) => {
                    inputFile.current.click();
                }}
            />

        </div>
    )
}
export default UploadProfileImage;
