import { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import Userfront from "@userfront/react";
import robot from "../assets/RobotChef(big).gif";
import pasta from "../assets/pasta.jpeg"
import robotHands from "../assets/robothands.jpg"


Userfront.init("wbmy6rvb");

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image
            rounded
            className="d-block w-100"
            src={robot}
            alt="Robot Kitchen Video"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
            rounded
            className="d-block w-100"
            src={pasta}
            alt="Plated Pasta Photo"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
            rounded
            className="d-block w-100"
            src={robotHands}
            alt="Robot Cooking Photo"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default LandingPage;