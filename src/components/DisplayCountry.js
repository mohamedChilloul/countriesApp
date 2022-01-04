import React from "react";

const DisplayCountry =({country})=>{
    const languages =[] 
    for (var p in country.languages)
        languages.push(
            {
                lang:p,
                content:country.languages[p]
            }
        )
    return(
        <div>
            <hr></hr>
            <h2>{country.name.common}</h2>
            <p>Capital is {country.capital}</p>
            <p>Population {country.population}</p>
            <h2>Languagues </h2>
            <ul>
                {
                    languages.map((l,i)=><li key={i}>{l.content}</li>)
                }
            </ul>
            <div>
                <img src={country.flags.png} alt={country.name.common}></img>
            </div>
            <hr></hr>
        </div>
    )
}

export default DisplayCountry;