/* eslint-disable no-undef */
import { selectReducer } from "../selectReducer";
import { getBaseCcy, getCcy, getOptions, reverseValueSelect, filterOptions } from "../selectCreateActions";
import { FILTER_OPTIONS_SELECT_FIRST, FILTER_OPTIONS_SELECT_SECOND } from "../selectActions";

const initialState = {
    options:[],
    optionsSelectFirst:[],
    optionsSelectSecond:[],
    ccy:"EUR",
    base_ccy:"UAH",
};

describe("Reducer init state", () => {
    test("should state init", () => {
        expect(selectReducer()).toStrictEqual({
            options:[],
            optionsSelectFirst:[],
            optionsSelectSecond:[],
            ccy:"EUR",
            base_ccy:"UAH",
        });
    });
});

describe("Reducer init takes actions", () => {
    test("should return proper select with GET_OPTIONS type", () => {
        expect(selectReducer(initialState, getOptions(null)))
        .toStrictEqual({
            options:null,
            optionsSelectFirst:null,
            optionsSelectSecond:null,
            ccy:"EUR",
            base_ccy:"UAH",
        });
    });

    test("should return select with GET_BASE_CCY type", () => {
        expect(selectReducer(initialState, getBaseCcy("n")))
        .toStrictEqual({
            options:[],
            optionsSelectFirst:[],
            optionsSelectSecond:[],
            ccy:"EUR",
            base_ccy:"n",
        });
    });

    test("should return select with GET_CCY type", () => {
        expect(selectReducer(initialState, getCcy("n")))
        .toStrictEqual({
            options:[],
            optionsSelectFirst:[],
            optionsSelectSecond:[],
            ccy:"n",
            base_ccy:"UAH",
        });
    });

    test("should return select with REVERSE_VALUE_SELECT type", () => {
        expect(selectReducer(initialState, reverseValueSelect()))
        .toStrictEqual({
            options:[],
            optionsSelectFirst:[],
            optionsSelectSecond:[],
            ccy:"UAH",
            base_ccy:"EUR",
        });
    });

    test("should return select with FILTER_OPTIONS_SELECT_FIRST type", () => {
        expect(selectReducer(initialState, filterOptions(FILTER_OPTIONS_SELECT_FIRST, null)))
        .toStrictEqual({
            options:[],
            optionsSelectFirst:[],
            optionsSelectSecond:[],
            ccy:"EUR",
            base_ccy:"UAH",
        });
    });

    test("should return select with FILTER_OPTIONS_SELECT_SECOND type", () => {
        expect(selectReducer(initialState, filterOptions(FILTER_OPTIONS_SELECT_SECOND, null)))
        .toStrictEqual({
            options:[],
            optionsSelectFirst:[],
            optionsSelectSecond:[],
            ccy:"EUR",
            base_ccy:"UAH",
        });
    });
});