import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="TodoItem">
        {this.props.todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;
