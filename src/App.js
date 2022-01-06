import React, {useState, useEffect} from "react";
import axios from 'axios'
import DisplayContent from "./components/DisplayContent";

function App() {
  const [countries , setCountries] = useState([])
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

 
    const re = new RegExp(filter, 'i')
    const filtredCountries = countries.filter(c => c.name.common.match(re))
  
  
  return(
    <>
    <div>
      filter : <input value={filter} onChange={handleChangeFilter}></input>
    </div>
    <div>
      {
        filtredCountries.length===0?<p>no countries Yet!</p>:<DisplayContent setFilter={setFilter} filtredCountries={filtredCountries}></DisplayContent>
      }
    </div>
    </>
   
  )

}

export default App;
