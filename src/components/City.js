import React, {useState} from 'react';
import {Row, Col,Card,Modal, FormControl, Button} from 'react-bootstrap';
import {CardTitle} from 'reactstrap';
import {Switch,Route,Redirect} from 'react-router-dom';
import CropP from './Croppredict';
import {Link}from 'react-router-dom';

const CitySelector = ({onSearch}) => {
   
    const [city,setCity]=useState('');
  
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
  
            <Button onClick={() => onSearch(city)}> Recommend Crop</Button>
          </Col>  
        </Row>
      
        
        </Card>
        </div>
      </>
          );
  };

export default CitySelector;