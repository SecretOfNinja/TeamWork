import React from "react";
import DescriptionCard from "../DescriptionCard/DescriptionCard.jsx";
import "./DescriptionsContainer.css";

const DescriptionsContainer = () => {
  return (
    <div className="descriptions-container">
      <div className="descriptions-container-left">
        <DescriptionCard
          subtitle="Precise Recognition of Food"
          description="Food AI API utilizes highly trained models that are not only able to recognize a variety of dishes but has the granularity to differentiate between different presentation style, preparation methods, and regional variations."
        />
        <DescriptionCard
          subtitle="Perpetually Evolving Food Identification"
          description="Food AI API is developed with the latest in machine learning techniques. With every photo we are able to continuously improve the accuracy of Food AI API by immediately piping those photos into our training sets."
        />
      </div>
      <div className="descriptions-container-right">
        <DescriptionCard
          subtitle="
                Highly Diverse Food Database"
          description="Our database encompasses many regional and ethnic specialty food items. Never before has it been possible to receive analysis on such a wide selection of foods."
        />
        <DescriptionCard
          subtitle="
        Rapid Analysis"
          description="Within a second a photo can become a highly detailed food profile complete with nutrition information and soon even more."
        />
      </div>
    </div>
  );
};

export default DescriptionsContainer;
