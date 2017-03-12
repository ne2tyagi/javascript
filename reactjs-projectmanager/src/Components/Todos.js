import React, { Component } from 'react';
import TodoItem from './TodoItem'

class Todos extends Component {
  
  render() {
  	let todoItems;
  	if(this.props.todos){
  		todoItems = this.props.todos.map((todo, index) => {

  			console.log(todo.title,index);
  			return (
  				<TodoItem key={index} todo={todo}/>
  				);
  		})
  	}
    return (
      <div className="Todos">
        MY Todos
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array
}



export default Todos;
