import React from "react";

class Box extends React.Component {
  render() {
    const { item, click } = this.props;
    return (
      <button onClick={() => click(item.name, item.price)}>
        <div>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
        </div>
      </button>
    );
  }
}

export default Box;
