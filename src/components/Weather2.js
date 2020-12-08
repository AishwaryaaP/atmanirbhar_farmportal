import React from 'react';
import {Card,Col,Row} from 'react-bootstrap';
var moment = require('moment');
const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
  // create a date object with Date class constructor

  let newDate = new Date(dt);
 
  const temp1= Math.round((temp_max-32)*(5/9));
  const temp2=Math.round((temp_min-32)*(5/9));
  return (
    <Card style={{'height':'auto','width':300,'background-color':"#ffffe3"}}>
    <Row className="center">
    <Col> <Card.Title>{main}</Card.Title></Col>
    <Col> 
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        style={{'width':100,'height':100}}
      />
      </Col>
      </Row>
      <Card.Body>
       
       
        <p className=" center ">{moment(newDate).format('MMMM Do, h:mm a')}</p>
        
        <p className="center">Min: {temp2} °C</p>
        
        <p className="center">Max: {temp1} °C</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;