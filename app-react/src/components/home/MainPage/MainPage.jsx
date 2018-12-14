import React from "react";
import MainHomePage from "../MainHomePage/MainHomePage";

const MainPage = (props) => {
  return (
  <section>
    <MainHomePage getUser={props.getUser}/>
  </section>
  );
};

export default MainPage;
