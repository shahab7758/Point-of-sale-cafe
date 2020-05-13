import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <ul>
          <li>
            <Link to="all">All</Link>
          </li>
          <li>
            <Link to="billing">Billing</Link>
          </li>
          <li>
            <Link to="fastfood">Fast Food</Link>
          </li>
          <li>
            <Link to="softdrinks">Soft Drinks</Link>
          </li>
          <li>
            <Link to="juice">Juice</Link>
          </li>
          <li>
            <Link to="biscuits">Biscuits</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
