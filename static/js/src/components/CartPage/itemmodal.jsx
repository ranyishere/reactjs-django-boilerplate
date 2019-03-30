import React, { Component } from "react";
import { ModalCard }from "../SharedComponents/modal";


class Footer extends Component {
  render() {
    return (
      <div>
        <button className="button is-danger">Remove</button>
        <button className="button">Close</button>
      </div>
    )
  }
}


class ItemModal extends Component {
  render() {
    const {toggleModal} = this.props
    return(
      <div>
        <ModalCard
          title={"Item 1"}
          toggleModal={toggleModal}
          footer={<Footer />}
        >
          <h1> Hello World</h1>
        </ModalCard>
      </div>
    )
  }
}

export default ItemModal;
