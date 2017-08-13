import React, { Component } from 'react';

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

export default Completed;
