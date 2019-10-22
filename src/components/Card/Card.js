import React from "react";
import Button from "../Button/Button";
import "./Card.css";

const Card = props => {
  return (
    <div className="container">
      <div className="card">
        {props.question}
        <Button answers={props.answers} />
      </div>
    </div>
  );
};

export default Card;
