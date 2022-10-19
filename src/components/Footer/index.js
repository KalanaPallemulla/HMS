import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  downloadNow,
  email,
  footerBottomText,
  hotelName,
  license,
  navigationRoutes,
  phoneNumber,
} from "../../controller/constants";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

const Footer = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="flex flex-col items-center mt-16 bg-orange-600 py-8">
      <h1 className="font-serif text-3xl text-white text-center">
        {hotelName}
      </h1>
      <div className="flex w-44 text-sm justify-between text-white mt-8 font-sans font-extralight">
        <h1>{downloadNow}</h1>
        <h1>{license}</h1>
      </div>
      <div className="flex justify-between space-x-8 md:space-x-16  mt-8 font-serif text-gray-700 text-sm">
        {navigationRoutes.map((nav, index) => (
          <Link
            key={index}
            to={nav.link}
            className={`font-serif text-md ${
              nav.link === location.pathname ? "text-white" : "text-gray-600"
            } hover:text-white `}
          >
            {nav.name}
          </Link>
        ))}
      </div>
      <div className="mt-8 md:flex md:space-x-8 text-xs text-white font-sans text-center">
        <h1>{email}</h1>
        <h1 className="mt-4 md:mt-0">{phoneNumber}</h1>
      </div>
      <div className="mt-4 flex md:space-x-8 space-x-4 text-xs">
        <AiFillFacebook size={25} color={"#fff"} />
        <AiFillInstagram size={25} color={"#fff"} />
      </div>
      <div className="mt-8 border-t border-t-gray-300 w-screen flex justify-center">
        <h1 className="mt-4 mb-4  text-xs font-sans text-white flex items-center ">
          <AiOutlineCopyrightCircle className="mr-1" /> {footerBottomText}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
