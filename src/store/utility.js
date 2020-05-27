export const  updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

// we expect two JS objects in, and return the old properties distributed to new objects