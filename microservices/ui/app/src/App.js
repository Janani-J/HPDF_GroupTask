import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './login';
import SignUpPage from './SignUp';
import HomePage from './HomePage';
import BooksPage from './BooksPage';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <SignUpPage/>
      </MuiThemeProvider>
    );
  }
}

export default App;
