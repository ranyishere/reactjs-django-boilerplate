import React, { Component } from 'react';
import { nxtRgSeq } from '../../actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import RegisterCard from './registercard';
import RegisterSequence from './registersequence';


/*
 * Business Information Registration
 * Form
 */

class RegFormBI extends Component {
  render() {
    return(
      <div>
        <div className="field">
          <div className="label has-text-left">
            Business Legal Name
          </div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Business Legal Name"
             >
            </input>
          </div>
        </div>
        <div className="field">
          <div className="label has-text-left">
            Billing Address
          </div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Billing Address"
             >
            </input>
          </div>
        </div>
        <div className="field">
          <div className="label has-text-left">
            Main Contact Person Name
          </div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Billing Address"
             >
            </input>
          </div>
        </div>
        <div className="field">
          <div className="label has-text-left">
            Main Contact Person Number
          </div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Billing Address"
             >
            </input>
          </div>
        </div>
				<br></br>
				<Link to='/list-businesses/'>
					<a
					className="button is-primary is-medium">Next
					</a>
				</Link>
      </div>
    )
  }
}


class RegBusInfoCard extends Component {
	render(){
		return(
			<section className="section">
				<div className="container">
					<RegisterSequence
						node={1}
					/>
					<br></br>
					<RegisterCard
						stage={"Business Information"}
					>
						<RegFormBI
						/>
					</RegisterCard>
				</div>
			</section>
		)
	}
}


const mapStateToProps = (state) => ({
  curState: state
})

export default withRouter(connect(mapStateToProps, {
})(RegBusInfoCard))
