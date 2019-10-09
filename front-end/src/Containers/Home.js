import React, { Component } from 'react';

import Head from "../Components/Header";
import Footer from "../Components/Footer";

import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
          <div>
            <Head />
            <div>alo</div>
            <div>
              <Link to="/product/1">
                HELLO
              </Link>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Home;