import ListPersons from "../ListPersons"
import { data } from "../../resources/data"
import { useState } from "react"

function App () {
  const [numPersons, setNumPersons] = useState(0)
  const [persons, setPersons] = useState([]);
  const addPersons= () => {
    setPersons([...persons, data[numPersons]])
    if(numPersons<data.length) setNumPersons(numPersons + 1)
    else{
      setNumPersons(0)
      setPersons([])
    } 
  }
    return (
        <div className='App'>
          <h1>Technical Test</h1>
          <h2>Part 1</h2>
          <ListPersons data={ data }/>
          <h2>Part 2</h2>
          <button onClick= {addPersons}>New Person</button>
          <ListPersons data={ persons }/>
        </div>
    )
}

export default App