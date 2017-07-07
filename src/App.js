import React, { Component } from 'react';
import './App.css';
import Book from './Book.js';
import AddForm from './AddForm.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="#" className="App-logo" alt="logo" />
          <h2>Книжная полка</h2>
        </div>
		    <table id="myTable">

  		    <Book src="https://goo.gl/6Hdc4x" alt="Automate the boring stuff with Python"
          name="Automate The Boring Stuff With Python"
          author="Al Sweigart" year="2016" />

          <Book src="https://goo.gl/hPjBdk" alt="Kali Linux Web Penetration Testing"
          name="Kali Linux Web Penetration Testing Cookbook"
          author="Gilberto Najera-Gutierrez" year="2016" />

          <Book src="https://goo.gl/znWzRj" alt="Mastering Django: Core"
          name="Mastering Django: Core"
          author="Nigel George" year="2015" />

          <Book src="https://goo.gl/wUYEUb" alt="ReactJS by Example"
          name="ReactJS by Example- Building Modern Web Applications with React"
          author="Prathamesh Sonpatki" year="2016" />

          <AddForm />
		    </table>
    </div>
    );
  }
}

export default App;
