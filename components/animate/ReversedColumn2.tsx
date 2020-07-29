import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

export default function ReversedColumn2() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  console.log(currentPage);

  return (
    <div style={{ display: "flex" }}>
      <ReactPageScroller containerWidth="50vw" pageOnChange={handlePageChange} customPageNumber={currentPage}>
        <Item style={{ backgroundColor: "blue" }}>1</Item>
        <Item style={{ backgroundColor: "red" }}>2</Item>
        <Item style={{ backgroundColor: "green" }}>3</Item>
        <Item style={{ backgroundColor: "yellow" }}>4</Item>
      </ReactPageScroller>
      <ReactPageScroller containerWidth="50vw" customPageNumber={4 - currentPage}>
        <Item style={{ backgroundColor: "blue" }}>1</Item>
        <Item style={{ backgroundColor: "red" }}>2</Item>
        <Item style={{ backgroundColor: "green" }}>3</Item>
        <Item style={{ backgroundColor: "yellow" }}>4</Item>
      </ReactPageScroller>
    </div>
  );
}

const Item = ({ children, style, ...props }) => (
  <div
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      ...style,
    }}
    {...props}
  >
    <h2 style={{ margin: "auto" }}>{children} Component</h2>
  </div>
);
