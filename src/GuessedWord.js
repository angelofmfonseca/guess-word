import React from "react";
import PropTypes from "prop-types";

export default function GuessedWord() {
  return <section className="GuessedWord"></section>;
}

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};
