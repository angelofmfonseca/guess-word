import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null,
    };
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(e) {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
      this.setState({ currentGuess: "" });
    }
  }

  render() {
    const { success, gaveUp } = this.props;
    return success || gaveUp ? null : (
      <form className="inputArea" data-test="component-input">
        <input
          className="inputBox"
          type="text"
          placeholder="Enter your guess"
          data-test="component-input-box"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        />
        <button
          type="submit"
          className="inputButton"
          data-test="component-submit-button"
          onClick={(e) => this.submitGuessedWord(e)}
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
