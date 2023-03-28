import React from 'react'

const WeatherCard = ({get}) => {
    const  {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset

     }=get;
     let sec =sunset;
     let data = new Date(sec*1000)
     let timeStr= `${data.getHours()}:${data.getMinutes()}`
  return (
    <>
      <div className='widget'>
            <div className='icon'> ⛅</div>
            <div className="wheaterInfo">
                <div className='temp'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='wheaterCondition'>{weatherMood}</div>
                    <div style={{fontSize:'20px'}} className="place">{name},{country}</div>
                </div>

            </div>
            <div className="date">{new Date().toLocaleString()}</div>
            

            <div className="extra">
                <div className='temp-minmaxInfo'>
                    <div className="two-sided-section">
                        <p><i>🌅</i></p>
                        <p className="extraInfo">{timeStr}  <br />sunset </p>

                    </div>
                </div>
                <div className='temp-minmaxInfo'>
                    <div className="two-sided-section">
                        <p><i style={{fontSize:"30px"}}>🌧</i></p>
                        <p className="extraInfo">{humidity}  <br />rainy </p>

                    </div>
                </div>
                <div className='temp-minmaxInfo'>
                    <div className="two-sided-section">
                        <p><i>🚅</i></p>
                        <p className="extraInfo">{speed}  <br />Speed </p>

                    </div>
                </div>
            </div>
            
            </div>
    </>
  )
}

export default WeatherCard