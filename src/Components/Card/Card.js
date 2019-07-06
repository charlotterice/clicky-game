import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.cardClickCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;