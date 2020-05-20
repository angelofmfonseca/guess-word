import React from "react";
import { shallow } from "enzyme";

import Input, { UnconnectedInput } from "./input";
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

describe("redux props", () => {
  it("has success piece of state as prop", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  it("guessWord action creator is a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guessWord action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";

  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
    };
    wrapper = shallow(<UnconnectedInput {...props} />);
    wrapper.setState({ currentGuess: guessedWord });
    const submitButton = wrapper.find("[data-test='component-submit-button']");
    submitButton.simulate("click", { preventDefault() {} });
  });

  it("calls guessWord when button is clicked", () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  it("calls guessWord with input value as argument", () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
});
