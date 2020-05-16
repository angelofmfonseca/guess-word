import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../actions";

class Input extends Component {
  render() {
    return this.props.success ? null : (
      <form className="inputArea" data-test="component-input">
        <input
          className="inputBox"
          type="text"
          placeholder="Enter your guess"
          data-test="component-input-box"
        ></input>
        <button
          type="submit"
          className="inputButton"
          data-test="component-submit-button"
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

export default connect(mapStateToProps, { guessWord })(Input);
