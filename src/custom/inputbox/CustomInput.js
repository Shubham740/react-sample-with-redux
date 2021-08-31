import React from 'react'
import TextField from '@material-ui/core/TextField';
 import {styles} from './CustomInputStyles'

const CustomInput =(props)=>{
    return(
        <div>
           <TextField
           style={styles.textBox}
           label={props.label}
           type={props.type==undefined?'email':props.type}
           {...props}
           />
        </div>
    )
}
export default CustomInput;
