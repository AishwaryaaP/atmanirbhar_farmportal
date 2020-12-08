import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
      <div  className="container">
        <Row>
          <Col>
            <h2>Search your city</h2>
          </Col>
        </Row>
        <Row style={{'margin':15}}>
          <Col xs={4}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
       
          <Col>
      
            <Button onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
        </div>
      </>
          );
  };

export default CitySelector;