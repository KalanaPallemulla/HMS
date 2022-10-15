import React from "react";

const Description = ({ children, styles }) => {
  return (
    <div
      className={`font-serif font-semibold md:text-lg text-sm text-gray-600 opacity-70 ${styles}`}
    >
      {children}
    </div>
  );
};

export default Description;
