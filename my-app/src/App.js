import React, { Component } from 'react';
import Witchers from './Witchers'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>My first React app</h1>
				<p>Hello Witcher</p>
				<Witchers name="Geralt" age="90+" school="Wolf"/>
				<Witchers name="Gerd" age="Unknown" school="Bear"/>
			</div>
		);
	}
}

export default App;
