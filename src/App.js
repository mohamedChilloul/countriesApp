import React, {useState, useEffect} from "react";
import axios from 'axios'
import DisplayCountry from "./components/DisplayCountry";

function App() {
  const [countries ,  setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [country, setCountry] = useState(0)
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
  const listLength = filtredList.length

  const handleShow = (e)=>{
    setCountry(e.target.value)
  }
    return (
    <div>
      <div>
        search for : <input value={filter} onChange={handleChangeFilter}></input>
      </div>
      <div>
        {
          listLength ===1 ?
          <DisplayCountry country={filtredList[0]}></DisplayCountry> 
                          :
          listLength <=10 ? 
            filtredList.map(
              (c,i) =><li  key={i}>
                  {c.name.common} <button value={i} onClick={handleShow}>show</button>
                      </li>
              )
                          :
          <p>more then 10 countries matched for -- {filter} -- keyWord !</p>
          
        }
      </div>
      <div>
        {
          listLength ===0 ?
          <p>No country to display</p>
                          :
          <DisplayCountry country={filtredList[country]}></DisplayCountry>

        }
      </div>
    </div>
  );
}

export default App;
