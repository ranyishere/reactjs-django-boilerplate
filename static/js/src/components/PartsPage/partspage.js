import React, { Component } from 'react';
import VendorComparison from '../VendorComparison/vendorcomparison';
import HeroBanner from '../HeroBanner/herobanner';

class PartsPage extends Component {
  render() {
    const {name} = this.props;
    return (
      <section className="section">
      <div className="container">
        <HeroBanner/>
          <hr></hr>
          <div className="columns">
            <div className="column is-vcentered is-one-quarter">
              <img src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?dpr=2&auto=format&w=1024"></img>
            </div>
            <div className="column is-two-quarter">
              <h4 className="is-size-4"> Test </h4>
              <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor metus eu nunc eleifend venenatis. Mauris imperdiet sapien libero, id hendrerit lectus aliquet quis. Integer et erat non nibh pulvinar commodo sed non tellus. Aliquam eget nibh in tellus tristique semper id eget ligula. Mauris tincidunt imperdiet erat, sit amet feugiat nibh commodo hendrerit. Donec quis elit nulla. Aenean velit metus, auctor vitae semper eu, convallis nec odio. Sed bibendum, justo nec lobortis consequat, dui nulla tincidunt arcu, non ornare neque magna eget enim. Sed dictum mollis nunc ut laoreet. Nulla efficitur ipsum quis enim fermentum, sed fringilla odio tincidunt. Praesent et sapien sapien. Vestibulum tincidunt sapien dolor, nec aliquam risus mollis at. Vestibulum vel blandit tellus. Sed et aliquam nisi. Proin at lorem justo.
      </p>
            </div>
        <div className="column is-one-quarter">
          <h4 className="is-size-4"> Quick Filter </h4>
          <ul
            style={{
              "list-style-type": "none",
            }}
          >
            <li>Test1</li>
            <li>Test2</li>
          </ul>
        </div>
          </div>
            <h4 className="is-size-4"> More Buying Options</h4>
            <VendorComparison/>
        </div>
        </section>
    )
  }
}

export default PartsPage
