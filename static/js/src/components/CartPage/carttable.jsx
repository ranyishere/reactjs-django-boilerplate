import React, { Component } from "react";
import CardTable from "../SharedComponents/cardtable";


class HeaderOptions extends Component {
  render() {
    return(
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <a className="is-link">Checkout</a>
            </div>
            <div className="level-item">
              <a className="is-link">Remove</a>
            </div>
            <div className="level-item">
              <a className="is-link">Save for Later</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


class CurrentCart extends Component {
  render() {
    const {toggleModal} = this.props
    return(
      <section className="section">
        <h1 className="is-size-1"> Your Cart </h1>
        <CardTable
          title={<HeaderOptions/>}
          toggleModal={toggleModal}
        />
      </section>
    )
  }
}


export default CurrentCart;
