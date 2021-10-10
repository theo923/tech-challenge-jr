import React from "react";
import { shallow } from "enzyme";
import { findJSXByAttr } from "./testUtils";
import Responsive from "../components/Responsive";

const setup = (props = {}, state = null) => {
    return shallow(<Responsive {...props} />);
};

test("check if Responsive runs successfully", () => {
    const wrapper = setup();
});

test("check if component-responsive runs successfully", () => {
    const wrapper = setup();
    const Responsive = findJSXByAttr(wrapper, "component-responsive");
    expect(Responsive.length).toBe(1);
});
