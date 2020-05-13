import React, { Component } from "react";
class Form extends Component {
  render() {
    const { names, price, quan } = this.props;
    console.log(names);
    return (
      <div className="form">
        <div>
          <h1>Name</h1>
          {names.map((i) => (
            <h1>{i}</h1>
          ))}
        </div>
        <div>
          <h1>Quantity</h1>

          {quan.map((i) => (
            <h1>{i}</h1>
          ))}
        </div>
        <div>
          <h1>price</h1>

          {price.map((i) => (
            <h1>{i}</h1>
          ))}
        </div>
      </div>
    );
  }
}

export default Form;
