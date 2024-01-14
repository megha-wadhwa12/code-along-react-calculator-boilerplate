import React from "react";

const Button = ({ value, onClick, style }) => {
  console.log("Value: ", value);
  console.log("onClick:", onClick);
  console.log("style:", style);

  return (
    <div>
      <button className="all_buttons" onClick={onClick} style={value === "=" ? {gridColumn: "span 3"}: {gridColumn: "span 1"}}>
        {value}
      </button>
    </div>
  );
};
export default Button;
