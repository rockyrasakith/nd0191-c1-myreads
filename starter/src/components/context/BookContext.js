import React, { createContext, useState, useEffect } from "react";
import { get, getAll, update, search } from "../../BooksAPI";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [reading, setReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  // Set the state of the initial books and map it out to the components.
  const getAllBooks = async () => {
    let allBooks = await getAll();
    return allBooks;
  };

  // useEffect hook to call getAll function and save all the books into
  useEffect(() => {
    const getData = async () => {
      const response = await getAllBooks();
      setBooks(response);
    };
    if (books.length === 0) {
      getData();
    }
  }, [books]);

  return (
    <BookContext.Provider
      value={{
        books,
        reading,
        wantToRead,
        read,
        setReading,
        setWantToRead,
        setRead
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;
