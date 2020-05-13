import React from "react";
import Data from "./Data";
import Table from "./Table";
const data = Data.filter((item) => item.type === "Fast Food");
const FastFood = () => {
  return <Table data={data} />;
};

export default FastFood;
