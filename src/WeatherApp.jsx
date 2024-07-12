import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhubaneswar",
        feelsLike: 38,
        humidity: 81,
        temp: 31,
        tempMin: 31,
        tempMax: 31,
        weather: "Overcast clouds" 
    })

    let updateInfo = async (result) => {
        setWeatherInfo(result)
    }

    return (
        <>
        <h2>This is the weather app</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </>
    )
}