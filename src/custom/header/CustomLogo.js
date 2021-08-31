import React from 'react'
import IMAGES from '../../assets/Images'
import {styles} from '../header/CustomLogoStyles'

const CustomLogo = (props) => {
    return (
        <div>
            <img src={IMAGES.LOGO}
                style={styles.logo}
            />
            <p style={styles.title}>{props.title}</p>
        </div>
    )
}

export default CustomLogo;
