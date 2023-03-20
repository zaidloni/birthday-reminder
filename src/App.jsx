import { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

function App() {
const [people, setPeople] = useState(data)
  return (
    <main >
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people = { people}/>
        {people.length === 0 ? <button onClick={() => setPeople(data)}>Show Again</button> :
        <button onClick={() =>  setPeople([])}>Clear All</button>
        
        }
      </section>
    </main>
  )
}

export default App
