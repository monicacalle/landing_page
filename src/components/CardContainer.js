import React from "react";
import Card from "./card";

export const CardContainer = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
