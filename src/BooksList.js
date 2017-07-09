import React, { Component } from 'react';
import Book from './Book.js';
import PropTypes from 'prop-types';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleBookRemove = this.handleBookRemove.bind(this);
  }

  handleBookRemove(book) {
    this.props.onBookRemove(book);
  }

  render() {
    let rows = [];
    let that = this;
    this.props.books.map((book, index) => {
      rows.push(<Book book={book} onBookDelete={that.handleBookRemove} key={index}/>);
       });

    return (
        <table className="book-list">
        <tbody>{rows}</tbody>
        </table>
    );
  }
}

BooksList.PropTypes = {
  books: PropTypes.object,
  onBookRemove: PropTypes.func
}

export default BooksList;
