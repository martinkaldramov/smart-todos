import React, { Component } from 'react';

class CompletedItem extends Component{
  render(){
    return(
      <div>
       <s><p>{this.props.name}</p></s>
	<button onClick={() => this.props.testFun(this.props.id)}>Not Completed</button>
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
					name={item.name}
					testFun={this.props.testFun} />)}
      </div> 
    )
  }  
}

export default Completed;
