import React from "react";
import PropTypes from "prop-types";
import { StatisticsStyled } from "./StatisticsStyled";

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <StatisticsStyled>
      <ul>
        <li className="statisticsList">Good:{good}</li>
        <li className="statisticsList">Neutral:{neutral}</li>
        <li className="statisticsList">Bad:{bad}</li>
        <li className="statisticsList">Total:{countTotalFeedback()}</li>
        <li className="statisticsList">Positive Feedback:{countPositiveFeedbackPercentage().toFixed(2)}%</li>
      </ul>
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
