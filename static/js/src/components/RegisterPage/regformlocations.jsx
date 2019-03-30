import React, { Component } from "react";
import RegisterCard from "./registercard";
import RegisterSequence from "./registersequence";
import { Link }from 'react-router-dom';

/*
 * Registration form to add multiple
 * business locations
 */

class InputField extends Component {
  render() {
    const { name, placeholder, type, fname, updateField } = this.props;

    return (
      <div className="field">
        <label className="has-text-left label">{name}</label>
        <div className="control">
          <input
            className="input"
            onChange={updateField}
            name={fname}
            type={type}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

class LocationModalForm extends Component {
  render() {
    const { updateField } = this.props;
    return (
      <div>
        <InputField
          name={"Location Name"}
          placeholder={"Location Name"}
          fname={"locationname"}
          updateField={updateField}
        />
        <InputField
          name={"Address"}
          placeholder={"Location Address"}
          type={"address"}
          fname={"locationaddress"}
          updateField={updateField}
        />
        <InputField
          name={"Phone Number"}
          type={"tel"}
          placeholder={"9999999999"}
          fname={"locationtelephone"}
          updateField={updateField}
        />
        <InputField
          name={"Contact Name"}
          placeholder={"Contact Name"}
          fname={"contactname"}
          type={"text"}
          updateField={updateField}
        />
      </div>
    );
  }
}

class AddLocationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.updateFieldInfo = this.updateFieldInfo.bind(this);
  }

  updateFieldInfo(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    const { closeModal, add } = this.props;

    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <div className="modal-card-head">
            <p className="modal-card-title">Add Location</p>
            <button
              className="delete" aria-label="close"
            />
          </div>
          <section className="modal-card-body">
            <LocationModalForm updateField={this.updateFieldInfo} />
          </section>
          <footer className="modal-card-foot">
            <button
              onClick={() => {
                const loc = this.state.locationname;
                const addr = this.state.locationaddress;
                const tel = this.state.locationtelephone;
                const contact = this.state.contactname;
                add(loc, addr, tel, contact);
                closeModal();
              }}
              className="button is-success"
            >
              Save Location
            </button>
            <button className="button" onClick={closeModal}>
              Cancel
            </button>
          </footer>
        </div>
        <button
          onClick={closeModal}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    );
  }
}

class RegFormLocations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      totallocations: 0,
      locations: []
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.addLocation = this.addLocation.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
  }

  deleteLocation(event) {
    const id = event.target.id
    const locations = this.state.locations
    const newLocations = locations.filter(loc => loc.id != id)
    this.setState({ locations: newLocations})
  }

  addLocation(name, buslocation, phonenumber, contact) {
    const locations = this.state.locations;
    const id = this.state.totallocations + 1;

    locations.push({
      id: id,
      name: name,
      location: buslocation,
      phonenumber: phonenumber,
      contact: contact
    });

    this.setState({
      locations: locations,
      totallocations: id
    });

  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.modal ? (
            <AddLocationModal
              closeModal={this.toggleModal}
              add={this.addLocation}
            />
          ) : null}
        </div>
        <table>
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Location</th>
              <th>Phone Number</th>
              <th>Contact Name</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {this.state.locations.map(business => (
              <tr>
                <td>{business.name}</td>
                <td>{business.location}</td>
                <td>{business.phonenumber}</td>
                <td>{business.contact}</td>
                <td>
                  <a id={business.id}
                    onClick={(event) => {
                      this.deleteLocation(event)
                    }}
                  >x</a>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <a onClick={this.toggleModal}>Add Location</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class RegFormLocCard extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <RegisterSequence node={2} />
          <br />
          <RegisterCard stage={"Add Business Locations"}>
            <RegFormLocations />
            <Link to="/buyer-dashboard/">
              <button
                className="button is-primary is-large"
              >Done</button>
            </Link>
          </RegisterCard>
        </div>
      </section>
    );
  }
}

export default RegFormLocCard;
