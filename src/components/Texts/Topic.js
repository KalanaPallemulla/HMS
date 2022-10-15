import React from "react";

const Topic = ({ children }) => {
  return (
    <div className="font-serif font-semibold md:text-3xl text-xl text-orange-600 opacity-70">
      {children}
    </div>
  );
};

export default Topic;
