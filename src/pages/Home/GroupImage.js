import React from "react";
import Topic from "../../components/Texts/Topic";

const GroupImages = ({ topic, images }) => {
  return (
    <div className="text-center mt-16 flex flex-col  w-screen items-center justify-center">
      <Topic>{topic}</Topic>
      <div className="md:grid md:grid-cols-3 w-screen items-center mt-8 md:px-24">
        {images.map((item, index) => (
          <div
            key={index}
            className="flex justify-center p-4 md:p-8  hover:scale-110 transition"
          >
            <img
              className="rounded-br-3xl rounded-tl-3xl"
              src={item}
              alt="Loading..."
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupImages;
