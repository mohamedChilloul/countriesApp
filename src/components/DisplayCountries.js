import React from "react";
//
import DisplayCountry from "../components/DisplayCountry";

const DisplayCountries = ({filtredCountries})=>{
    if (filtredCountries.length === 1)
    return(
        <div>
            <DisplayCountry country={filtredCountries[0]}></DisplayCountry>
        </div>
    )
    if (filtredCountries.length <= 10)
    return(
        <div>
            Less then 10 countries to display
            <hr>
            </hr>
            {filtredCountries.map((c,i) =><li  key={i}>{c.name.common}</li>)}
        </div>
    )
    return(
        <div>
            More than 10 countries matched , you have to specify your search key word :)
        </div>
    )
}

export default DisplayCountries;