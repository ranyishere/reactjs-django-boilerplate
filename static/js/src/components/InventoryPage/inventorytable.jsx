import React, { Component } from "react";
import CardTable from "../SharedComponents/cardtable";

class HeaderOptions extends Component {
  render() {
    return(
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <a className="is-link">Select All</a>
            </div>
            <div className="level-item">
              <a className="is-link">Remove</a>
            </div>
            <div className="level-item">
              <a className="is-link">Edit</a>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <input className="input" type="text"/>
            </div>
            <div className="level-item">
              <button className="button"> Search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class InventoryTable extends Component {
  render() {
    return(
      <section className="section">
        <h1 className="is-size-1">Your Inventory</h1>
        <CardTable
          title={<HeadOptions/>}
        />
      </section>
    )
  }
}
