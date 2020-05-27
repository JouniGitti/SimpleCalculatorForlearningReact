
//synchronous action
import * as actionTypes from "./actionTypes";

export const saveResult = (res ) => {
    // the data could be transformed here e.g. const updatedResult = res * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
};

// due tpo thunk we now can call the previous function and do async function call:
// only sync actions may edit the store
// this is a simualtion of an async call with redux
export const storeResult = (res) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(res));
        }, 2000);
    }
};

export const deleteResult = (resultElementId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resultElementId
    }
};