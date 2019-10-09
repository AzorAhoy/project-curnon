import React, { Component } from 'react';

import Head from "../Components/Header";
import Footer from "../Components/Footer";
import ProductGallery from '../Components/ProductGallery';
import ProductSummary from '../Components/ProductSummary';
import ProductPolicy from "../Components/ProductPolicy";
import ProductSpecs from "../Components/ProductSpecs";
import ProductReviews from '../Components/ProductReviews';
import axios from '../axios';
import Tabs from '../Components/Tabs';

class ProductDetail extends Component {
  state = {
    product: {},
    comments: [],
    pages: 0
  }

  componentDidMount() {
    // Check login
    console.log("Hello");
    //const access_token = window.localStorage.getItem("access_token");
    const id = "5d8ba5d4d890b216a01668b1";
    axios.get(`/api/product/${id}`)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.data);
          this.setState({
            product: response.data.data,
            pages: response.data.totalPage
          });
        } else {
          console.log("Error");
          //this.props.history.push("/login");
        }
      }).catch(error => {

      });

    axios.get(`/api/comment/${id}`)
      .then(response => {
        if (response.data.success) {
          console.log(response.data.data);
          this.setState({
            comments: response.data.data
          });
          console.log("comments: ", response.data.data);
        } else {
          console.log("Error");
          //this.props.history.push("/login");
        }
      }).catch(error => {

      });
  }
  render() {
    const product = this.state.product ? this.state.product : null;
    const images = product.image;
    if (!images) {
      return "loading";
    }
    console.log(images);
    return (
      <div>
        <Head />
        <ProductGallery images={images} />
        <ProductSummary />
        <ProductPolicy />
        <ProductSpecs details={product.detail} image={images[0]}/>
        <ProductReviews comments = {this.state.comments}/>

        <Footer />
      </div>
    );
  }
}


export default ProductDetail;