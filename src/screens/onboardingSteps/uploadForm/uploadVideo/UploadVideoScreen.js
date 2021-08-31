import React,{useRef} from 'react'
import CustomButton from '../../../../custom/button/CustomButton';
import useStyles from './UploadVideoStyles'
const UploadVideoScreen = (props) => {
    const classes = useStyles();
    const inputFile = useRef(null) 
    return (
        <div className={classes.parentView}>

            <p className={classes.heading}>Select a video from your computer to upload</p>
            <p className={classes.uploadVideo}>(Upload your introduction video for resume)</p>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}
            onChange={(event)=>{
                console.log("file Name=>>>"+event)
            }}
            />
            <CustomButton
            isSecondary={true}
            title={"+Select"}
            onClick={(event)=>{
                inputFile.current.click();
            }}
            />

        </div>
    )
}
export default UploadVideoScreen;
