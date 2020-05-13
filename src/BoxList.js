import React from "react";
import Box from "./Box";

class BoxList extends React.Component {
  render() {
    const { Data, click } = this.props;
    return (
      <div className="boxlist">
        {Data.map((item) => (
          <Box item={item} click={click} />
        ))}
      </div>
    );
  }
}

export default BoxList;
