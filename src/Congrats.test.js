import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<Congrats />", () => {
  it("renders without error", () => {});

  it("renders no text when success prop is false", () => {});

  it("renders a congrats message when success prop is true", () => {});
});
