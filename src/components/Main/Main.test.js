/* eslint-disable no-undef */
import React from "react";
import { Main } from "./Main";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const Component = () => {
    return(
        <Provider store={store}>
            <Main/>
        </Provider>
    );
};

describe("Main snapshot render", () => {
    test("should Main render", () => {
        const { asFragment } = render(<Component/>);
        expect(asFragment()).toMatchSnapshot();
    });
});