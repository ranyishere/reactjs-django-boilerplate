import React, { Component } from 'react';

const exampleData = {
  "id": "0",
  "logo": "logo",
  "name": "vendor 1",
  "warranty": "60 days",
  "lcd": "Tlanma",
  "brightness": "400 nits",
  "distance": "100 miles",
  "cutoff": {
    "standard": "1:00 PST",
    "overnight": "3:00 PST"
  },
  "unitprice": "12.00"
}

class VendorComparison extends Component {

  generateRows(data){
    return(
      <tr key={data.id}>
        <td>{data.name}</td>
        <td>{data.warranty}</td>
        <td>{data.lcd}</td>
        <td>{data.brightness}</td>
        <td>{data.distance}</td>
      </tr>
    )
  }

  render() {
   const {vendordata} = this.props
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Warranty</th>
            <th>LCD</th>
            <th>Brightness</th>
            <th>Distance</th>
            <th>Cutoff</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
        {
          this.generateRows(exampleData)
        }
        </tbody>
      </table>
    )
  }
}

export default VendorComparison;
