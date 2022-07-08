import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import BookContext from "./context/BookContext";

function SearchBar() {
  const { books } = useContext(BookContext);
  console.log(books);

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log("search term", search);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <div className="close-search">Close</div>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="search-books-results">
        {search === "" && (
          <h2 style={{ textAlign: "center" }}>Search for a book...</h2>
        )}
        <ol className="books-grid">
          {books
            .filter(({ title, authors, industryIdentifiers }) => {
              console.log(authors)
              console.log(industryIdentifiers)
              if (search.length === 0) {
                return null;
              } else if (
                title.toLowerCase().includes(search.toLowerCase())
              ) {
                return title;
              }
            })
            .map((book) => (
              <li>
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

export default SearchBar;
