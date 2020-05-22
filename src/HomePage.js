import React from 'react'
import FileContext from './FileContext'
import SearchBar from './SearchBar'

export default class HomePage extends React.Component {
    static contextType = FileContext;

    render() {
        let peopleList = <div>Loading....</div>;
        if(this.context.people !== undefined) {
            peopleList = this.context.people.map(person => {
                if(person.expanded === false) {
                    return <div key={person.name}>{person.name}</div>
                }
                return (
                    <div>
                        <div>{person.name}</div>
                        <div>{person.gender}</div>
                        <div>{person.birth_year}</div>
                    </div>
                )
            })        
        }
        return(
            <>
                <SearchBar />
                <div className='person-list'>
                    {peopleList}
                </div>
            </>
        )
    }
}