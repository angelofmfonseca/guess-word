import React from "react";
import { shallow } from "enzyme";

import Input from "./input";
import { storeFactory } from "../utils/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });

  describe("the word has not been guessed", () => {
    it("renders the component without errors", () => {
      const inputComponent = wrapper.find("[data-test='component-input']");
      expect(inputComponent.length).toBe(1);
    });

    it("renders the input box", () => {
      const inputBox = wrapper.find("[data-test='component-input-box']");
      expect(inputBox.length).toBe(1);
    });

    it("renders the submit button", () => {
      const submitButton = wrapper.find(
        "[data-test='component-submit-button']"
      );
      expect(submitButton.length).toBe(1);
    });
  });

  describe("the word has been guessed", () => {
    it("renders the component without errors", () => {
      const inputComponent = wrapper.find("[data-test='component-input']");
      expect(inputComponent.length).toBe(1);
    });

    it("does not render the input box", () => {
      const noInputBox = wrapper.find("[data-test='component-no-input-box']");
      expect(noInputBox.length).toBe(0);
    });

    it("does not render the submit button", () => {
      const noSubmitButton = wrapper.find(
        "[data-test='component-no-submit-button']"
      );
      expect(noSubmitButton.length).toBe(0);
    });
  });
});

describe("updating of the state", () => {
  it("", () => {});
});
