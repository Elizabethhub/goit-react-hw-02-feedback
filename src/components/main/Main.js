import React, { Component } from "react";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions";
import Notification from "../notification/Notification";
import Section from "../section/Section";
import Statistics from "../statistics/Statistics";

class Main extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (event) => {
    this.setState((prev) => ({
      [event.target.name]: prev[event.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions leaveFeedback={this.leaveFeedback} options={Object.keys(this.state)} />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() ? (
            <Statistics
              {...this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default Main;
