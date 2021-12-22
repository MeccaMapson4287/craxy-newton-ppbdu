import React from "react";

function Painting(props) {
  return (
    <div className="Painting">
      <h2>NAME</h2>
      <h3>$$ PRICE</h3>
      <div className="buttons">
        <button
          onClick={() => {
            console.log("ADDING ITEM");
          }}
        >
          Add
        </button>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default Painting;
