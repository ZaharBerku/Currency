/* eslint-disable no-undef */
import React from "react";
import { Button } from "./Button";
import { render } from "@testing-library/react";

const handelClick = jest.fn();

const Component = (props) => (
  <Button additionalClassNames="active" {...props}>
    Click me
  </Button>
);

describe("Rendor button", () => {
    test("should render button", () => {
      const { asFragment } = render(<Component/>);
      expect(asFragment()).toMatchSnapshot();
    });
});

describe("Button click", () => {
    test("should click on button work", () => {
      const { getByTestId } = render(<Component handelClick={handelClick}/>);
      const button = getByTestId("button");
      button.click();
      expect(handelClick).toBeCalled();
    });
});