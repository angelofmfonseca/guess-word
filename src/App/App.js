import React, { Component } from "react";

import GuessedWord from "../GuessedWord/GuessedWord";
import Congrats from "../Congrats/Congrats";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <section className="App">
        <h1 className="appTitle">Guess Word Game</h1>
        <Congrats success={false} />
        <GuessedWord words={[]} />
      </section>
    );
  }
}
