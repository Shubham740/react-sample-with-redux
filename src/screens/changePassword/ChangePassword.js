import React, { useState } from 'react'
import { styles } from './ChangePasswordStyles'
import Card from '@material-ui/core/Card';
import CustomLogo from '../../custom/header/CustomLogo';
import STRINGS from '../../utils/Strings';
import CustomInput from '../../custom/inputbox/CustomInput';
import CustomButton from '../../custom/button/CustomButton';
import { useHistory } from 'react-router-dom';


const ChangePassword = (props) => {

    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [changePassword, setChangePassword] = useState('');
    const history = useHistory(); 

    return (<div style={styles.container}>
        <Card style={styles.cardStyle}>
            <CustomLogo title={STRINGS.VERIFY_ACCOUNT}
            />
            <CustomInput label={STRINGS.ENTER_CODE} type="number"
                value={code}
                onChange={(newText) => setCode(newText.target.value)}
            />
            <CustomInput label={STRINGS.NEW_PASSWORD} type="password"
                value={newPassword}
                onChange={(newText) => setNewPassword(newText.target.value)}
            />
            <CustomInput label={STRINGS.CHANGE_PASSWORD} type="password"
                value={changePassword}
                onChange={(newText) => setChangePassword(newText.target.value)}
            />
            <div style={styles.buttonView}>
  
                <CustomButton
                    title={STRINGS.GO_TO_LOGIN}
                    onClick={(e)=>history.replace('')}
                />
                              <CustomButton
                    title={STRINGS.CHANGE_PASSWORD}
                    isSecondary={true}

/>

            </div>

        </Card>
    </div>)
}
export default ChangePassword;
