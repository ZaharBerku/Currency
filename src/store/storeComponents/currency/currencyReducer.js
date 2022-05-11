import { GET_DATA_CURRENCY } from "./currencyActions";

const initialState = {
    data: [],
};

const currencyReducer = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case GET_DATA_CURRENCY:
            return {...state, data: payload};
        default:
            return state;
    }
};

export { currencyReducer };
