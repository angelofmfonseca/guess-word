import React from "react";
import { shallow } from "enzyme";
import { checkPropTypes } from "prop-types";

import GuessedWord from "./GuessedWord";

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
    let wrapper;
    const words = [
      { guessedWord: "car", letterMatchCount: 3 },
      { guessedWord: "bus", letterMatchCount: 1 },
      { guessedWord: "plane", letterMatchCount: 5 },
      { guessedWord: "train", letterMatchCount: 2 },
    ];

    beforeEach(() => {
      wrapper = shallow(<GuessedWord words={words} />);
    });

    it("renders without erros", () => {
      const guessedWordComponent = wrapper.find(
        "[data-test='guessed-word-component']"
      );
      expect(guessedWordComponent.length).toBe(1);
    });

    it("renders guess word section", () => {
      const guessedWordsArea = wrapper.find("[data-test='guess-area']");
      expect(guessedWordsArea.length).toBe(1);
    });

    it("displays the correct number of guessed words", () => {
      const numberOfGuesses = wrapper.find("[data-test='single-guess']");
      expect(numberOfGuesses.length).toBe(words.length);
    });
  });
});
