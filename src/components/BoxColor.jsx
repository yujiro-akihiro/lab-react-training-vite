import React from "react";

const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "200px",
    height: "100px",
    margin: "10px",
  };

  return <div style={divStyle}></div>;
};

export default BoxColor;
