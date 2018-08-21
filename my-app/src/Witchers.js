import React, { Component } from 'react';

class Witchers extends Component {
	render() {
		// console.log(this.props)
		const {name, age, school} = this.props
		return(
			<div className="witcher">
				<div>Name: {name}</div>
				<div>Age: {age}</div>
				<div>School: {school}</div>		
			</div>		
		)
	}
}

export default Witchers