import React from "react";
import { shallow } from "enzyme";
import { findJSXByAttr } from "./testUtils";
import Policy from "../components/Policy";

const setup = (props = {}, state = null) => {
    return shallow(<Policy {...props} />);
};

jest.mock("react-router-dom", () => ({
    useLocation: jest.fn(),
}));

test("check if Policy runs successfully", () => {
    const wrapper = setup();
});

test("check if component-policy runs successfully", () => {
    const wrapper = setup();
    const Policy = findJSXByAttr(wrapper, "component-policy");
    expect(Policy.length).toBe(1);
});
