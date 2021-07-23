import React from "react";

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{countTotalFeedback()}</li>
      <li>Positive Feedback:{countPositiveFeedbackPercentage().toFixed(2)}%</li>
    </ul>
  );
};

export default Statistics;
