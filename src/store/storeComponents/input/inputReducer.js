import { CHANGE_VALUE_INPUT, GET_INPUT_VALUE, IS_DISABLE, REVERSE_VALUE_INPUTS } from "./inputActions";

const initialState = {
    valueInputFirst: 0,
    valueInputSecond: 0,
    isDisable: false,
};

const initialActions = {
    type: null,
    payload: null
};

const inputReducer = (state = initialState, actions = initialActions) => {

    const { type, payload } = actions;

    const elemFirst = payload?.currency?.find(element => element.ccy === payload.ccy && element.base_ccy === payload.base_ccy);
    const elemSecond = payload?.currency?.find(element => element.base_ccy === payload.ccy && element.ccy === payload.base_ccy);
    const currency = ["UAH", "USD", "EUR"];

    switch (type) {
        case CHANGE_VALUE_INPUT:
            if (payload.currency.length) {
                if (currency.indexOf(payload.ccy) > currency.indexOf(payload.base_ccy)) {
                    if (payload.nameFirst === "valueInputSecond") {
                        return { ...state, [payload.nameSecond]: (state[payload.nameFirst] / (elemSecond || elemFirst)?.buy)?.toFixed(3) };
                    }
                    return { ...state, [payload.nameSecond]: (state[payload.nameFirst] * (elemSecond || elemFirst)?.buy)?.toFixed(3) };
                }
                if (currency.indexOf(payload.ccy) < currency.indexOf(payload.base_ccy)) {
                    if (payload.nameFirst === "valueInputSecond") {
                        return { ...state, [payload.nameSecond]: (state[payload.nameFirst] * (elemSecond || elemFirst)?.buy)?.toFixed(3) };
                    }
                    return { ...state, [payload.nameSecond]: (state[payload.nameFirst] / (elemSecond || elemFirst)?.buy)?.toFixed(3) };
                }
            }
            return state;

        case GET_INPUT_VALUE:
            return { ...state, [payload.name]: payload.value };

        case IS_DISABLE:
            return (payload?.base_ccy && payload?.ccy) ? { ...state, isDisable: false } : { ...state, isDisable: true };

        case REVERSE_VALUE_INPUTS:
            return { ...state, valueInputFirst: state.valueInputSecond, valueInputSecond: state.valueInputFirst };

        default:
            return state;
    }
};

export { inputReducer };