import React from "react";
import PropTypes from "prop-types";
import { FeedbackOptionsStyled } from "./FeedbackOptionsStyled";

const FeedbackOptions = ({ leaveFeedback, options }) => {
  return (
    <FeedbackOptionsStyled>
      {options.map((option) => (
        <button type="button" className="btnAdd" key={option} name={option} onClick={leaveFeedback}>
          {option.toUpperCase()}
        </button>
      ))}
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
