import {SET_PRODUCT} from '../types';

const initialState = {
    productList:[]
 }


 export default function(state = initialState, action){
        console.log('action and dispatch ==>>>', action,initialState)
        switch(action.type){

        case SET_PRODUCT:
        return {
            ...state,
            productList:[...state.productList,...action.payload],
        }
        default: return state
    }

}


