import React from "react";

const DevCarrousel = () => {
  return (
    <section id="projects">
      <div className="d-flex">
        <div id="projects-1" className="d-flex flex-column align-items-center">
           <img src="/images/foto-de-perfil-para-trabalho.jpg" width="50%" alt="perfil"/>
              <h6>Name:</h6><p>Guilherme Davi</p>
              <h6>Email:</h6><p>gui@gui</p>
              <h6>Skills:</h6><p>Fullstack</p>
              <h6>Linkedin:</h6><p>Linkedin/guilherme</p>
              <h6>Github:</h6><p>Github/guilherme</p>
              <h6>Description:</h6><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>  
        </div>
        <div id="projects-2" className="d-flex justify-content-center align-items-center">
          <img src="/images/websitetemplate.png" width="45%" alt="website" />
        </div>
      </div>
    </section>
  );
};

export default DevCarrousel;
