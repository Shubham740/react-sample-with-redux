import React, { useState, useRef, useEffect } from 'react'
import CustomInput from '../../custom/inputbox/CustomInput'
import Card from '@material-ui/core/Card';
import { styles } from '../signup/SignupStyle'
import CustomLogo from '../../custom/header/CustomLogo';
import STRINGS from '../../utils/Strings';
import CustomButton from '../../custom/button/CustomButton';
import FeedbackDialog from '../../dialogs/FeedbackDialog';
import { setEmailId, setPassword, setLoginData } from '../../redux/actions/LoginAction'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/actions/ProductAction';


const SignUpScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [yourExpLevel, setYourExpLevel] = useState('');
    const [feedbackDialog, setFeedbackDialog] = useState(false);

    const dispatch = useDispatch()
    const productList = useSelector(state => state.ProductReducer.productList)

    console.log('productList=>>>', productList);

    return (
        <div style={styles.container}>
            <Card style={styles.cardStyle}>
                <CustomLogo title={STRINGS.SIGNUP_FORM}
                />
                <CustomInput label={STRINGS.EMAIL}
                    value={email}
                    onChange={(newText) => setEmail(newText.target.value)}
                />
                <CustomInput label={STRINGS.PASSWORD} type="password"
                    value={password}
                    onChange={(newText) => setPassword(newText.target.value)}
                />
                <CustomInput label={STRINGS.CONFIRM_PASSWORD} type="password"
                    value={confirmPassword}
                    onChange={(newText) => setConfirmPassword(newText.target.value)}
                />
                <CustomInput label={STRINGS.YOUR_NAME}
                    value={name}
                    onChange={(newText) => setName(newText.target.value)}
                />
                <CustomInput label={STRINGS.JOB_CATEGORY}
                    value={jobCategory}
                    onChange={(newText) => setJobCategory(newText.target.value)}
                />
                <CustomInput label={STRINGS.YOUR_EXPERIENCE_LEVEL}
                    value={yourExpLevel}
                    onChange={(newText) => setYourExpLevel(newText.target.value)}
                />
                <div style={styles.buttonView}>
                    <CustomButton title={STRINGS.SIGNUP} isSecondary={true}
                    onClick={()=>{
                        dispatch(fetchProduct())
                    }}
                    />
                    {feedbackDialog == true &&
                        <FeedbackDialog
                        style={{alignSelf:'center', backgroundColor:'blue', position:'absolute'}}
                        />
                    }
                    <CustomButton title={STRINGS.GO_TO_LOGIN}
                        onClick={(event) => {
                            setFeedbackDialog(true)
                        }}
                    />
                </div>

            </Card>
        </div>

    )
}
export default SignUpScreen;
