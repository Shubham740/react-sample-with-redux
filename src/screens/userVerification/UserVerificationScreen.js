import React from 'react'
import { styles } from './UserVerificationStyles'
import Card from '@material-ui/core/Card';
import UnsubscribeIcon from '@material-ui/icons/Unsubscribe';
import CustomButton from '../../custom/button/CustomButton';
import STRINGS from '../../utils/Strings';
const UserVerificationScreen = (props) => {
    return (
        <div style={styles.container}>
            <Card style={styles.cardStyle}>
                <UnsubscribeIcon
                    style={styles.cardIcon}
                />
                <p style={styles.notVerifiedMesssage}>You haven't Verified your Email yet</p>
                <p style={styles.verifiedMesssage}>Please verify your email which is sent to shubhampusa740@gmail.com before continuing</p>
                <CustomButton
                    isSecondary={true}
                    title={STRINGS.SEND_EMAIL}
                />
            </Card>

        </div>
    )
}
export default UserVerificationScreen;
