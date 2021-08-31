import React from 'react'
import CustomButton from '../../../../custom/button/CustomButton';
import CustomInput from '../../../../custom/inputbox/CustomInput';
import STRINGS from '../../../../utils/Strings';
import useStyles from './PasteYoutubeLinkStyle'
const PasteYoutubeLink = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.parentView}>

            <h1 className={classes.heading}>
                Import Video from Youtube URL
            </h1>
            

<CustomInput
label={STRINGS.PLEASE_ENTER_YOUTUBE_URL}
/>
<div className={classes.buttonView}>

<CustomButton
title={STRINGS.SUBMIT}
/>

</div>
        </div>
    )
}
export default PasteYoutubeLink;
