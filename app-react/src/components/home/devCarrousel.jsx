import React from "react";
import Carousel from 'react-bootstrap/lib/Carousel'
import Image from 'react-bootstrap/lib/Image'
import Col from 'react-bootstrap/lib/Col'

const DevCarrousel = () => {
  return (
    <section id="carrousel">
      <Carousel>
        <Carousel.Item>
          <img width='100%' alt="Photo-profile" src="/images/scrennshot.png" />
          <Carousel.Caption>
            <h1>Guilherme Davi</h1>
            <h2>Node, JavaScript, Express, React and Mongo</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width='100%' alt="900x500" src="/images/screenshot2.png" />
          <Carousel.Caption>
            <h1>Romulo Franca</h1>
            <h2>JavaScript, Node and Express.</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width='100%' alt="900x500" src="/images/screenshot3.png" />
          <Carousel.Caption>
            <h1>Ronaldo Rodrigues</h1>
            <h2>Bootstrap, JavaScript, Express and Mongo.</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default DevCarrousel;
