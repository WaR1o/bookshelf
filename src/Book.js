import React, { Component } from 'react';

class Book extends Component {
  handleRemoveBook() {
    this.props.onBookDelete(this.props.book);
    return false;
  }

  render () {
    return (
      <tr>
        <td><img src={this.props.book.url} alt={this.props.book.name} />
        </td>
        <td>{this.props.book.name}</td>
        <td>{this.props.book.author}</td>
        <td>{this.props.book.year}</td>
        <td><input type="button" className="btn" value="Редактировать" /></td>
        <td><input type="button" className="btn" value="Удалить" onclick={this.handleRemoveBook} /></td>
      </tr>
      );
  }
}

export default Book;
