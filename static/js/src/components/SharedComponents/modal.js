import React, { Component } from "react";


class Modal extends Component {
	render() {
		const {toggleModal} = this.props
		return(
		<div className="modal is-active">
  <div className="modal-background"></div>
  <div className="modal-content">
			{this.props.children}
  </div>
  <button
		onClick={this.toggleModal}
		className="modal-close is-large" aria-label="close"></button>
</div>
		)
	}
}

class ModalCard extends Component {
	render() {
		const {title, footer, toggleModal} = this.props
		return(
		<div>
		<Modal toggleModal={toggleModal}>
			<div className="modal-card">
			<header className="modal-card-head">
				<p className="modal-card-title">{title}</p>
				<button
					onClick={toggleModal}
					className="delete" aria-label="close"
				></button>
			</header>
			<section className="modal-card-body">
				{this.props.children}
			</section>
			<footer className="modal-card-foot">
				{footer}
			</footer>
			</div>
		</Modal>
			</div>
		)
	}
}


export {Modal, ModalCard}
