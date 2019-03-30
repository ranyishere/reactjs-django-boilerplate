import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegBusInfoCard from './regformbi';
import RegEmailPasswordCard from './regformep';
import { BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import RegisterCard from './registercard';

class RegisterPage extends Component {

  render() {
    return(
      <section className="section">
        <div className="container">
          <RegisterSequence node={0} />
          <br></br>
							<Route
								path='/Register/'
								component={RegEmailPasswordCard}
							/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  curState: state
})

export default withRouter(connect(mapStateToProps, {
})(RegisterPage))

