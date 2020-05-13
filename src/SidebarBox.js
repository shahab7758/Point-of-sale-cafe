import React, { Component } from "react";
class SidebarBox extends Component {
  render() {
    const { type, click } = this.props;
    return (
      <button onClick={() => click(type)}>
        <h2>{type}</h2>
      </button>
    );
  }
}

export default SidebarBox;
