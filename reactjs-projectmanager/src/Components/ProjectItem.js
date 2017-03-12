import React, { Component } from 'react';

class ProjectItem extends Component {
	/*constructor(){
		super();
		
	}*/
  onDelete(id){
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="ProjectItem">
        {this.props.project.title}- {this.props.project.description} <a href="#" onClick={this.onDelete.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
