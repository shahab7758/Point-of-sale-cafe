import React, { Component } from "react";
import TableData from "./TableData";
class Table extends Component {
  render() {
    const { data } = this.props;
    return (
      <table border="1">
        {["Name", "Price", "Actual_Price"].map((item) => (
          <th>
            <td>{item}</td>
          </th>
        ))}
        {data.map((item) => (
          <TableData
            name={item.name}
            price={item.price}
            actual_price={item.actual_price}
          />
        ))}
      </table>
    );
  }
}

export default Table;
