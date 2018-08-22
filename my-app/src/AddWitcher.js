import React, { Component } from 'react';

class AddWitcher extends Component {
	state = {
		name: null,
		age: null,
		school: null
	}
	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.props.addWitcher(this.state)
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={this.handleChange}/>
					<br></br>
					<label htmlFor="age">Age:</label>
					<input type="text" id="age" onChange={this.handleChange}/>
					<br></br>
					<label htmlFor="school">School:</label>
					<input type="text" id="school" onChange={this.handleChange}/>
					<br></br> 
					<input type="submit" value="Submit"/>
				</form>
			</div>  
		)
	}
}

export default AddWitcher