import React, {useState, useEffect} from "react";
import axios from 'axios'
import DisplayCountries from "./components/DisplayCountries";

function App() {
  const [countries ,  setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const fetchCountries = ()=>{
    axios.get('http://localhost:3001/countries').then(r=>{
      console.log(r.data.length,' countries goted !')
      setCountries(r.data)
    })
  }
  useEffect(fetchCountries,[])
  const handleChangeFilter = (event) =>{
    setFilter(event.target.value)
  }
  const filtredList = countries.filter(c =>{
    return c.name.common.toLocaleLowerCase().match(filter.toLocaleLowerCase())
  })
  console.log(filtredList.length, ' matched !')
  return (
    <div>
      <div>
        search for : <input value={filter} onChange={handleChangeFilter}></input>
      </div>
      <DisplayCountries filtredCountries={filtredList}></DisplayCountries>
    </div>
  );
}

export default App;
