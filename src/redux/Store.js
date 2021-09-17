import {applyMiddleware, createStore} from 'redux'
import RootReducer  from './RootReducer'
import ReduxThunk from 'redux-thunk'

const initalState = {

}

const Store = createStore(RootReducer, initalState,applyMiddleware(ReduxThunk))

export default Store;

