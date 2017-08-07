import React, { Component } from 'react';
import './App.css';

class AddItem extends Component{
  render(){
    return(
      <div id="addItem">
        <input placeholder="Enter Item Name" onChange={this.props.updateValue} />
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
	<AddItem updateValue={this.props.updateValue} />
      </div>
    )
  }
}

class Plan extends Component{
  render(){
    return (
      <div>
        <Header updateValue={this.props.updateValue} />
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
         <Plan updateValue={this.props.updateValue} />
	 {todos.map((item, index) => <TodoItem key={index} name={item.name} />)}
      </div> 
    )
  }  
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
      todos: [
        {name: "Wake up"},
        {name: "Take a shower"},
        {name: "Eat breakfast"},
        {name: "Go to work"}
      ] 
    }
  }

  updateValue(e){
    console.log("working");
    this.setState({value: e.target.value});
  }

  addItem(){
   this.sta.todos.push({name: this.state.value})
  }

  render() {
    return (
      <List todos={this.state.todos} updateValue={this.updateValue.bind(this)} />
    );
  }
}

export default App;
