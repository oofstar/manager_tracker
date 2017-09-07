import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import KyleeContainer from './containers/KyleeContainer';
import {Router, Route, browserHistory} from 'react-router';

$(function() {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={KyleeContainer} />
    </Router>,
    document.getElementById('app')
  );
});
