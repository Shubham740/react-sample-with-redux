import { combineReducers } from 'redux'
import LoginReducer from './reducer/LoginReducer'
import ProductReducer from './reducer/ProductReducer'
export default combineReducers({
    LoginReducer:LoginReducer,
    ProductReducer:ProductReducer
    
})
