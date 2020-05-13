import React, { Component } from "react";
class TableData extends Component {
  render() {
    const { name, price, actual_price } = this.props;
    return (
      <tr>
        {" "}
        <td>{name}</td>
        <td>{price}</td>
        <td>{actual_price}</td>
      </tr>
    );
  }
}

export default TableData;
