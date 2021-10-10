import React from "react";
import { shallow } from "enzyme";
import { findJSXByAttr } from "./testUtils";
import Login from "../components/Login";

const setup = (props = {}, state = null) => {
    return shallow(<Login {...props} />);
};

test("check if Login runs successfully", () => {
    const wrapper = setup();
});

test("check if component-login runs successfully", () => {
    const wrapper = setup();
    const Login = findJSXByAttr(wrapper, "component-login");
    expect(Login.length).toBe(1);
});
