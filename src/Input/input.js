import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../actions";

export class UnconnectedInput extends Component {
  render() {
    const { success, gaveUp } = this.props;

    return success || gaveUp ? null : (
      <form className="inputArea" data-test="component-input">
        <input
          className="inputBox"
          type="text"
          placeholder="Enter your guess"
          data-test="component-input-box"
        />
        <button
          type="submit"
          className="inputButton"
          data-test="component-submit-button"
          onClick={() => this.props.guessWord("train")}
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
