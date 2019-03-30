import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleMenu} from '../../actions/DropDownMenu';

const accountItems = ["Login", "Register"]
const cartItems = ["Checkout", "Edit"]
const supportItems = ["email: support@partsmart.io", "phone: +1 (951) 376-4038"]

import { Link } from 'react-router-dom';

class Dropdown extends Component {

    generateMenu(item) {
      return (
        <tr>
          <th>
            <Link to={`/${item}/`}>
              <a className="navbar-item">
                {item}
              </a>
            </Link>
          </th>
        </tr>
      )
    }

  render() {
    const {right} = this.props;
    return (
      <div className={`navbar-item has-dropdown is-hoverable ${right}`}>
        <a className="navbar-link">
          { this.props.name }
        </a>
        <div className="navbar-dropdown is-up">
          <table>
            {
              this.props.items.map(item=>this.generateMenu(item))
            }
          </table>
        </div>
      </div>
    )
  }
}


class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation">
        <Link to="/">
        <a className="navbar-item">
          PartSmart
        </a>
        </Link>
        <Dropdown
          name={
						<div>
						<i className="fas fa-user-circle"></i>
						<span> Account</span>
						</div>
					}
          items={accountItems}
        />
        <a className="navbar-item">Register as Vendor</a>
          <Dropdown
            name={
							<div>
						<i className="fas fa-phone"></i>
							<span> Support</span>
							</div>
						}
            items={supportItems}
          />
          <div className="navbar-end">
            <Dropdown
              name={
								<div>
								<i className="fas fa-shopping-cart"></i>
								<span> Cart</span>
								</div>
							}
              items={cartItems}
              right={"is-right"}
             />
          </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  curState: state
})

export default connect(mapStateToProps, {
})(NavigationBar)

