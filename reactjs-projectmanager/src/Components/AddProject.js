import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
	static defaultProps = {
    categories:["a","B","c","d"]
  }
  constructor(){
    super();
    this.state ={
      newProject:{}
    } 
  }
  handleSubmit(e){
    console.log(this.refs.title.value);
    this.setState({
      newProject:{id:uuid.v4(), title:this.refs.title.value, description:this.refs.category.value}
    },function(){
      console.log('adding', this.state.newProject)
      this.props.addProject(this.state.newProject);
    })
    
    e.preventDefault();
  }
  render() {
    console.log(this.props.categories)
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>;
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              {categoryOptions}
            </select>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}


export default AddProject;
