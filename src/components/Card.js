import React from 'react';
import{Card,CardTitle,CardBody} from 'reactstrap';
var moment = require('moment');

const DayCard = ({ reading, degreeType,city }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  const fahrenheit = Math.round(reading.main.temp)
  const celsius = Math.round((fahrenheit - 32) * 5/9)
  const icon=reading.weather[0].icon;

  return (
    <div className="col-md-4 content-justify-center ">
  
      <div className="card" style={{'margin-bottom':10}}>
        <h3 className="card-title center ">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted center ">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        <img className="center"
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        style={{'width':100,'height':100}}
      />
        <h2 className="center">{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
        <div className="card-body center">
          <p className="card-text content-justify-center ">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;