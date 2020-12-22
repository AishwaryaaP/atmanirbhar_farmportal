import React, {useState} from 'react';
import {Row, Col,Card,Modal, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
      <div  className="container">
        <Card>
        <Row style={{'margin':15}}>
    
        <span> District</span>
          <Col xs={4}>
            <FormControl
              placeholder="Enter District"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
       
          <Col>
            <Button style={{'margin-right':15}} >Recommend Crop</Button>
            <Button onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
        </Card>
        </div>
      </>
          );
  };

export default CitySelector;