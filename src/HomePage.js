import React from 'react'
import FileContext from './FileContext'
import SearchBar from './SearchBar'

export default class HomePage extends React.Component {
    static contextType = FileContext;

    render() {
        let peopleList = <div>Loading....</div>;
        if(this.context.people.results !== undefined) {
            peopleList = this.context.people.results.map(person => {
                console.log(person)
                return <div key={person.name}>{person.name}</div>
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