import { GET_OPTIONS, REVERSE_VALUE_SELECT, GET_CCY, GET_BASE_CCY } from "./selectActions";


export const getOptions = (payload) => ({type:GET_OPTIONS, payload});

export const filterOptions = (type, payload) => ({type, payload});

export const reverseValueSelect = () =>({type:REVERSE_VALUE_SELECT});

export const getCcy = (ccy) => ({type:GET_CCY, payload: ccy});

export const getBaseCcy = (baseCcy) => ({type:GET_BASE_CCY, payload: baseCcy});