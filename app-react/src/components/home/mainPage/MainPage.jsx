import React from "react";
import HomeNavContainer from "../homeHeader/HomeHeaderResponsive";
import MobileContainer from "../homeHeader/MobileContainer";
import HomeSectionOne from "../homeHeader/HomeSectionOne";
import HomeHeaderResponsive from "../homeHeader/HomeHeaderResponsive";

const MainPage = () => {
  return (
  <section>
    <HomeHeaderResponsive />
    <MobileContainer />
    <HomeNavContainer />
    <HomeSectionOne />
  </section>
  );
};

export default MainPage;
