import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Book from "./ui/Book";

export default function Featured() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <div className="section__title">
            <h2>
              Featured <span className="purple">Books</span>
            </h2>
            <div className="books">
                <Book />
                <Book />
                <Book />
                <Book />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
