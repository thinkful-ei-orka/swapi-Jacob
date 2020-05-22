import React from 'react'
import FileContext from './FileContext'
import SearchResults from './SearchResults'

import { Redirect } from 'react-router-dom';
export default class SearchBar extends React.Component {
    static contextType = FileContext;
    state = {
        searchTerm: '',
    }
    submitForm = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={e => this.submitForm(e)}>
            <label htmlFor="search-bar">Search your feelings</label>
            <input type="text" id="search-bar" name="search-bar" value={this.state.searchTerm.value} onChange={e => this.setSearchTerm(e.target.value)}></input>
            <Redirect to={`/people/${this.state.searchTerm}`}><button type="submit">Do it.</button></Redirect>
            <p className="error">{this.state.error}</p>
            <p className="loading"></p>
          </form>
        )
    }
}