import SearchBar from "./components/SearchBar";
import ListShelves from "./components/ListShelves";
import "./App.css";
import { useState, useEffect } from "react";
import { BookProvider } from "./components/context/BookContext";
import { Link } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [alreadyRead, setAlreadyRead] = useState([]);

  return (
      <div className="app">
        {/* SearchBar */}
        {/* <SearchBar
          searchPageShow={showSearchPage}
          searchPageSet={setShowSearchpage}
          data={allBooks}
        /> */}

        {/* The Entire Array of BookShelves */}
        <ListShelves
          searchPageShow={showSearchPage}
          searchPageSet={setShowSearchpage}
          data={allBooks}
        />
      </div>
  );
}

export default App;
