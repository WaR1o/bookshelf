import React, { Component } from 'react';

class Book extends Component {

  render () {
    return (
      <tr>
        <td><img src={this.props.url} alt={this.props.name} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.author}</td>
        <td>{this.props.year}</td>
        <td><input type="button" value="Редактировать" /></td>
        <td><input type="button" value="Удалить" onclick="deleteRow(this)" /></td>
      </tr>
      );
  }
}

export default Book;
