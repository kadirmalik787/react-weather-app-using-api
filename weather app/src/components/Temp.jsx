import React, { useEffect, useState } from 'react'
// api.openweathermap.org/data/2.5/weather?q=pune&appid=7ce9978b0d99ad827c6180480ad1ae6b
import './Temp.css'
import WeatherCard from './WeatherCart'
const Temp = () => {
    const [change,setChange]=useState('sitarganj')
            const [get,setGet]=useState({});



    const getWeater= async()=>{

        try {
           let url = `https://api.openweathermap.org/data/2.5/weather?q=${change}&units=metric&appid=59eea87ae568c085996039c042a6a369
           `;
         const res = await fetch(url);
         const data = await res.json();
         const {temp,humidity,pressure}= data.main;
         const {main:weatherMood}= data.weather[0];
         const {name}= data;
         const {speed}= data.wind;
         const {country,sunset}= data.sys;

         const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weatherMood,
            name,
            speed,
            country,
            sunset

         }
         setGet(myNewWeatherInfo)

        } catch (error) {
            console.log('error')
            
        }
     
    }

    useEffect(()=>{
      getWeater()
    },[])
  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type='search' value={change} onChange={(e)=>setChange(e.target.value)}  placeholder='Search...' autoFocus />
            <button type='button' onClick={getWeater}>Search</button>



        </div>
      
           
       <WeatherCard get={get}/>
    </div>
   
    </>
  )
}

export default Temp