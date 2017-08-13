import React, { Component } from 'react';

class TodoItem extends Component{
  renderItem(isEdited){
    if(isEdited){
      return(
	<div>
	<input />
	<button>Update</button>
	<button>Cancel</button>
	</div>
      );
    }else{
      return(
	<div>
	<p>{this.props.name}</p>
	<button onClick={() => this.props.editItem(this.props.id)}>Edit</button>
	<button onClick={() => this.props.removeItem(this.props.id)}>Delete</button>
	<button onClick={() => this.props.completeItem(this.props.id)}>Complete</button>
	</div>
      );
    }
  }
  render(){
    return(
      <div>
	{this.renderItem(this.props.isEdited)}
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
					editItem={this.props.editItem}
					isEdited={item.isEdited}
					removeItem={this.props.removeItem} 
					completeItem={this.props.completeItem}/>)}
      </div> 
    )
  }  
}

export default List;
