import React, { Component } from 'react';

class Witchers extends Component {
	render() {
		const {witchers} = this.props
		const witcherList = witchers.map(witcher => {
			return(
				<div className="witcher" key={witcher.id}>
					<div>Name: {witcher.name}</div>
					<div>Age: {witcher.age}</div>
					<div>School: {witcher.school}</div>	
					<hr></hr>	
				</div>	
			)	
		})
		return(
			<div className="witcher-list">
				{witcherList}
			</div>	
		)
	}
}

export default Witchers