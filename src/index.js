import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BOOKS from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App books={BOOKS}/>, document.getElementById('root'));
registerServiceWorker();
