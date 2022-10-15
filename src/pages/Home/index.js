import React from "react";
import Container from "../../components/Container/Container";
import Topic from "../../components/Texts/Topic";
import Description from "../../components/Texts/Description";
import { useSelector } from "react-redux";
import Slider from "./Slider";
import GroupImages from "./GroupImage";
import { homeImages } from "../../assets/assets";

const Home = () => {
  const {
    homeDescriptionText,

    homeWelcomeText,
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
    </Container>
  );
};

export default Home;
