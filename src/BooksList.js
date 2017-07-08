import React, { Component } from 'react';
import Book from './Book.js';

class BooksList extends Component {
  render() {
    let rows = [];
    this.props.books.map((book) => {
      rows.push(<Book name={book.name} author={book.author} year={book.year} url={book.url} />);
    });

    return (
        <table className="book-list">
        <tbody>{rows}</tbody>
        </table>
    );
  }
}


export default BooksList;
