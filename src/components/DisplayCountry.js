import React, {useState, useEffect} from "react";
import axios from "axios";
import DisplayWeather from "./DisplayWeather";

const DisplayCountry =({country})=>{

    console.log(country)
    const apiKey = process.env.REACT_APP_API_KEY
    const capital = country.capital[0]
    const [weather, setWeather] = useState([])
    console.log(apiKey, capital)

    const fetchWeather = ()=>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}`).then(
            r=>{
                const data = r.data.weather
                console.log(data)
                setWeather(data)
            }
        )
    }

    useEffect(fetchWeather,[])
    
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
                <img src={country.flags.png} alt={country.name.common} ></img>
            </div>
            <hr></hr>
            {
                weather.length>0 ? <DisplayWeather weather={weather} capital={capital}></DisplayWeather>:
                <p>choose 1 country to see the weather</p>
            }
        </div>
    )
}

export default DisplayCountry;