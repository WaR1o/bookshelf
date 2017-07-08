import React, { Component } from 'react';
import './App.css';
import Book from './Book.js';
import AddForm from './AddForm.js';
import BooksList from './BooksList.js'

export let BOOKS = [
  {name: "Automate The Boring Stuff With Python", author: "Al Sweigart", year: "2016", url: "https://goo.gl/mZaqMp"},
  {name: "Kali Linux Web Penetration Testing", author: "Gilberto Najera-Gutierrez", year: "2016", url: "https://goo.gl/hPjBdk"},
  {name: "Mastering Django: Core", author: "Nigel George", year: "2015", url: "https://goo.gl/znWzRj"},
  {name: "ReactJS by Example- Building Modern Web Applications with React", author: "Prathamesh Sonpatki", year: "2016", url: "https://goo.gl/AgBgSw"}
];

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {data: []};
  }*/

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="#" className="App-logo" alt="logo" />
          <h2>Книжная полка</h2>
        </div>
		    <BooksList books={BOOKS} />
        <AddForm />
    </div>
    );
  }
}

export default App;
