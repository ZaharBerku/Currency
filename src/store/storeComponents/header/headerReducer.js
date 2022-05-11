import {GET_DATA_HEADER} from "./headerActions";


const initialState = {
    header:{},
};


const headerReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case GET_DATA_HEADER:
            return {...state, header: payload};
        default:
            return state;
    }
};
export default headerReducer;
