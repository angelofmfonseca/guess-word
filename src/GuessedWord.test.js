import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { checkPropTypes } from "prop-types";

import GuessedWord from "./GuessedWord";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const guess = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
  ],
};

describe("<GuessedWord />", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<GuessedWord />);
    const guessedWordComponent = wrapper.find(
      "[data-test='guessed-word-component']"
    );
    expect(guessedWordComponent.length).toBe(1);
  });

  it("does not throw warnings with expected props", () => {
    const propsError = checkPropTypes(
      GuessedWord.propTypes,
      guess,
      "prop",
      GuessedWord
    );
    expect(propsError).toBeUndefined();
  });

  describe("if there are no words guessed", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<GuessedWord guess={[]} />);
    });

    it("renders without errors", () => {
      const guessedWordComponent = wrapper.find(
        "[data-test='guessed-word-component']"
      );
      expect(guessedWordComponent.length).toBe(1);
    });

    it("renders instructions to guess a word", () => {
      const guessWordInstructions = wrapper.find(
        "[data-test='guess-word-instructions']"
      );
      expect(guessWordInstructions.text().length).not.toBe(0);
    });
  });

  describe("if there are words guessed", () => {
    it("renders without erros", () => {});
  });
});
