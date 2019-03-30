import React, { Component } from "react";
import CardTable from "../SharedComponents/cardtable";


class HeaderOptions extends Component {
  render() {
    return (
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="control">
                <span>
                  <input type="checkbox" /> All
                </span>
              </div>
            </div>
            <div className="level-item">
              <div className="control is-link">
                <a>Star</a>
              </div>
            </div>
            <div className="level-item">
              <div className="control is-link">
                <a>Re-Order</a>
              </div>
            </div>
            <div className="level-item">
              <div className="control is-link">
                <a>Rate</a>
              </div>
            </div>
            <div className="level-item">
              <div className="control is-link">
                <a>Return Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class RecentOrders extends Component {
  render() {
		const {toggleModal} = this.props
    return (
      <section className="section">
        <h1 className="is-size-1">Recent Orders</h1>
        <h6 className="is-size-6">
          <a className="has-text-link"> All orders</a>
        </h6>
        <CardTable
					title={<HeaderOptions />}
					toggleModal={toggleModal}
				/>
      </section>
    );
  }
}

export default RecentOrders;
