import React from "react";
import SelectShelfTool from "./SelectShelfTool";

function Book({ title, author, cover, status }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${cover})`,
          }}
        ></div>
        <SelectShelfTool />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
}

export default Book;
