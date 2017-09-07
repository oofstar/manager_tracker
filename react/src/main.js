import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import KyleeContainer from './containers/KyleeContainer';

$(function() {
  ReactDOM.render(
    <KyleeContainer />,
    document.getElementById('app')
  );
});
