import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'))
