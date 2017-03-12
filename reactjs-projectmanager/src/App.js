import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';

import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import Todos from './Components/Todos';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {projects :[], todos: []}
  }
  getProjects(){
    this.setState({
      projects: [{
        id: uuid.v4(),
      title:"Sample Tests",
      description:"sample desc"
    },{
      id:uuid.v4(),
      title:"Sample Tests2",
      description:"sample desc2"
    },{
      id:uuid.v4(),
      title:"Sample Tests3",
      description:"sample desc3"
    }]
    })
  }
  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET',
      cache: false,
      success: function function_name(responseData) {
        this.setState({todos: responseData}, function(){
          console.log(this.state.todos);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }
  componentWillMount(){
    this.getProjects();
    this.getTodos()
  }
  componentDidMount(){
    this.getTodos()
  }
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState(projects);
  }
  handleDeleteProject(id){
    console.log('delete', id);
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  render() {
    return (
      <div className="App">
        MY App
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
