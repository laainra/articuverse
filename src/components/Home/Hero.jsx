import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from '../General/Button';

function Hero() {
  const carouselStyle = {
    backgroundColor: "transparent",
    textAlign: "center",
    margin: "0 0 50px 0"
  };

  const titleStyle = {
    color: "white",
    fontSize: "70px",
    fontWeight: "bold",
    margin: "10px 0 100px 0"
  };

  const subTitleStyle = {
    color: "white",
    fontSize: "30px",
    margin: "100px 0 100px 0"
  };

  const buttonStyle = {
    margin: "0 50px 50px 0",
    verticalAlign: "middle",
  };

  const carouselData = [
    {
      image: `${process.env.PUBLIC_URL}/image/maxresdefault.jpg`,
      title: "Welcome to Articuverse",
      subTitle: "Discover, Create, and Connect with a Global Community of Artists and Art Enthusiasts",
    },
    {
      image: `${process.env.PUBLIC_URL}/image/carousel.jpg`,
      title: "Explore the Art World",
      subTitle: "Immerse yourself in a diverse range of artistic creations from around the globe",
    },
    {
      image: `${process.env.PUBLIC_URL}/image/carousel.jpeg`,
      title: "Join Our Creative Community",
      subTitle: "Share your own art, connect with fellow artists, and inspire the world",
    },
  ];

  return (
    <Carousel style={carouselStyle} interval={5000}>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="w-100"
            style={{ height: "600px", objectFit: "cover" }}
            src={item.image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h1 style={titleStyle}>{item.title}</h1>
            <p style={subTitleStyle}>{item.subTitle}</p>
            <div className="d-flex justify-content-center">
              <Button style={buttonStyle} title="Join Us Now" action={() => {/* Your action here */}} />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
