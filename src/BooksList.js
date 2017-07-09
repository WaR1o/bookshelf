import React, { Component } from 'react';
import Book from './Book.js';
import PropTypes from 'prop-types';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.handleBookRemove = this.handleBookRemove.bind(this);
    this.handleEditBook = this.handleEditBook.bind(this);
  }

  handleBookRemove(book) {
    this.props.onBookRemove(book);
  }

  handleEditBook(book) {
    this.props.onBookEdit(book);
  }

  render() {
    let rows = [];
    let that = this;
    this.props.books.map((book, index) => {
      rows.push(<Book book={book} onEditBook={this.handleEditBook} onBookDelete={that.handleBookRemove} key={index}/>);
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
  onBookRemove: PropTypes.func,
  onBookEdit: PropTypes.func
}

export default BooksList;
