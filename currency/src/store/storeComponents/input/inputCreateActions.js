import {CHANGE_VALUE_INPUT, GET_INPUT_VALUE, IS_DISABLE, REVERSE_VALUE_INPUTS} from "./inputActions";






export const changeInputValue = (payload) => ({type:CHANGE_VALUE_INPUT, payload});

export const getValueInput = (value) => ({type:GET_INPUT_VALUE, payload:value});

export const isDisableInput = (payload) => ({type:IS_DISABLE, payload});

export const reverseValueInputs = () => ({type:REVERSE_VALUE_INPUTS});