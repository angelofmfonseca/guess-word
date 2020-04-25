import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { checkPropTypes } from "prop-types";

import GuessedWord from "./GuessedWord";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<GuessedWord />", () => {
  it("renders without errors", () => {
    const wrapper = shallow(<GuessedWord />);
  });

  it("does not throw warnings with expected props", () => {
    const defaultProps = {
      guessedWords: [
        {
          guessedWord: "train",
          letterMatchCount: 3,
        },
      ],
    };
    const propsError = checkPropTypes(
      GuessedWord.propTypes,
      defaultProps,
      "prop",
      GuessedWord
    );
    expect(propsError).toBeUndefined();
  });
});
