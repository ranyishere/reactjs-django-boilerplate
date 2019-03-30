import React, { Component } from 'react';
import HeroBanner from "../HeroBanner/herobanner";
import SideBarNav from "../SharedComponents/sidebar";
import CurrentCart from "./carttable";
import ItemModal from "./itemmodal";


class ShoppingCartHero extends Component {
  render() {
    return (
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Shopping Cart</h1>
            <h2 className="subtitle">Checkout & Edit</h2>
          </div>
        </div>
      </section>
    )
  }
}


class ShoppingCartPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      "itemmodal": false,
      "modalcontents": null
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(data) {
    this.setState({
      "itemmodal": !this.state.itemmodal,
      "modalcontents": data
    })
  }

  render() {
    console.log("toggleModal cart: ", this.toggleModal)
    return (
      <section className="container">
      {
        this.state.itemmodal ? <ItemModal
                                toggleModal={this.toggleModal}/> : null
      }
        <HeroBanner/>
        <div className="columns">
          <div className="column is-2">
            <SideBarNav/>
          </div>
          <div className="column is-10">
            <ShoppingCartHero/>
            <CurrentCart
              title={"Your Item"}
              toggleModal={this.toggleModal}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default ShoppingCartPage
