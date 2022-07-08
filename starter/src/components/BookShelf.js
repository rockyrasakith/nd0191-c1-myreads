import React, { useState } from "react";
import Book from "./Book";

function BookShelf({ name, data }) {
  const [readStatus, setReadStatus] = useState("");

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {data.map((book) => (
            <li key={book.id}>
              <Book
                title={book.title}
                author={book.authors}
                cover={book.imageLinks.thumbnail}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
