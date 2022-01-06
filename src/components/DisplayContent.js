import React, { useEffect } from "react";
import DisplayCountry from "./DisplayCountry";


const DisplayContent =({filtredCountries, setFilter})=>{

    const handleClick = (e)=>{
        setFilter(e.target.value)
    }
    const listLength = filtredCountries.length
    if (listLength>10){
        return(
          <p>{listLength} countries matched for this keyWord !</p>
        )
      }else if(listLength>1 && listLength<= 10 || listLength===0){
        return(
          <ul>
            {
              filtredCountries.map(
                (c,i) =><li  key={i}>
                    {c.name.common} <button value={c.name.common} onClick={handleClick}>show</button>
                        </li>
                )
            }
          </ul>
        )
      }else{
        return(
          <DisplayCountry country={filtredCountries[0]}></DisplayCountry>
        )
      }
}
export default DisplayContent;