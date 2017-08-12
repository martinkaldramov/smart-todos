import React, { Component } from 'react';
import './App.css';

class AddItem extends Component{
  render(){
    return(
      <div id="addItem">
        <input 
	   placeholder="Enter Item Name" 
           value={this.props.value} 
	   onChange={this.props.updateValue} />
	<button onClick={this.props.addItem}>Add</button>
      </div>
    )
  }
}

class Plan extends Component{
  render(){
    return (
      <div>
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

class Header extends Component{
  render(){
    return(
      <div>
        <h1>My Todos List</h1>
	<AddItem 
	   value={this.props.value} 
	   updateValue={this.props.updateValue} 
	   addItem={this.props.addItem} />
        <Plan />
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
	<button onClick={() => this.props.removeItem(this.props.id)}>Delete</button>
	<button onClick={() => this.props.completeItem(this.props.id)}>Complete</button>
      </div> 
    )
  }
}

class List extends Component{
  render(){
    const todos = this.props.todos;
    return(
      <div>
	 {todos.map((item, index) => <TodoItem 
	  				key={index} 
					id={index} 
					name={item.name} 
					removeItem={this.props.removeItem} 
					completeItem={this.props.completeItem}/>)}
      </div> 
    )
  }  
}

class CompletedItem extends Component{
  render(){
    return(
      <div>
       <s><p>{this.props.name}</p></s>
	<button>Not Completed</button>
      </div> 
    )
  }
}

class Completed extends Component{
  render(){
    const completed = this.props.completed;
    return(
      <div>
	 {completed.map((item, index) => <CompletedItem
	  				key={index} 
					id={index} 
					name={item.name} />)}
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
        {name: "First Todo Item"},
        {name: "Second Todo Item"},
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
    this.state.todos.unshift({name: this.state.value});
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
	   completeItem={this.completeItem.bind(this)}/>
	<Completed completed={this.state.completed} />
      </div>
    );
  }
}

export default App;
