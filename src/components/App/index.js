import ListPersons from "../ListPersons"
import { data } from "../../resources/data"
import { useState } from "react"

function App () {
  const [numPersons, setNumPersons] = useState(0)
  const addPersons= () => {
    if(numPersons<data.length) setNumPersons(numPersons + 1)
    else setNumPersons(0) 
  }
    return (
        <div className='App'>
          <h1>Technical Test</h1>
          <h2>Part 1</h2>
          <ListPersons data={ data }/>
          <h2>Part 2</h2>
          <button onClick= {addPersons}>New Person</button>
          <ListPersons data={ data.slice(0, numPersons) }/>
        </div>
    )
}

export default App