import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {useDispatch, useSelector} from 'react-redux'

import { styles } from './LoginStyle'
import { useHistory } from 'react-router-dom';

import IMAGES from '../assets/Images';
import {setEmailId,setPassword, setLoginData} from '../redux/actions/LoginAction'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()
    const reducerEmailId = useSelector(state => state.LoginReducer.email)
    
    console.log('loginReducer =>>>>', reducerEmailId)

    return (
        <div style={styles.container}>
            <Card style={styles.login}>
                <img src={IMAGES.LOGO}
                    style={styles.logo}
                />

                <p style={styles.title}>Login</p>
                <TextField type="text"
                    value={email}
                    label="Email"
                    onChange={(newText) => {
                        setEmail(newText.target.value)
                    }}
                    style={styles.textBox}
                />
                <br />
                <br />

                <TextField
                    style={styles.textBox}
                    id="standard-basic" label="Password"
                    type='password'
                    onChange={(newText) => {
                        setPassword(newText.target.value)
                    }}
                    value={password}
                />
                <br />
                <div style={styles.forgotPassword}>

                    <a href="/forgotPassword" >Forgot Password?</a>
                </div>

                <br />
                <Button
                    onClick={(event) => {
                        dispatch(setEmailId(email))

                    }}
                    uppercase={"false"}
                    style={styles.buttonLogin}
                >
                    Login
                </Button>
                <Button
                    onClick={(event) => {
                        history.push({pathname:'/signup',state:{
                            email:'shubham@gmail.com'
                        }})
                    }}
                    uppercase={"false"}
                    style={styles.buttonSignUp}
                >
                    SignUp
                </Button>
                <div>Reducer email value = {reducerEmailId}</div>
            </Card>        </div>

    )
}
export default Login;
