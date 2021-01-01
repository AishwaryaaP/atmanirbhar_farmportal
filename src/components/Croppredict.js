import {CROPS} from './CropList';
import React ,{Component}from 'react';
import {Col,Card,CardTitle,CardBody,CardImg,Row} from 'reactstrap';

const CropP=({s})=>{

	return(
		<>
		
		<div className="col-md-4">

		<Card style={{'margin-bottom':10}}>
		<CardTitle className="center">{s.crop}</CardTitle>
		<CardBody>	
		<CardImg width="100%" object src={process.env.PUBLIC_URL+ s.img} style={{'height':250}}alt={s.crop} />
		<div className="center"><strong>Expected Profit : {s.profit}</strong></div>
		</CardBody>
		
		</Card>
		</div>
	
		</>
		);
}

export default CropP;