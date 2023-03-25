import { useState } from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import Userfront from "@userfront/react";

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
            fluid
            rounded
            className="d-block w-100"
            src="https://api.time.com/wp-content/uploads/2015/04/moley-robotics-automated-kitchen_lr.jpg?quality=85&w=800"
            alt="First slide"
            style={{ width: "200px", height: "300px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
            fluid
            rounded
            className="d-block w-100"
            src="https://cdn3.tim-europe.com/websites/pcne/typo3temp/assets/_processed_/5/4/csm_Pic_1_robot_hand_apple_bboard_misc_aa1a1407de.jpg"
            alt="Second slide"
            style={{ width: "200px", height: "300px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image 
            fluid
            rounded
            className="d-block w-100"
            src="https://alorestaurant.com/wp-content/uploads/2019/12/Alo-Food-Shot-10-Hi-Res.jpg"
            alt="Third slide"
            style={{ width: "200px", height: "300px" }}
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default LandingPage;