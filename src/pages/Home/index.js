import React from "react";
import Container from "../../components/Container/Container";
import Topic from "../../components/Texts/Topic";
import Description from "../../components/Texts/Description";
import { useSelector } from "react-redux";
import Slider from "./Slider";
import GroupImages from "./GroupImage";
import { homeImages, homeRoomImages } from "../../assets/assets";
import RoomGroup from "./RoomGroup";

const Home = () => {
  const {
    homeDescriptionText,
    homeFacilitiesText,
    homeWelcomeText,
    homeFacilitiesDescription,
  } = useSelector((state) => state.homeReducer);
  return (
    <Container>
      <Slider />
      <div className="text-center mt-16 flex flex-col  w-screen items-center">
        <Topic>{homeWelcomeText}</Topic>
        <Description styles="mt-8 md:px-96 px-4">
          {homeDescriptionText}
        </Description>
      </div>
      <GroupImages topic="Gallery" images={homeImages} />
      <div className="text-center mt-16 flex flex-col  w-screen items-center">
        <Topic>{homeFacilitiesText}</Topic>
        <Description styles="mt-8 md:px-96 px-4">
          {homeFacilitiesDescription}
        </Description>
      </div>
      <RoomGroup topic="Rooms" images={homeRoomImages} />
    </Container>
  );
};

export default Home;
