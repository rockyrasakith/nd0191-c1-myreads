import React, {useContext} from "react";
import Header from "./Header";
import BookShelf from "./BookShelf";
import OpenSearch from "./OpenSearch";
import BookContext from "./context/BookContext";

function ListShelves() {
  const { books } = useContext(BookContext);
  return (
    <div className="list-books">
      <Header mainheader="Rocky's Reading List" />
      <div className="list-books-content">
        <div>
          {/* Currently Reading BookShelf */}
          <BookShelf name="Currently Reading" data={books} />
          {/* Want to Read BookShelf */}
          <BookShelf name="Want to Read" data={books} />
          {/* Already Read BookShelf */}
          <BookShelf name="Read" data={books} />
        </div>
      </div>
      <OpenSearch/>
    </div>
  );
}

export default ListShelves;
