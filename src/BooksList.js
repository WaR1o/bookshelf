import React, { Component } from 'react';
import Book from './Book.js';

class BooksList extends Component {
  handleBookRemove(book) {
    this.props.onBookRemove(book);
  }

  render() {
    let rows = [];
    let that = this;
    this.props.books.map((book) => {
      rows.push(<Book book={book} onBookDelete={that.handleBookRemove} />);
    });

    return (
        <table className="book-list">
        <tbody>{rows}</tbody>
        </table>
    );
  }
}


export default BooksList;
