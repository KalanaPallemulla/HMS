import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  email,
  navigationRoutes,
  phoneNumber,
} from "../../controller/constants";
import { hotelName } from "../../controller/constants";
const NavigationBar = () => {
  const location = useLocation();

  return (
    <div className=" border-b-2 border-b-orange-400 rounded-br-full   backdrop-blur-sm fixed w-screen top-0 z-40">
      <div className="h-8 flex items-center bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 px-8 md:px-36 justify-around rounded-br-full ">
        <div className="font-serif text-gray-200 font-bold text-sm">
          {email}
        </div>
        <div className="font-serif text-gray-200 font-bold text-sm">
          {phoneNumber}
        </div>
      </div>
      <div className="h-20 md:h-16  flex items-center md:px-40">
        <div className="flex w-full flex-col md:flex-row md:justify-between">
          <div className="text-2xl font-serif text-gray-600 font-semibold text-opacity-80 text-center ">
            {hotelName}
          </div>
          <div className="flex space-x-4 items-center justify-center mt-2">
            {navigationRoutes.map((nav, index) => (
              <Link
                key={index}
                to={nav.link}
                className={
                  location.pathname === nav.link
                    ? "font-serif text-orange-600 underline"
                    : "font-serif text-gray-600 "
                }
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
