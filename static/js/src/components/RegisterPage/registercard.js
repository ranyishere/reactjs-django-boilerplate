import React, { Component } from 'react';

class RegisterCard extends Component {
  render(){
    const {stage} = this.props
    return (
      <div className="columns">
        <div className="column has-text-centered">
          <div 
          style={{
            "width": "500px",
            "display": "inline-block"
          }}
          className="card">
            <div className="card-content">
              <p className="title has-text-centered">
                Register
              </p>
              <p className="subtitle has-text-centered">
                { stage }
              </p>
              {
              this.props.children
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterCard;
