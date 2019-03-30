import React, { Component } from "react";
import { ModalCard } from "../SharedComponents/ModalCard";

/*
 * Contains modals for Inventory Management Page
 */

class AddItemFooter extends Component {
  render() {
    return(
      <div>
        <button className="button is-success">
        Add
        </button>
        <button className="button">
        Cancel
        </button>
      </div>
    )
  }
}

class AddItemModal extends Component {
  render() {
    const {toggleModal} = this.props
    return (
      <div>
        <ModalCard
          title={"Add Item"}
          footer={<AddItemFooter/>}
        >
          <h1> Add Item</h1>
        </ModalCard>
      </div>
    )
  }
}

class RemoveItemFooter extends Component {
  render() {
    return(
      <div>
        <button className="button is-success">
          Yes
        </button>
        <button className="button">
          No
        </button>
      </div>
    )
  }
}

class RemoveItemModal extends Component {
  render() {
    const {toggleModal} = this.props
    return (
      <div>
        <ModalCard
          title={"Remove item?"}
          footer={<RemoveItemFooter/>
        >
            <h1> Remove Item!</h1>
        </ModalCard>
      </div>
    )
  }
}

export { RemoveItemModal, AddItemModal }
