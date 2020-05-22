import React from 'react'
import FileContext from './FileContext'
import SearchBar from './SearchBar'

export default class HomePage extends React.Component {
    static contextType = FileContext;

    render() {
        let peopleList = <li>Loading....</li>;
        if(this.context.people !== undefined) {
            peopleList = this.context.people.map(person => {
                if(person.expanded === false) {
                    return (
                        <li key={person.name}>
                            {person.name}
                        </li>
                    )
                }
                return (
                    <ul className="expanded-list-item">
                        <li>{person.name}</li>
                        <li>{person.gender}</li>
                        <li>{person.birth_year}</li>
                    </ul>
                )
            })        
        }
        return(
            <>
                <SearchBar />
                <ul className='person-list'>
                    {peopleList}
                </ul>
            </>
        )
    }
}