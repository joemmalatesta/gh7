import React from "react";
import TrackCard from "./TrackCard";

const Tracks = () => {
  return (
    <>
      <section
        id="tracks"
        className="containerr oultine outline-white relative font-montserrat"
      >
        <h1 className="flex justify-center bg-gradient-to-b from-primaryBlueStart to-primaryBlueEnd z-20 bg-clip-text text-center text-5xl py-2 text-transparent font-bold lg:text-7xl">
          Tracks
        </h1>
        <img
          src="/duckkick.svg"
          className="absolute -left-20 xl:left-0 -top-24 sm:-top-36 lg:-top-40 scale-[60%] xl:scale-[80%]"
        />
        <img
          src="/duckprint1.svg"
          className="absolute lg:scale-[90%] scale-[75%] -right-[5rem] overflow-hidden md:-right-[7rem] lg:-right-[6.5rem] xl:-right-[6rem] 2xl:-right-[16rem] top-0 lg:-top-4 z-[-10]"
        />
        <img
          src="/duckprint2.svg"
          className="overflow-hidden absolute -left-[14rem] -bottom-56 md:-bottom-80 z-[-10]"
        />
        <img
          src="/duckprint2.svg"
          className="overflow-hidden absolute hidden lg:block md:left-[35%] md:top-[30%] z-[-10]"
        />

        <div className="grid lg:grid-cols-2 gap-4 mt-20 mx-2">
          <TrackCard
            title={"Automotive"}
            description={
              "The Automotive Track is driving into the next generation of automotive innovation. Explore the technologies that are reshaping how we travel, and interact with vehicles for a smarter, more connected world."
            }
            icon={"/images/AutomotiveLogo.svg"}
          />
          <TrackCard
            title={"AI/ML"}
            description={
              "The AI/ML Track is where innovation meets intelligence. This track explores the transformative power of artificial intelligence and machine learning. Taking up on discovering algorithms, building smart systems, and applying data science to real world problems."
            }
            icon={"/images/AILogo.svg"}
          />
          <TrackCard
            title={"DevTools"}
            description={
              "The DevTools Track is where technical innovation meets efficiency. Delve into the art of tool creation and explore how developers streamline their workflows, productivity, and build new software."
            }
            icon={"/images/DevToolsLogo.svg"}
          />
          <TrackCard
            title={"Social Good"}
            description={
              "The Social Good Track is dedicated to harnessing technology for positive impact. This track is all about using technology to improve lives, protect the environment, and ensure that education and opportunities are accessible to all."
            }
            icon={"/images/SocialGoodLogo.svg"}
          />
        </div>
      </section>
    </>
  );
};

export default Tracks;
