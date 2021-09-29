import React from "react";
import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ children, title }) => {
  return (
    <div className="section">
      <h2 className={style.title}>{title.toUpperCase()}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
