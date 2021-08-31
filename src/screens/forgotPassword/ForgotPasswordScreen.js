import React from 'react'
import {styles} from './ForgotPasswordScreenStyles'
import Card from '@material-ui/core/Card';
import CustomLogo from '../../custom/header/CustomLogo';
import STRINGS from '../../utils/Strings';
import CustomInput from '../../custom/inputbox/CustomInput';
import CustomButton from '../../custom/button/CustomButton';

 const ForgotPassword =(props)=>{
    return(
        <div style={styles.container}>
            <Card style={styles.cardStyle}> 
            <CustomLogo title={STRINGS.FORGOT_PASSSWORD}/>
            <CustomInput
            label={STRINGS.EMAIL}
           />
            <div style={styles.buttonView}>

            <CustomButton
            title={STRINGS.SEND_EMAIL}
            type={'email'}
           
            />
            </div>
            </Card>
        </div>
    )
}
export default ForgotPassword;
