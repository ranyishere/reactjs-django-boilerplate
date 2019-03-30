import React, { Component } from 'react';
import SearchBar from '../SearchBar/searchbar';


class HeroBanner extends Component {
  render() {
    return (
    <section className="section">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <p className="title">
                PartSmart.io
              </p>
              <p>
                Order From <strong>Multiple</strong> Vendors in One Place
              </p>
              <SearchBar/>
            </div>
          </div>
        </section>
    </section>
    )
  }
}

export default HeroBanner;
