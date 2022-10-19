import React from "react";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

const Container = ({ children, styles, top }) => {
  return (
    <div>
      <NavigationBar />
      <div className={`${top ? "mt-28 md:mt-24" : "mt-28 md:mt-0"} ${styles} `}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Container;
