import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleRemoveBook() {
    this.props.onBookDelete(this.props.book);
  }

  handleEdit() {
    this.props.onEditBook(this.props.book);
  }

  render () {
    return (
      <tr>
        <td className="img"><img src={this.props.book.url} alt={this.props.book.name} />
        </td>
        <td className="name">{this.props.book.name}</td>
        <td className="author">{this.props.book.author}</td>
        <td className="year">{this.props.book.year}</td>
        <td className="del"><input type="button" className="btn" value="Удалить" onClick={this.handleRemoveBook} /></td>
      </tr>
      );
  }
}

Book.PropTypes = {
  book: PropTypes.object,
  onBookDelete: PropTypes.func,
  onEditBook: PropTypes.func
}

export default Book;
