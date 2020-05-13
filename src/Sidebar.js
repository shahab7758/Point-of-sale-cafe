import React, { Component } from "react";
import Data from "./Data";
import SidebarBox from "./SidebarBox";
class Sidebar extends Component {
  getTypes = () => {
    return Data.map((item) => item.type);
  };
  getUniquetypes = () => {
    return [...new Set(this.getTypes())];
  };
  render() {
    const { click } = this.props;
    return (
      <div className="sidebar">
        {this.getUniquetypes().map((typ) => (
          <SidebarBox type={typ} click={click} />
        ))}
      </div>
    );
  }
}

export default Sidebar;
