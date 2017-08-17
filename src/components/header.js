import React, {Component} from 'react';

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
        <select onChange={() => this.props.selectPlan}>
          <option value="" disabled selected hidden>Select a Plan</option>
          <option value="loseWeight">Lose Weight</option>
          <option value="learnWebDev">Learn WebDev</option>
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
        <Plan 
	   selectPlan={this.props.selectPlan} />
      </div>
    )
  }
}

export default Header;
