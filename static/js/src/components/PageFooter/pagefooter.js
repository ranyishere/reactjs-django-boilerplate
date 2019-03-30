import React, { Component } from "react";

class CustomerService extends Component {
  render() {
    return (
      <div>
        <strong>
          <h2>Customer Service</h2>
        </strong>
        <div className="columns">
          <div className="column">
            <div className="content has-text-left">
              <ul
                style={{
                  "list-style-type": "none"
                }}
              >
                <li>
                  <a>Help Center</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="content has-text-left">
              <ul
                style={{
                  "list-style-type": "none"
                }}
              >
                <li>
                  <a>Shipping</a>
                </li>
                <li>
                  <a>Return Policy</a>
                </li>
                <li>
                  <a>Payment Methods</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ContactInfo extends Component {
  render() {
    return (
      <div>
        <strong>
          <h2>Contact Info</h2>
        </strong>
        <div className="columns">
          <div className="column">
            <div className="content has-text-left">
              <ul
                style={{
                  "list-style-type": "none"
                }}
              >
                <li>
                  <a>support@partsmart.io</a>
                </li>
              </ul>
						</div>
            </div>
            <div className="column">
            <div className="content has-text-left">
              <ul
                style={{
                  "list-style-type": "none"
                }}
              >
                <li>
                  <a>+1(951) 376-4038</a>
                </li>
              </ul>
						</div>
            </div>
          </div>
			</div>
    );
  }
}

class PageFooter extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-half">
              <CustomerService />
            </div>
            <div className="column is-half">
              <ContactInfo />
            </div>
          </div>
        </div>
        <p className="has-text-centered">
          2019 PartSmart.io
          <a> About Us </a>
        </p>
      </footer>
    );
  }
}

export default PageFooter;
