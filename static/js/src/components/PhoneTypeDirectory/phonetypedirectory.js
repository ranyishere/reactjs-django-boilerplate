import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import PhoneTypeList from './phonetypelist';


class PhoneTypeDirectory extends Component {

  renderPhones(totalPhones){
    var phoneList = []

    for (var i=0; i<totalPhones.length; i++) {
      console.log("i: ", i)
      if (i == totalPhones.length-1) {
        phoneList.push(
          <PhoneTypeList
            phone={totalPhones[i]}
            right={"is-right"}
          />
        )
      }
      else {
      phoneList.push(<PhoneTypeList phone={totalPhones[i]}/>)
        }
      }

    return(phoneList)
  }

  render() {
    const totalPhones = this.props.phones
    return (
      <div className="container">
        <nav className="columns">
          {this.renderPhones(totalPhones)}
        </nav>
      </div>
    )
  }
}

export default PhoneTypeDirectory
