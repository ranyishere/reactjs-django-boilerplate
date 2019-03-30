import React, { Component } from 'react';


class RegisterModal extends Component {
  render(){

    const {title} = this.props;

    return(
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p clasName="modal-card-title">
              {title}
            </p>
            <a className="delete" aria-label="close"></a>
          </header> 
          <section className="modal-card-body">
            {this.props.children}
          </section>
          <footer>
            {this.props.footer}
          </footer>
        </div>
      </div>
    )

  }
}

export default RegisterModal;
