import React, { Component } from "react";
import BoxList from "./BoxList";
import Sidebar from "./Sidebar";
import Data from "./Data";
import Form from "./Form";
class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: Data,
      inputName: "",
    };
  }
  handleInputChange = (event) => {
    this.setState({ inputName: event.target.value });
  };
  handleTypeChange = (typ) => {
    this.setState({ dataList: Data.filter((item) => item.type === typ) });
  };
  handleSearch = () => {
    this.setState({
      dataList: this.state.dataList.filter(
        (item) => item.name.toUpperCase() === this.state.inputName.toUpperCase()
      ),
    });
  };
  names = [];
  price = [];
  upDatedPrice = [];
  quan = [];
  handleClick = (name, price) => {
    if (this.names.includes(name)) {
      const getIndex = this.names.indexOf(name);
      this.quan[getIndex]++;
      this.upDatedPrice[getIndex] += this.price[getIndex];
    } else {
      this.names.push(name);
      this.upDatedPrice.push(price);
      this.price.push(price);
      this.quan.push(1);
    }
  };
  render() {
    return (
      <div>
        <div className="search">
          <input
            value={this.state.inputName}
            onChange={this.handleInputChange}
            placeholder="Item Name"
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div className="billing">
          <div>
            <Sidebar Data={Data} click={this.handleTypeChange} />
          </div>
          <div>
            <BoxList Data={this.state.dataList} click={this.handleClick} />
          </div>
          <div>
            <Form
              names={this.names}
              price={this.upDatedPrice}
              quan={this.quan}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
