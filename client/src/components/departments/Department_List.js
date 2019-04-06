import React from 'react';
import Department from './Department';
import DepartmentForm from './Department_Form';
import axios from "axios";
import {Header} from 'semantic-ui-react';



class DepartmentList extends React.Component { 
  state = {departments: [], }

  componentDidMount() {
    axios.get("/api/department")
      .then( res => {
        this.setState({ departments: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }
  addDepartment = (title) =>{
    axios.post('/api/department', { title })
    .then( res => {
      const { departments } = this.state;
      this.setState({ departments: [...departments, res.data] });
    })
  }
    updateDepartment = (id) => {
      axios.put(`/api/department/${id}`)
      .then( res => {
        const departments = this.state.departments.map( d => {
        if (d.id === id)
          return res.data;
        return d;
      });
      this.setState({ departments, });
    })
    }
  
    deleteDepartment = (id) => {
      axios.delete(`/api/department/${id}`)
      .then( res => {
        const { departments } = this.state;
        this.setState({ departments: departments.filter(d => d.id !== id) })
      })
    }
  render() {
    return(
      <div>
        <DepartmentForm addDepartment={this.addDepartment} />
        <Header as="h3" textAlign="center">All Departments</Header>
        <ul>
          {
        this.state.departments.map( (d, i) => {
          return(
          <Department
          key={i}
          {...d}
          departments={this.state.departments}
          updateDepartment={this.updateDepartment}
          deleteDepartment={this.deleteDepartment}
          />
          )
        })
        
          }
        </ul>
        
      </div>
    )
  }
}
  
 
export default DepartmentList;