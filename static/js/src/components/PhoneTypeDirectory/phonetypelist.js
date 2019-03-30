import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';


class PhoneTypeList extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const { phone, right } = this.props;

    return (
      <div
      className="has-text-centered column">
	    <div
	    className={`dropdown is-hoverable ${right}`}
	    >
          <a className="button link is-info is-inverted">{phone}</a>
        <div className="dropdown-menu">
          <div className="dropdown-content">
              <a href=""
                onClick={()=>{
                  this.props.push('/phones/')
                }}
                className="dropdown-item">
                Dropdown item1
              </a>
	    </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  curState: state
}


export default connect(mapStateToProps, {
  push
})(PhoneTypeList)
