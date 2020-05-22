import React from 'react'
import FileContext from './FileContext'
import { Link } from 'react-router-dom';
export default class SearchBar extends React.Component {
    static contextType = FileContext;
    state = {
        searchTerm: '',
    }
    submitForm = (e) => {
        e.preventDefault();
    }

    setSearchTerm = name => {
        this.setState({
            searchTerm: name
        })
    }
    render() {
        return (
            <form className="search-form"onSubmit={e => this.submitForm(e)}>
            <label htmlFor="search-bar">Search your feelings</label>
            <input type="text" id="search-bar" name="search-bar" value={this.state.searchTerm.value} onChange={e => this.setSearchTerm(e.target.value)}></input>
            <Link to={`${this.state.searchTerm}`}><button type="submit">Do it.</button></Link>
            <p className="error">{this.state.error}</p>
            <p className="loading"></p>
          </form>
        )
    }
}