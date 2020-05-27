import * as actionTypes from "./actionTypes";

export const increase = () => {
    return {
        type: actionTypes.INCREASE
    }
};

export const decrease = () => {
    return {
        type: actionTypes.DECREASE
    }
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
};