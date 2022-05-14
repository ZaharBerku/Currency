/* eslint-disable no-undef */
import { inputReducer } from "../inputReducer";
import { getValueInput, reverseValueInputs, changeInputValue, isDisableInput } from "../inputCreateActions";

const initialState = {
    valueInputFirst: 0,
    valueInputSecond: 0,
    isDisable: false,
};

const data = [
    {
        ccy: "USD",
        base_ccy: "UAH",
        buy: "31.50",
        sale: "32.18"
    },
    {
        ccy: "EUR",
        base_ccy: "UAH",
        buy: "33.05",
        sale: "33.75"
    },
    {
        ccy: "BTC",
        base_ccy: "USD",
        buy: "27303",
        sale: "30177"
    },
    {
        ccy: "EUR",
        base_ccy: "USD",
        buy: "1.05",
        sale: "0.95"
    }
];

describe("Reducer init state", () => {
    test("should state init", () => {
        expect(inputReducer()).toStrictEqual({
            valueInputFirst: 0,
            valueInputSecond: 0,
            isDisable: false,
        });
    });
});

describe("Reducer init takes actions", () => {
    test("should return proper value with GET_INPUT_VALUE type", () => {
        expect(inputReducer(initialState, getValueInput({
            name: "valueInputFirst",
            value: 5
        })))
            .toStrictEqual({
                valueInputFirst: 5,
                valueInputSecond: 0,
                isDisable: false,
            });
    });

    test("should return proper value with REVERSE_VALUE_INPUTS type",() => {
        expect(inputReducer(initialState, reverseValueInputs()))
        .toStrictEqual({
            valueInputFirst: 0,
            valueInputSecond: 0,
            isDisable: false,
        });
    });

    test("should return proper value with CHANGE_VALUE_INPUT type",() => {
        expect(inputReducer(initialState, changeInputValue({
            currency:[],
            nameFirst: "valueInputFirst",
            nameSecond: "valueInputSecond",
            ccy:"UAH",
            base_ccy:"USD"
        })))
        .toStrictEqual({
            valueInputFirst: 0,
            valueInputSecond: 0,
            isDisable: false,
        });
    });

    test("should return proper value with CHANGE_VALUE_INPUT type",() => {
        expect(inputReducer(initialState, changeInputValue({
            currency:data,
            nameFirst: "valueInputFirst",
            nameSecond: "valueInputSecond",
            ccy:"UAH",
            base_ccy:"USD"
        })))
        .toStrictEqual({
            valueInputFirst: 0,
            valueInputSecond: "0.000",
            isDisable: false,
        });
    });

    test("should return proper value with CHANGE_VALUE_INPUT type",() => {
        expect(inputReducer(initialState, changeInputValue({
            currency:data,
            nameFirst: "valueInputSecond",
            nameSecond: "valueInputFirst",
            ccy:"UAH",
            base_ccy:"USD"
        })))
        .toStrictEqual({
            valueInputFirst: "0.000",
            valueInputSecond: 0,
            isDisable: false,
        });
    });

    test("should return proper value with CHANGE_VALUE_INPUT type",() => {
        expect(inputReducer(initialState, changeInputValue({
            currency:data,
            nameFirst: "valueInputFirst",
            nameSecond: "valueInputSecond",
            ccy:"USD",
            base_ccy:"UAH"
        })))
        .toStrictEqual({
            valueInputFirst: 0,
            valueInputSecond: "0.000",
            isDisable: false,
        });
    });

    test("should return proper value with CHANGE_VALUE_INPUT type",() => {
        expect(inputReducer(initialState, changeInputValue({
            currency:data,
            nameFirst: "valueInputSecond",
            nameSecond: "valueInputFirst",
            ccy:"USD",
            base_ccy:"UAH"
        })))
        .toStrictEqual({
            valueInputFirst: "0.000",
            valueInputSecond: 0,
            isDisable: false,
        });
    });

    test("should return proper value with IS_DISABLE type",() => {
        expect(inputReducer(initialState, isDisableInput(5)))
        .toStrictEqual({
            valueInputFirst: 0,
            valueInputSecond: 0,
            isDisable: true,
        });
    });
});
