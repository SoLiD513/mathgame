import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div className="container">
      {props.answers.map(answer => (
        <button className="btn btn-primary" key={answer} value={answer}>
        {answer}
      </button>
      ))}
    </div>
  );
};

export default Button;
