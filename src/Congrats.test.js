import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { checkPropTypes } from "prop-types";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<Congrats />", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Congrats success={false} />);
    const congratsComponent = wrapper.find("[data-test='congrats-component']");
    expect(congratsComponent.length).toBe(1);
  });

  it("renders no text when success prop is false", () => {
    const wrapper = shallow(<Congrats success={false} />);
    const noTextMessage = wrapper.find("[data-test='congrats-component']");
    expect(noTextMessage.text()).toBe("");
  });

  it("renders a congrats message when success prop is true", () => {
    const wrapper = shallow(<Congrats success={true} />);
    const congratsMessage = wrapper.find("[data-test='congrats-message']");
    expect(congratsMessage.text().length).not.toBe(0);
  });

  it("does not throw warnings with expected props", () => {
    const expectedProps = { success: false };
    const propsError = checkPropTypes(
      Congrats.propTypes,
      expectedProps,
      "prop",
      Congrats
    );
    expect(propsError).toBeUndefined();
  });
});
