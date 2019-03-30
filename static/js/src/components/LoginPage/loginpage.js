import NavigationBar from '../NavigationBar/navigationbar';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return(
      <section className="section">
      <div className="columns">
      <div className="column">
      <div className="container has-text-centered">
      <div
        style={{
          "display": "inline-block"
        }}
        className="card"
      >
  <div className="card-content">
    <p className="title has-text-centered">
      Login
    </p>
    <p className="subtitle has-text-centered">
      PartSmart Login
    </p>
      <div className="field">
  <p className="control has-icons-left has-icons-right">
    <input 
      style={{
        "width": "300px"
      }}
      className="input" type="email" placeholder="Email"></input>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </p>
</div>
<div className="field">
  <p className="control has-icons-left">
    <input
      style={{
        "width": "300px"
      }}
      className="input" type="password" placeholder="Password"></input>
    <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
  </p>
</div>
      <div
      className="has-text-centered"
      style={{
        "display":"inline-block"
      }}
      >
      <div className="columns has-text-centered">
        <a className="has-text-centered is-link"> Register </a>
      </div>
      <div className="columns has-text-centered">
        <a className="has-text-centered is-link"> Forgot password</a>
      </div>
      <div className="columns has-text-centered">
        <a className="button is-primary">Submit</a>
      </div>
      </div>
  </div>
</div>
      </div>
      </div>
      </div>
      </section>
    )
  }
}

class LoginPage extends Component {
  render(){
    return(
      <LoginForm/>
    )
  }
}

export default LoginPage
