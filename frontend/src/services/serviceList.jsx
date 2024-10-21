import React from "react";
import { Col } from "react-bootstrap";
import ServiceCard from "../services/serviceCard.jsx";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Plan outdoor activities with accurate forecasts.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Giude",
    desc: "Expert guides enrich your journey. Discover hidden gems with confidence.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your journey. Customize experiences for unforgettable adventures",
  },
];

const serviceList = () => {
  return<>
  {
    servicesData.map((item, index) => (
      <Col lg="3" md="6" sm="12" className="mb-3" key={index}>
        <ServiceCard item={item} />
      </Col>
    ))
  }
  </>
};

export default serviceList;
