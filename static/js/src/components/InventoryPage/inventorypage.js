import React, { Component } from "react";
import SideBarNav from "../SharedComponents/sidebar";
import { RemoveItemModal, AddItemModal } from "./modal";


class InventoryHero extends Component {
  render() {
    return(
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Inventory Management
            </h1>
            <h2 className="subtitle">
              Add & Delete Items
            </h2>
          </div>
        </div>
      </section>
    )
  }
}


class InventoryPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      "addproductmodal": false,
      "removeproductmodal": false
    }

    this.toggleAddModal = this.toggleAddModal.bind(this)
    this.toggleRemoveModal = this.toggleRemoveModal.bind(this)

  }

  toggleAddModal(){
    this.setState({
      "addproductmodal": !this.state.addproductmodal
    })
  }

  toggleRemoveModal(){
    this.setState({
      "removeproductmodal": !this.state.removeproductmodal
    })
  }

  render() {
    return(
      <section className="section">
      {
        this.state.addproductmodal ? <AddItemModal
          toggleModal={this.toggleAddModal}
        /> : null
      }
      {
        this.state.removeproductmodal ? <RemoveItemModal
          toggleModal={this.toggleRemoveModal}
          /> : null
      }
        <div className="container">
          <div className="columns">
            <div className="column is-size-2">
              <SideBarNav/>
            </div>
            <div classNAme="column is-size-10">
              <InventoryHero/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default InventoryPage;
