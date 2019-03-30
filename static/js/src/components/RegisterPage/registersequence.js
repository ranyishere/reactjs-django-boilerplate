import React, { Component } from 'react';


class RegisterSequence extends Component {

	constructor(props){
		super(props)

		this.state = {
			"info": [
				{
					"id": 0,
					"name": "Step 1",
					"description": "Login Information",
					"active": "is-true"
				},
				{
					"id": 1,
					"name": "Step 2",
					"description": "Business Information",
					"active": null
				},
				{
					"id": 2,
					"name": "Step 3",
					"description": "Add Locations",
					"active": null
				}
			]
		}

		this._createRegisterSequence.bind(this)
	}

	_createRegisterSequence(node){
			this.setState((state)=>{
			state.info[node]
			})
			return(
		<ul 
      style={{
        "list-style-type": "none"
      }}
      className="steps has-content-centered">
				{
			this.state.info.map((stage, index)=>{
				console.log("index!: ", index)

				if (index == node) {
					console.log("im active!")
				return(
      <li key={stage.id}className="steps-segment is-active">
        <span className="steps-marker"></span>
        <div className="steps-content">
          <p className="is-size-4">{stage.name}</p>
          <p>
					{stage.description}
						</p>
        </div>
      </li>
					)}

				else {
					return (
      <li key={stage.id}className="steps-segment">
        <span className="steps-marker"></span>
        <div className="steps-content">
          <p className="is-size-4">{stage.name}</p>
          <p>
					{stage.description}
						</p>
        </div>
      </li>
						)
					}
				})
			}
    </ul>
			)
		}


  render(){
		const {node} = this.props
    return(
			this._createRegisterSequence(node)
    )
  }
}


export default RegisterSequence;
