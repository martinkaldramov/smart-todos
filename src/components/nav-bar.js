import React, {Component} from 'react';

class NavBar extends Component{
  render(){
    return(
      <div>
         <ul>
	   <li>MyTodos</li>
	   <li>Popular Todos</li>
	   <li>Popular Plans</li>
	 </ul>
      </div>
    )
  }
}

export default NavBar;
