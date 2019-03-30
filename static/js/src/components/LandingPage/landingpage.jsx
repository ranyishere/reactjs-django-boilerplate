import React, { Component } from "react";
import Carousel from "../Carousel/carousel";
import PhoneTypeDirectory from "../PhoneTypeDirectory/phonetypedirectory";
import HeroBanner from "../HeroBanner/herobanner";

class LandingPage extends Component {
  render() {
    const phones = ["Apple", "Samsung", "Motorola", "LG"];
    return (
      <section className="section">
        <HeroBanner />
        <PhoneTypeDirectory phones={phones} />
        <hr />
        <Carousel />
      </section>
    );
  }
}

export default LandingPage;
