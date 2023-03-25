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
      <hr className="solid"/>
      <CardGroup body="false">
        <Card body="false">
        <h5>Keep Track</h5>  
        <p>Meet SureChef - the AI-powered platform that helps you keep track of your kitchen inventory and generates recipe ideas based on the ingredients you have on hand.</p>
        </Card>
        <Card body="false">
        <h5>Get Creative</h5>  
        <p>With SureChef, you can say goodbye to the hassle of staring into an empty fridge and hello to the convenience of having your own personal chef at your fingertips.</p>
        </Card>
        <Card body="false">
          <h5>Goodbye Waste!</h5>
        <p>Say goodbye to food waste and hello to delicious meals with SureChef. Sign up now and experience the future of meal planning.</p>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default LandingPage;