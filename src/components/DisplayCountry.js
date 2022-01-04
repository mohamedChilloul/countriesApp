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
            <h2>{country.name.common}</h2>
            <p>Capital is {country.capital}</p>
            <p>Population {country.population}</p>
            <h2>Languagues </h2>
            <ul>
                {
                    languages.map((l,i)=><li key={i}>{l.lang} : {l.content}</li>)
                }
            </ul>
            <div>
                <img src={country.flags.png} alt={country.name.common}></img>
            </div>
        </div>
    )
}

export default DisplayCountry;