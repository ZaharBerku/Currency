/* eslint-disable no-undef */
import React from "react";
import { Input } from "./index";
import { render } from "@testing-library/react";

const Component = (props) => {
    return(
        <Input type="text" value="input" additionalClassNames="active" placeholder="text" {...props}/>
    );
};


describe("Input snapshot render", () => {
    test("should Input render", () => {
        const { asFragment } = render(<Component/>);
        expect(asFragment()).toMatchSnapshot();
    });
});
