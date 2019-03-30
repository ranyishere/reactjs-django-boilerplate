import React, { Component } from "react";


class CardContent extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">{title}</p>
        </div>
        <div className="card-content">
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

class CardTableRow extends Component {
  render() {
    const { data, toggleModal} = this.props;
    return (
      <tr onClick={() => {
				toggleModal({data})
				}
			}>
        {data.map(d => {
          return <td>{d}</td>;
        })}
      </tr>
    );
  }
}

class CheckBox extends Component {
  render() {
		const {toggleModal} = this.props
    return (
      <div
        style={{
          display: "inline-block"
        }}
      >
        <div className="has-text-centered" className="field">
          <div className="control">
            <input
							onClick={()=>{
								toggleModal()
							}}
						type="checkbox" />
          </div>
        </div>
      </div>
    );
  }
}

class CardTable extends Component {
  render() {
    const { title, toggleModal} = this.props;
    const test = [<CheckBox toggleModal={toggleModal}/>, 1, 1, 1, 1, 1];
    return (
      <div>
        <CardContent title={title}>
          <table className="table is-hoverable">
            <thead>
              <tr>
                <th />
                <th>Order #</th>
                <th>Date</th>
                <th>Ship To </th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <CardTableRow
								toggleModal={toggleModal}
							data={test} />
            </tbody>
          </table>
        </CardContent>
      </div>
    );
  }
}

export default CardTable;
