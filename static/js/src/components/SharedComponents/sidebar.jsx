import React, { Component } from "react";
import styles from './sidebar.css';


class SideBarNav extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className={styles.sidebarprofile}>
        <aside className="menu">
          <p className="menu-label">General</p>
          <ul className="menu-list">
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>My Cart</a>
            </li>
          </ul>
          <p className="menu-label">Administration</p>
          <ul className="menu-list">
            <li>
              <a>Profile Setting</a>
            </li>
            <li>
              <a className="is-active">Manage Your Locations</a>
              <ul>
                <li>
                  <a>Members</a>
                </li>
                <li>
                  <a>Plugins</a>
                </li>
                <li>
                  <a>Add a member</a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="menu-label">Transactions</p>
          <ul className="menu-list">
            <li>
              <a>Payments</a>
            </li>
            <li>
              <a>Transfers</a>
            </li>
            <li>
              <a>Balance</a>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default SideBarNav;
