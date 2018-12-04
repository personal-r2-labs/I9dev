import React from "react";

const DevCarrousel = () => {
  return (
    <section id="projects">
      <div className="blue" />
      <div className="d-flex justify-contente-around">
        <div id="projects-1">
          <img
            src="/images/foto-de-perfil-para-trabalho.jpg"
            width="10%"
            alt="perfil"
          />
          <ul>
            <h6>Name:</h6><p>Lorem Ipsum</p>
            <h6>E-mail:</h6><p>Lorem@Ipsum</p>
            <h6>Skills:</h6><p>JS, Node, React, Mongo and Express</p>
            <h6>Description:</h6><p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
          </ul>
        </div>
        <div id="projects-2">
          <img src="/images/websitetemplate.png" width="45%" alt="website" />
        </div>
      </div>
      <div className="blue" />
    </section>
  );
};

export default DevCarrousel;
