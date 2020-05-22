import React from 'react';
import { Route, Link } from 'react-router-dom';
import { FileContextProvider } from './FileContext';
import HomePage from './HomePage'
import SearchResults from './SearchResults'
import './App.css';

export default class App extends React.Component {


  render() {
    return(
      <>
        <header>
          <Link to='/'><h1>Star Wars Database</h1></Link>
        </header>
        <FileContextProvider>
          <Route path='/' exact component={HomePage} />
          <Route path='/:personName' exact component={SearchResults} />
        </FileContextProvider>
      </>
    )
  }
}
