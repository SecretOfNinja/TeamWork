import React from "react";
import "./DescriptionCard.css";

const DescriptionCard = (props) => {
  return (
    <div className="description-card-container">
      <img src={props.icon} alt="" />
      <h3>{props.subtitle}</h3>

      <p>{props.description}</p>
    </div>
  );
};

export default DescriptionCard;
