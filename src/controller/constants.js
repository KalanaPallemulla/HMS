//imports
import Home from "../pages/Home";
import Login from "../pages/Login";

//Defines
export const active = false;
export const activeHome = true;
export const hotelName = "Dream World";
export const home = "Home";
export const booking = "Booking";
export const service = "Service";
export const join = "Join";
export const routePath = {
  home: "/",
  login: "/login",
};
export const email = "dreamworld@live.com";
export const phoneNumber = "+94 70 527 48 97";
export const placeholder = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`;
export const downloadNow = "Download now";
export const license = "License";
export const footerBottomText = "2022 product. All right reserved";
export const navigationRoutes = [
  {
    name: home,
    link: routePath.home,
    type: activeHome,
  },
  {
    name: booking,
    link: "/",
    type: active,
  },
  {
    name: service,
    link: "/",
    type: active,
  },
  {
    name: join,
    link: routePath.login,
    type: active,
  },
];

export const routeVariables = [
  { path: routePath.home, component: Home },
  { path: routePath.login, component: Login },
];
