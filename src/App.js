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
      <AddItem />
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
