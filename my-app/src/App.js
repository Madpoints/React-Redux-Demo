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
	addWitcher = (witcher) => {
		witcher.id = Math.random()
		let witchers = [...this.state.witchers, witcher]
		this.setState({
			witchers: witchers
		})
	}
	deleteWitcher = (id) => {
		let witchers = this.state.witchers.filter(witcher => {
			return witcher.id !== id
		})
		this.setState({
			witchers: witchers
		})
	}

	// component lifecycle methods
	componentDidMount() {
		console.log('component mounted')
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('component updated')
		console.log(prevProps, prevState)
	}

	render() {
		return (
			<div className="App">
				<h1>My first React app</h1>
				<p>Hello Witcher</p>
				<hr></hr>
				<AddWitchers addWitcher={this.addWitcher}/>
				<hr></hr>
				<Witchers witchers={this.state.witchers} deleteWitcher={this.deleteWitcher}/>
			</div>
		);
	}
}

export default App;
