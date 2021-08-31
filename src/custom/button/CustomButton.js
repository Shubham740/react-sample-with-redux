import React from 'react'
import Button from '@material-ui/core/Button';
import {styles} from './CustomButtonStyle'
const CustomButton =(props)=>{
    return(
        <div>
            <Button style={props.isSecondary==undefined?styles.buttonPrimary:styles.buttonSecondary}
                {...props}
            >
                {props.title}
            </Button>
        </div>
    )
}
export default CustomButton;
