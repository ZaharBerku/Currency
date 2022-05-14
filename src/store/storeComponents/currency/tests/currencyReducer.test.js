/* eslint-disable no-undef */
import { currencyReducer } from "../currencyReducer";
import { GET_DATA_CURRENCY } from "../currencyActions";

const initialState = {
    data: [],
};

const getDataCurrency = (data) => ({type:GET_DATA_CURRENCY, payload:data});


describe("Reducer init state", () => {
    test("should state init", () => {
        expect(currencyReducer()).toStrictEqual({
            data: []
        });
    });
});

describe("Reducer init takes actions", () => {
    test("should return proper data", () => {
        expect(currencyReducer(initialState, getDataCurrency(5)))
        .toStrictEqual({
            data:5
        });
    });
});