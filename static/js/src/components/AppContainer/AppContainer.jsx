import React, { Component } from "react";
import NavigationBar from "../NavigationBar/navigationbar";
import LandingPage from "../LandingPage/landingpage";
import PageFooter from "../PageFooter/pagefooter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PartsPage from "../PartsPage/partspage";
import LoginPage from "../LoginPage/loginpage";
import RegisterPage from "../RegisterPage/registerpage";
import RegBusInfoCard from "../RegisterPage/regformbi";
import RegEmailPasswordCard from "../RegisterPage/regformep";
import RegFormLocCard from "../RegisterPage/regformlocations";
import BuyerDashboardPage from "../ProfileDashboard/dashboard";
import ShoppingCartPage from "../CartPage/cart";


export default class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <section className="section">
            <NavigationBar/>
            <section className="section">
              <div className="container">
                <Route exact path="/" component={LandingPage} />
                <Route path="/phones/" component={PartsPage} />
                <Route path="/Login/" component={LoginPage} />
                <Route path="/register/" component={RegEmailPasswordCard} />
                <Route path="/businfo/" component={RegBusInfoCard} />
                <Route path="/list-businesses/" component={RegFormLocCard} />
                <Route path="/buyer-dashboard/" component={BuyerDashboardPage} />
                <Route path="/Checkout/" component={ShoppingCartPage} />
                <Route path="/Edit/" component={ShoppingCartPage} />
              </div>
            </section>
          </section>
        </Router>
        <PageFooter />
      </div>
    );
  }
}
