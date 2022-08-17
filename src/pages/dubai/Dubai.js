import { useEffect, useState } from 'react';
import Daily from '../../components/daily/Daily';
import Hourly from '../../components/hourly/Hourly';
import Main from '../../components/main/Main'


function Dubai(cityName) {
    const API_KEY = "079f12524e5a8d17ad0b0a1ffa340869"
    const CITY_NAME = cityName.cityName

    const [days, setDays] = useState([])

    
    useEffect(() => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&lang=ru&units=metric&APPID=${API_KEY}`
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
        // const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        setDays(data)
        })
    },[])


    // console.log(minTemp);



    return (
        <>
        {days.length === 0 ? null : <Main days={days}/>}
        {days.length === 0 ? null : <Hourly days={days.list}/>}
        {days.length === 0 ? null : <Daily days={days.list} />}
        </>
    );
    }

export default Dubai;
