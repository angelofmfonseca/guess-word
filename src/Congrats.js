import React from "react";

export default function Congrats(props) {
  if (props.success) {
    return (
      <section className="Congrats" data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations!!! You guessed the word!!!
        </span>
      </section>
    );
  }
  return <section data-test="congrats-component" />;
}
