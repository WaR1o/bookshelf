import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook() {
    //console.log(this.props);
    this.props.onBookDelete(this.props.book);
    //return false;
  }

  render () {
    console.log("render");
    return (
      <tr>
        <td><img src={this.props.book.url} alt={this.props.book.name} />
        </td>
        <td>{this.props.book.name}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.year}</td>
        <td><input type="button" className="btn" value="Редактировать" /></td>
        <td><input type="button" className="btn" value="Удалить" onClick={this.handleRemoveBook} /></td>
      </tr>
      );
  }
}

Book.PropTypes = {
  book: PropTypes.object,
  onBookDelete: PropTypes.func
}

export default Book;
