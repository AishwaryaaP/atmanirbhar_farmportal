import React from 'react';
var moment = require('moment');

const DayCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const fahrenheit = Math.round(reading.main.temp)
  const celsius = Math.round((fahrenheit - 32) * 5/9)

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

  return (
    <div className="col-sm-5 content-justify-center ">
      <div className="card" style={{'margin-bottom':10}}>
        <h3 className="card-title center ">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted center ">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <i className="owf owf-${reading.weather[0].id"></i>
        <h2 className="center" >{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
        <div className="card-body center">
          <p className="card-text content-justify-center ">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;