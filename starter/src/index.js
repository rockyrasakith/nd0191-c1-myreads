import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { BookProvider } from "./components/context/BookContext";

ReactDOM.render(
  <React.StrictMode>
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
