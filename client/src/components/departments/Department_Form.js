import React from "react";
import { Form, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  state = { title: '' };
  
  handleChange = (e, {name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDepartment(this.state.title);
    this.setState({ title: '' })

  }
  
  render() {
    const { title } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Department"
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

export default DepartmentForm ;