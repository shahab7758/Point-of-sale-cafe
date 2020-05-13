import React from "react";
import Data from "./Data";
import Table from "./Table";
const data = Data.filter((item) => item.type === "Juice");
const Juice = () => {
  return <Table data={data} />;
};

export default Juice;
