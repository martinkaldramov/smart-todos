import React, { Component } from 'react';

class TodoItem extends Component{
  render(){
    return(
      <div>
        {this.props.isEdited 
	   ? <input 
		value={this.props.editValue}
		onChange={this.props.trackEditValue}
		onKeyPress={() => this.props.saveChange(this.props.id, this.props.editValue)}/> 
	   : <p>{this.props.name}</p>}
        {this.props.isEdited 
	   ? <button>Save</button>
	   : <button onClick={() => this.props.editItem(this.props.id)}>Edit</button>}
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
	 {todos.map((item, index) => 
	    <TodoItem  
	       key={index} 
	       id={index} 
	       name={item.name} 
	       editItem={this.props.editItem} 
	       isEdited={item.isEdited} 
	       removeItem={this.props.removeItem} 
	       completeItem={this.props.completeItem}
	       editValue={this.props.editValue}
	       trackEditValue={this.props.trackEditValue}
	       saveChange={this.props.saveChange}/>)}
      </div> 
    )
  }  
}

export default List;
