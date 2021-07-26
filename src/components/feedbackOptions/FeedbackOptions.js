import React from "react";
import { FeedbackOptionsStyled } from "./FeedbackOptionsStyled";

const FeedbackOptions = ({ leaveFeedback, options }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map((option) => (
        <button type="button" className="btnAdd" name={option} onClick={leaveFeedback}>
          {option.toUpperCase()}
        </button>
      ))}
    </FeedbackOptionsStyled>
  );
};

export default FeedbackOptions;
