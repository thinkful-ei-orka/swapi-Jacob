import React from 'react'
import FileContext from './FileContext';

export default class SearchResults extends React.Component {

    static contextType = FileContext;
    state = {
        searchTerm: null,
    } 
componentDidMount = () => {
    this.getSearchTerm()
    this.fetchResults()
  
}

getSearchTerm = () => {
    let path = window.location.pathname.split('/');
    let searchTerm = path[path.length - 1]
    console.log(searchTerm)
    this.setState({searchTerm: searchTerm});
}
fetchResults = () => {
    this.context.onSearchPerson(this.state.searchTerm)
} 
    render() {
        return(
            <div>SearchResults</div>
        )
    }
}