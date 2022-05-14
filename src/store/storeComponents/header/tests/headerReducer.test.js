/* eslint-disable no-undef */
import { headerReducer } from "../headerReducer";
import { getDataHeader } from "../headerCreateActions";

const initialState = {
    header: {},
};

describe("Reducer init state", () => {
    test("should state init", () => {
        expect(headerReducer()).toStrictEqual({
            header: {}
        });
    });
});

describe("Reducer init takes actions", () => {
    test("should return proper header", () => {
        expect(headerReducer(initialState, getDataHeader(5)))
        .toStrictEqual({
            header:5
        });
    });
});