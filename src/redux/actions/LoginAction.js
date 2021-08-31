import { SET_EMAIL, SET_LOGIN_DATA } from "../types";

export function setEmailId(emaiId){
    return{
        type:SET_EMAIL,
        payload:emaiId
    }
}
export function setPassword(password){
    return{
        type:SET_EMAIL,
        payload:password
    }
}
export function setLoginData(data){
    return{
        type:SET_LOGIN_DATA,
        payload:data
    }

}