import React from "react";
import PropTypes from "prop-types";

export default function GuessedWord(props) {
  return (
    <section className="GuessedWord" data-test="guessed-word-component">
      {props.words ? (
        <div data-test="guess-area">
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {props.words.map((word, index) => {
                return (
                  <tr key={index} data-test="single-guess">
                    <td>{word.guessedWord}</td>
                    <td>{word.letterMatchCount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
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
