import React from 'react'
import { people } from './data'
import Person from './Person'

const List = () => {
  return (
    <section>
        {people.map((person) => {
            return(
                <Person  key={person.id} {...person}/>
            )
        })}
    </section>
  )
}

export default List