import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}></Route>
          <Route path='/About' component={About}></Route>
          <Route path='/Contact' component={Contact}></Route>
          <Route path='/:post_id' component={Post}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
