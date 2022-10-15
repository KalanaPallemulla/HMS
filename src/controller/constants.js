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
