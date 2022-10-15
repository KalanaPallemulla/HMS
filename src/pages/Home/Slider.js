import React from "react";
import { useSelector } from "react-redux";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { homeImages } from "../../assets/assets";

const Slider = () => {
  const { homeFacilitiesImageText, homeWelcomeImageText } = useSelector(
    (state) => state.homeReducer
  );
  return (
    <div className="slide-container">
      <Fade arrows={false} duration={3000} indicators={true}>
        {homeImages.length > 0 &&
          homeImages.map((item, index) => (
            <div key={index} className="w-screen">
              {/* <img
                  className="w-screen md:h-screen h-64"
                  src={item}
                  alt="Loading..."
                /> */}
              <div
                className="w-screen md:h-screen h-64"
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "",
                }}
              >
                <div className="hidden md:block">
                  <div className="flex h-screen w-screen items-center justify-center   ">
                    <div className="border-2 border-orange-600 p-8 backdrop-blur-sm rounded-br-full flex flex-col justify-center ">
                      <h1 className="font-serif text-3xl font-bold text-white text-center">
                        {homeWelcomeImageText}
                      </h1>
                      <h1 className="font-serif text-xl font-bold text-white text-center mt-4">
                        {homeFacilitiesImageText}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Fade>
    </div>
  );
};

export default Slider;
