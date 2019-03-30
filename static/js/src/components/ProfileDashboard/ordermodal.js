import React, { Component } from "react";
import { ModalCard } from "../SharedComponents/modal";

class ModalFooter extends Component {
	render() {
		const {toggleModal} = this.props
		return(
			<div>
				<button
					onClick={()=> {
						toggleModal()
					}}
					className="button is-success">Cancel</button>
			</div>
		)
	}
}

class OrderModal extends Component {
	render() {
		const {toggleModal} = this.props
		return (
			<section className="container">
				<ModalCard
					toggleModal={toggleModal}
					title={"Order 1"}
					footer={
						<ModalFooter
							toggleModal={toggleModal}
						/>
					}
				>
					Test1 test2
				</ModalCard>
			</section>
		)
	}
}

export default OrderModal;
