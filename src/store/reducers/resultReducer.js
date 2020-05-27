import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
CD SRC
const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter( result => result.id !== action.resultElementId);
    return updateObject(state, {results: updatedArray});
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);dir
    return state;
};

export default resultReducer;

// Second ways of doing:
// const resultReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.STORE_RESULT:
//             return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
//         // return {
//         //     ...state,
//         //     results: state.results.concat({id: new Date(), value: action.result}) // because has not access to global state, needs data as payload
//         //     //This is the preivous way. Curly braces create an object in stead of number
//         //     //Concat returns a new array unlike push
//         case actionTypes.DELETE_RESULT:
//             // const id = 2;
//             // const newArray = [...state.results];
//             // newArray.splice(id, 1)
//             return deleteResult(state, action);
//     }
//     return state;
// };