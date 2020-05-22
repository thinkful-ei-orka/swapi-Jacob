import React from 'react'
import FileContext from './FileContext';
import { Link } from 'react-router-dom';

export default class SearchResults extends React.Component {

    static contextType = FileContext;

componentDidMount = () => {
    this.getSearchTerm()

  
}

getSearchTerm = () => {
    let path = window.location.pathname.split('/');
    let searchTerm = path[path.length - 1];
    this.context.onSearchPerson(searchTerm)
    
}


    render() {
        if(this.context.searchResults === null) {
            return (
                <div>loading.....</div>
            )
        }
        else if (this.context.searchResults.length === 0) {
            return (
                <>
                    <div>Find results, we could not. Try again, you must.</div>
                    <Link to='/'><button type='button'>Go back</button></Link>
                </>
            )
        }
        else {
           console.log(this.context.searchResults)
           return (
                <>
                <ul>
                    {this.context.searchResults.map(person => {
                        return (
                            <li key={person.name}>
                                <div>{person.name}</div>
                                <div>{person.birth_year}</div>
                            </li>
                        )
                        }
                    )}
                </ul>
                <Link to='/'><button type='button'>Go back</button></Link>
                </>
            )
        }
    }
}
