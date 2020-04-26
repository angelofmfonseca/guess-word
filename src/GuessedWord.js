import React from "react";
import PropTypes from "prop-types";

export default function GuessedWord(props) {
  return (
    <section className="GuessedWord" data-test="guessed-word-component">
      {!props.guessedWords && (
        <span data-test="guess-word-instructions">
          Try to guess the secret word!!!
        </span>
      )}
    </section>
  );
}

GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};
