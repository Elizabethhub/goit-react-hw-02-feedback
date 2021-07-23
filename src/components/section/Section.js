import React from "react";

const Section = ({ children, title }) => {
  return (
    <>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </>
  );
};

export default Section;
