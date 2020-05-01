import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return this.props.success ? null : (
      <form className="inputArea" data-test="component-input">
        <input className="inputBox" data-test="component-input-box"></input>
        <button
          type="submit"
          className="inputButton"
          data-test="component-submit-button"
        ></button>
      </form>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
