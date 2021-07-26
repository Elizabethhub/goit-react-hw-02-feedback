import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return (
    <p>
      <i>{message}</i>
    </p>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
