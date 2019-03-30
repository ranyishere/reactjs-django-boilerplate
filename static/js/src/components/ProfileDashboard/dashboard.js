import React, { Component } from "react";
import RecentOrders from "./recentorders";
import SideBarNav from "../SharedComponents/sidebar";
import HeroBanner from "../HeroBanner/herobanner";
import OrderModal from "./ordermodal";


class BuyerDashboardHero extends Component {
  render() {
    return (
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Profile Dashboard</h1>
            <h2 className="subtitle">Buyer Account</h2>
          </div>
        </div>
      </section>
    );
  }
}

class BuyerDashboardPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      "productmodal": false,
      "modaldata": null
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(data){
    this.setState({
      "productmodal": !this.state.productmodal,
      "modaldata": data
    })

  }

  render() {
    return (
      <section className="container">
        {
          this.state.productmodal ? <OrderModal toggleModal={this.toggleModal}/> : null
        }
        <HeroBanner />
        <div className="columns">
          <div className="column is-2">
            <SideBarNav />
          </div>
          <div className="column is-10">
            <BuyerDashboardHero />
            <RecentOrders
              toggleModal={this.toggleModal}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default BuyerDashboardPage;
