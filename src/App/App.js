import React, { Component } from "react";
import { connect } from "react-redux";

import GuessedWord from "../GuessedWord/GuessedWord";
import Congrats from "../Congrats/Congrats";
import Input from "../Input/input";
import "./App.css";
import { getSecretWord } from "../actions";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <section className="App">
        <h1 className="appTitle">Guess Word Game</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWord words={[this.props.guessedWords]} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
