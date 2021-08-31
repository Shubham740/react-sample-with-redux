import React from 'react'
import IMAGES from '../../assets/Images';
import CustomButton from '../../custom/button/CustomButton';
import STRINGS from '../../utils/Strings';
import { styles } from './OnboardingStyles'
const OnboardingScreen = (props) => {
    return (
        <div style={styles.container}>
            <img src={IMAGES.LOGO}
                style={styles.logoStyle}
            />
            <p style={styles.makeResume}>Welcome to make my resume!</p>
            <p style={styles.welcomeMessage}>From the whole team here, thank you for trying us. we are commited to make it easier for you to do great work.</p>
      <div style={{marginTop:'20px'}}>

       <CustomButton title={STRINGS.LETS_GO}/>
       </div>

        </div>
    )
}
export default OnboardingScreen;
