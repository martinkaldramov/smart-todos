import React, { Component } from 'react';
import Header from './components/header.js';
import List from './components/todo-list.js';
import Completed from './components/completed-list.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
      todos: [
        {name: "First Todo Item", isEdited: false},
        {name: "Second Todo Item", isEdited: false},
      ],
      completed: [
        {name: "Woke Up"},
	{name: "Brushed My Teeth"}
      ]
    }
  }

  updateValue(e){
    this.setState({value: e.target.value});
  }

  addItem(){
    console.log(this.state.value);
    this.state.todos.unshift({name: this.state.value, isEdited: false});
    this.setState({value: ""});
    //this.state.todos.push({name: this.state.value})
  }

  removeItem(index){
    this.state.todos.splice(index,1);
    this.forceUpdate();
  }

  completeItem(index){
    var completedItem = this.state.todos.splice(index, 1);
    console.log(completedItem);
    this.state.completed.unshift({name: completedItem[0].name});
    this.forceUpdate();
  }

  editItem(index){
    this.state.todos[index].isEdited = true;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Header 
	   value={this.state.value} 
	   updateValue={this.updateValue.bind(this)} 
	   addItem={this.addItem.bind(this)} />
        <List 
	   todos={this.state.todos} 
	   removeItem={this.removeItem.bind(this)}
	   completeItem={this.completeItem.bind(this)}
           editItem={this.editItem.bind(this)}/>
	<Completed completed={this.state.completed} />
      </div>
    );
  }
}

export default App;
