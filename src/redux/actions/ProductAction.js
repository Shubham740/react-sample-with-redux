import ApiHelper from "../../api/ApiHelper";
import { GET_PRODUCT_LIST } from "../../api/ApiUrls";
import { getHeaders } from "../../utils/Utils";
import { SET_PRODUCT } from "../types";


export const fetchProduct = () => {

    return (dispatch) => {

        ApiHelper.fetchGet(GET_PRODUCT_LIST, {
            method: 'Get',
            headers: getHeaders()
        }).then(responseData => {
            dispatch(setProduct(responseData.response.docs));
        })
    }
}

function setProduct(product) {
    console.log("product=>>>", product)
    if (product) {
        return {
            type: SET_PRODUCT,
            payload: product
        }
    }

}