import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let [city, setCity]  = useState('');
    let [err, setErr] = useState(false)
    let APT_URL = "https://api.openweathermap.org/data/2.5/weather"
    let API_KEY = "32a3a0b2b3e2b8af69c75c0983d6b5de" 

    async function getWeatherInfo(){
        try{
            let res = await fetch(`${APT_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonRes = await res.json()
            let result = {
                city: city,
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description
            }
            return result;
        }catch(err){
            throw err;
        }
    }

    function changeValue(e){
        setCity(e.target.value)
    }

    async function handleSubmit(e){
        try{
            e.preventDefault();
        let inofrmation = await getWeatherInfo();
        updateInfo(inofrmation)
        setCity("");
        }catch(err){
            setErr(true)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} className='searchBox' style={{marginBottom: "15px"}}>
            <TextField id="outlined-basic" label="Location" variant="outlined" size='small' required value={city} onChange={changeValue}/>
            <br />
            <br />
            <Button variant='contained' type='submit'>Search</Button>
            {err && <p style={{color: "red"}}>No such place found!</p>}
        </form>, 
        </>
    )
}