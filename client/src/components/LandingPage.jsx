import { useState } from "react";
import { Container, Carousel, Image, CardGroup, Card } from "react-bootstrap";
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
    <Container className="landing-container" id="light">
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
      <hr className="solid"/>
      <Card className="intro-card">
        <h3>Simple, Useful, Fun</h3>
        <h5 className="landing-text">Our methodology from day one.</h5>
        <p>While robot assistants may not come standard in every kitchen just yet, we think that SureChef is a step in the right direction.</p>
      </Card>
      <hr className="solid"/>    
      <CardGroup body="false">
        <Card body="false" className="intro-card">
        <h5 className="landing-text">Keep Track</h5>  
        <p>SureChef helps you keep track of your kitchen inventory and generates recipe ideas based on the ingredients you have on hand.</p>
        </Card>
        <Card body="false" className="intro-card">
        <h5 className="landing-text">Get Creative</h5>  
        <p>No more hassle of staring into an empty fridge, experience the convenience of having your own personal chef at your fingertips.</p>
        </Card>
        <Card body="false" className="intro-card">
          <h5 className="landing-text">Minimize Waste</h5>
        <p>Say goodbye to food waste and hello to delicious meals with SureChef. Sign up now to see the future of meal planning.</p>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default LandingPage;