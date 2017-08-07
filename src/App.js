import React, { Component } from 'react';
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

class TodoItem extends Component{
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
	<button>Edit</button>
	<button>Delete</button>
	<button>Complete</button>
      </div> 
    )
  }
}

class List extends Component{
  render(){
    const todos = this.props.todos;
    return(
      <div>
         <Plan />
	 {todos.map((item, index) => <TodoItem key={index} name={item.name} />)}
      </div> 
    )
  }  
}

class App extends Component {
  render() {
    const todos = [
      {name: "Wake up"},
      {name: "Take a shower"},
      {name: "Eat breakfast"},
      {name: "Go to work"}
    ]
    return (
      <List todos={todos} />
    );
  }
}

export default App;
