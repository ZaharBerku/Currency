import {GET_DATA_HEADER} from "./headerActions";

const initialState = {
    header:{},
};

const initialActions = {
    type: null, 
    payload: null
};

const headerReducer = (state = initialState, actions = initialActions) => {
    const { type, payload } = actions;
    switch (type) {
        case GET_DATA_HEADER:
            return {...state, header: payload};
        default:
            return state;
    }
};

export { headerReducer };
