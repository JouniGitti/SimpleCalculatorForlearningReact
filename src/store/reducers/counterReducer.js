import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREASE:
            return updateObject(state, {counter: state.counter + 1});
            // can aslso be like this:
            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState;
        case actionTypes.DECREASE:
            return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val});
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.val});
            // return {
            //     ...this.state,
            //     counter: state.counter - action.val
            // } replaced in all cases by the utilityfunction updateObject
    }
    return state;
};

export default counterReducer;