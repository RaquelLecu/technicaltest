import ListPersons from "../ListPersons"
import { data } from "../../resources/data"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";

function App () {
  //part2
  const [numPersons, setNumPersons] = useState(0)
  const [persons, setPersons] = useState([]);
  //part3
  const baseURL = "https://randomuser.me/api/?results=5";
  const [post, setPost] = useState(null);
  const [numPersonsURL, setNumPersonsURL] = useState(0)
  const [personsURL, setPersonsURL] = useState([]);
  //function part2
  const addPersons= () => {
    setPersons([...persons, data[numPersons]])
    if(numPersons<data.length) setNumPersons(numPersons + 1)
    else{
      setNumPersons(0)
      setPersons([])
    } 
  }
  //functions part3
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  const addPersonsURL= () => {
    console.log(post.results)
    setPersonsURL([...personsURL, post.results[numPersonsURL]])
    if(numPersonsURL<post.results.length) setNumPersonsURL(numPersonsURL + 1)
    else{
      setNumPersonsURL(0)
      setPersonsURL([])
    } 
  }
  return (
    <div className='App'>
      <h1>Technical Test</h1>
      <h2>Part 1</h2>
      <ListPersons data={ data }/>
      <h2>Part 2</h2>
      <button onClick= { addPersons }>New Person</button>
      <ListPersons data={ persons }/>
      <h2>Part 3</h2>
      <button onClick= { addPersonsURL }>New Person</button>
      {!post ? (<p>oops...something went wrong</p>) 
      : (<ListPersons data={ personsURL }/>)
      }
      
    </div>
  )
}

export default App