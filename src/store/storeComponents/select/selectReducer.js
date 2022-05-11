import { GET_OPTIONS, 
    FILTER_OPTIONS_SELECT_FIRST, 
    FILTER_OPTIONS_SELECT_SECOND, 
    REVERSE_VALUE_SELECT,
    GET_BASE_CCY,
    GET_CCY } from "./selectActions";

const initialState = {
    options:[],
    optionsSelectFirst:[],
    optionsSelectSecond:[],
    ccy:"EUR",
    base_ccy:"UAH",
};

const selectReducer = (state = initialState, actions) => {

    const { type, payload } = actions;
    const newOptions = [...state.options];
    const filterOptions = newOptions.filter(element => element.value !== (payload));


    switch (type) {
        case GET_OPTIONS:
            return {...state, options:payload, optionsSelectFirst:payload, optionsSelectSecond:payload};
        case FILTER_OPTIONS_SELECT_FIRST:
            return {...state, optionsSelectFirst: filterOptions};
        case FILTER_OPTIONS_SELECT_SECOND:
            return {...state, optionsSelectSecond: filterOptions};
        case GET_CCY:
            return {...state, ccy:payload};
        case GET_BASE_CCY:
            return {...state, base_ccy:payload};
        case REVERSE_VALUE_SELECT:
            return {
                ...state, 
                optionsSelectFirst:state.optionsSelectSecond, 
                optionsSelectSecond:state.optionsSelectSecond,
                ccy: state.base_ccy,
                base_ccy: state.ccy
            };
        default:
            return state;
    }
};

export { selectReducer };