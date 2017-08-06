import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class AddItem extends Component{
  render(){
    return(
      <div id="addItem">
        <input placeholder="Enter Item Name" />
	<button>Add</button>
      </div>
    )
  }
}

class Header extends Component{
  render(){
    return(
      <div>
        <h1>My Todos List</h1>
	<AddItem />
      </div>
    )
  }
}

class Plan extends Component{
  render(){
    return (
      <div>
        <Header />
	<p>Choose your goal to generate todos plan</p>
        <select>
          <option value="" disabled selected hidden>Select a Plan</option>
          <option value="loseWeight">Lose Weight</option>
          <option value="learnWebdev">Learn WebDev</option>
          <option value="etc..">etc...</option>
        </select>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default App;