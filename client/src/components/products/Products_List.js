import React, { Component } from 'react';
import ProductForm from './Product_Form';
import axios from 'axios';

const ProductList = () => (
  <>
    <ProductForm />
  </>
)

export class Product extends Component {
  state = { products: [], };

  componentDidMount() {
    axios.get(`/api/department/:department_id/product`)
      .then( res => {
        this.setState({ products: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }


  addItem = (name) => {
    axios.post(`/api/department/:department_id/product`, { name })
      .then( res => {
        const { products } = this.state;
        this.setState({ products: [...products, res.data] });
      })
  }

  updateProduct = (id) => {
    axios.put(`/api/department/:department_id/product/${id}`)
      .then( res => {
        const products = this.state.products.map( t => {
        if (t.id === id)
          return res.data;
        return t;
      });
      this.setState({ products, });
    })
  }

  deleteProduct = (id) => {
    axios.delete(`/api/department/:department_i/product/${id}`)
      .then( res => {
        const { products } = this.state;
        this.setState({ products: products.filter(t => t.id !== id) })
      })
  }
}

export default ProductList