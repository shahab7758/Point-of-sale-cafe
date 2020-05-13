import React from "react";
import Data from "./Data";
import Table from "./Table";
const data = Data.filter((item) => item.type === "Soft Drink");
const SoftDrinks = () => {
  return <Table data={data} />;
};

export default SoftDrinks;
