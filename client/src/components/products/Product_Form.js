import React from "react";
import { Form, } from "semantic-ui-react";

class ProductForm extends React.Component {
  state = { name: "", description: "", price: "", stock: "" };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { name, description, price, stock } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Product"
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Description"
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Price"
          type="number"
          step="0.01"
          name="price"
          value={price}
          onChange={this.handleChange}        
        />
        <Form.Select
          label="In Stock"
          name="stock"
          value={stock}
          onChange={this.handleChange}
          options={StockOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const StockOptions = [
  { key: "y", text: "Yes", value: "true", },
  { key: "s", text: "No", value: "false", },
];

export default ProductForm;