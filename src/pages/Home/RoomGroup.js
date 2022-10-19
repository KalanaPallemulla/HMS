import React from "react";
import Topic from "../../components/Texts/Topic";

const RoomGroup = ({ topic, images }) => {
  return (
    <div className="text-center mt-16 flex flex-col  w-screen items-center justify-center">
      <Topic>{topic}</Topic>
      <div className="md:grid md:grid-cols-2 w-screen items-center mt-8 md:px-24 ">
        {images.map((item, index) => (
          <div className="p-8">
            <div
              key={index}
              className="flex justify-center p-4 md:p-8  hover:scale-110 transition flex-col border-b-2 border-orange-400 opacity-75 hover:opacity-100 rounded-br-3xl  rounded-tl-3xl"
            >
              <img
                className="rounded-br-3xl rounded-tl-3xl"
                src={item.image}
                alt="Loading..."
              />
              <h1 className="font-serif text-orange-600 opacity-70 font-semibold text-2xl mt-4 px-8 ">
                {item.type}
              </h1>
              <h1 className="font-serif text-gray-600 opacity-70 font-semibold text-md mt-4 px-8 ">
                {item.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomGroup;
