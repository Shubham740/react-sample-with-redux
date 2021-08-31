import React,{useState} from 'react'
import {styles} from './MakeResumeStyles'
import Card from '@material-ui/core/Card';
import CustomLogo from '../../../custom/header/CustomLogo';
import STRINGS from '../../../utils/Strings';
import CustomInput from '../../../custom/inputbox/CustomInput';
import CustomButton from '../../../custom/button/CustomButton';

 const MakeResume =(props)=>{
const [resumeName,setResumeName]=useState(''); 
    const {callback}=props;
    return(
        <div style={styles.container}>
            <Card style={styles.cardStyle}> 
            <CustomLogo title={STRINGS.NAME_YOUR_RESUME}/>
            <CustomInput
            value={resumeName}
            label={STRINGS.ENTER_RESUME_NAME}
            onChange={(newText)=>setResumeName(newText.target.value)}
           />
            <div style={styles.buttonView}>

            <CustomButton
            
            title={STRINGS.NEXT}
            type={'email'}
           onClick={(event)=>{

            if(callback!=undefined){
                callback(resumeName)
            }
           }}
           />
            
            </div>
            </Card>
        </div>
    )
}
export default MakeResume;
