import React, { Component } from 'react';
import { nxtRgSeq } from '../../actions';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import RegisterCard from './registercard';
import RegisterSequence from './registersequence';


/*
 *Registration Form for Email Password
 */

class RegFormEP extends Component {
  render() {
    return(
      <div>
      <div className="field">
        <div className="label has-text-left">Email</div>
        <div className="control">
          <input
          className="input"
          type="email"
          placeholder="Email"></input>
        </div>
      </div>

      <div className="field">
        <div className="label has-text-left">Password</div>
        <div className="control">
          <input
          className="input"
          type="password"
          placeholder="Password"></input>
        </div>
      </div>
      <div className="field">
        <div className="label has-text-left">Confirm</div>
        <div className="control">
          <input
          className="input"
          type="password"
          placeholder="Password"></input>
        </div>
      </div>
      <br></br>
			<Link to='/businfo/'>
				<a
				className="button is-primary is-medium">Next
				</a>
			</Link>
      </div>
    )
  }
}


class RegEmailPasswordCard extends Component {

	render(){
		return(
			<section className="section">
				<div className="container">
					<RegisterSequence
						node={0}
					/>
					<br></br>
						<RegisterCard
							stage={"Login Information"}
						>
						<RegFormEP
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
})(RegEmailPasswordCard))
