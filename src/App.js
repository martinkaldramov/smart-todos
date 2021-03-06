import React, { Component } from 'react';
import NavBar from './components/nav-bar.js';
import Header from './components/header.js';
import List from './components/todo-list.js';
import Completed from './components/completed-list.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: "",
      editValue: "",
      todos: [
        {name: "First Todo Item", isEdited: false},
        {name: "Second Todo Item", isEdited: false},
      ],
      completed: [
        {name: "Woke Up"},
	{name: "Brushed My Teeth"}
      ],
      plans: [
        {name: "loseWeight", 
	 todos: [
	   {name: "Workout", isEdited: false},
	   {name: "Eat Less", isEdited: false}	
	]},
	{name: 'learnWebDev', 
	 todos: [
	   {name: "Learn HTML", isEdited: false},
	   {name: "Learn CSS", isEdited: false},
	   {name: "Learn JavaScript", isEdited: false}	
	]} 
      ]
    }
    };

  updateValue(e){
    this.setState({value: e.target.value});
  }

  trackEditValue(e){
    this.setState({editValue: e.target.value});
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

  moveInTodos(index){
    var completedCopy = this.state.completed.slice();
    var todosCopy = this.state.todos.slice();
    var item = completedCopy.splice(index, 1);
    todosCopy.unshift({name: item[0].name, isEdited: false});
    this.setState({todos: todosCopy, completed: completedCopy});
  }

  editItem(index){
    this.state.todos[index].isEdited = true;
    this.forceUpdate();
  }

  saveChange(index, value){
    var todosCopy = this.state.todos.slice();
    todosCopy[index] = {name: value, isEdited: false};
    this.setState({todos: todosCopy});
    console.log(this.state.todos[index]);
    this.setState({editValue: ""});
  }

  selectPlan(e){
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
	<NavBar />
        <Header 
	   value={this.state.value} 
	   updateValue={this.updateValue.bind(this)} 
	   addItem={this.addItem.bind(this)}
	   resetEdit={this.state.resetEdit}
	   selectPlan={this.selectPlan.bind(this)} />
        <List 
	   todos={this.state.todos} 
	   removeItem={this.removeItem.bind(this)}
	   completeItem={this.completeItem.bind(this)}
           editItem={this.editItem.bind(this)}
	   editValue={this.state.editValue}
	   trackEditValue={this.trackEditValue.bind(this)}
	   saveChange={this.saveChange.bind(this)}/>
	<Completed 
	   completed={this.state.completed}
	   moveInTodos={this.moveInTodos.bind(this)} />
      </div>
    );
  }
}

export default App;
