/* eslint-disable no-undef */
import React from "react";
import { Header } from "./Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const Component = () => {
    return(
        <Provider store={store}>
            <Header/>
        </Provider>
    );
};

describe("Header snapshot render", () => {
    test("should Header render", () => {
        const { asFragment } = render(<Component/>);
        expect(asFragment()).toMatchSnapshot();
    });
});