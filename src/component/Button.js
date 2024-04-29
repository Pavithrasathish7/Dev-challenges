import React from "react";
import "./Button.css";

const Button1 = ({ children, className }) => {
  return <button className={`button ${className}`}>{children}</button>;
};

export default Button1;
