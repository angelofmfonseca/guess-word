import React from "react";
import PropTypes from "prop-types";

import "./Congrats.css";

export default function Congrats(props) {
  return props.success ? (
    <section className="Congrats" data-test="congrats-component">
      <span data-test="congrats-message">
        Congratulations!!! You guessed the word!!!
      </span>
    </section>
  ) : (
    <section data-test="congrats-component" />
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
