import React from "react";

export default function Button({ children, onClick, className = "", ...rest }) {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
