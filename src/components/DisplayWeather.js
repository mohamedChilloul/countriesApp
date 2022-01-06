import React from "react";


const DisplayWeather = ({weather, capital}) =>{
    return(
        <div>
            <h2>the weather in {capital}</h2>
            <p>{weather[0].main}</p>
            <p>{weather[0].description}</p> 
            <img src={`${weather[0].icon}.jpg`} alt="icon"></img>    
            {console.log(`${weather[0].icon}.icon`)}
        </div>
    )
}

export default DisplayWeather;