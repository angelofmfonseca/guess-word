import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return <section className="inputArea"></section>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Input);
