import React from 'react';
import { Redirect } from 'react-router-dom';
const FileContext = React.createContext();
export default FileContext;

export class FileContextProvider extends React.Component {
    state = {
        BASEURL: 'https://swapi.dev/api/people/',
        people: [],
        searchResults: null
    }
    componentDidMount = () => {

        fetch(this.state.BASEURL)
        .then(res => {
            if (!res.ok) {
                throw new Error("It appears there has been a disturbance in the Force... Please try again.");
            } 
            return res.json()
        })
        .then(people => {
            this.setState({
                people: people
            })
        })
        .catch(error => {return error.message})
    }

    searchPerson = (searchValue) => {
        fetch(`${this.state.BASEURL}?search=${searchValue}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("It appears there has been a disturbance in the Force... Please try again.");
            } 
            return res.json()
        })
        .then(result => {
            this.setState({
                searchResults: result
            })
        })
        .catch(error => {return error.message})
    }


    render() {
        if(this.state.people === null) {
            return <div>Loading...</div>           
        }
        return (
            <FileContext.Provider value={{
                people: this.state.people,
                onSearchPerson: this.searchPerson,


            }}>
                {this.props.children}
            </FileContext.Provider>
        )
    }

}