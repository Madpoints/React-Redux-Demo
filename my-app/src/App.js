import React, { Component } from 'react';
import Witchers from './Witchers'
import AddWitchers from './AddWitcher'

class App extends Component {
	state = {
		witchers: [
			{name: 'Geralt', age: 100, school:'Wolf', id: 1},
			{name: 'Letho', age: 85, school:'Viper', id: 2},
			{name: 'Gerd', age: 'Unknown', school:'Bear', id: 3}
		]	
	}
	render() {
		return (
			<div className="App">
				<h1>My first React app</h1>
				<p>Hello Witcher</p>
				<hr></hr>
				<AddWitchers/>
				<hr></hr>
				<Witchers witchers={this.state.witchers}/>
			</div>
		);
	}
}

export default App;
