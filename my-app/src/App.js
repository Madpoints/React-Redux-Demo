import React, { Component } from 'react';
import Witchers from './Witchers'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>My first React app</h1>
				<p>Hello World</p>
				<Witchers/>
			</div>
		);
	}
}

export default App;
