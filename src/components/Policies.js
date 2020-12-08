import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay,CardText,CardBody,CardTitle ,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


const Policy=(props)=>{
	
		const disp =props.policy.map((po)=>{
	return(
		<div key={po.id} className="col-12 col-md-5 m-1">
		<Card style={{'height':600,'width':470,'background-color':"#d0efff"}}>
		<CardTitle className="center">{po.title}</CardTitle>
		<CardBody>{po.des}
		<CardText  style={{color:'red','margin-left':10}}>Check for more details - <a style={{'color':'blue'}} target="_blank" href={po.url}>{po.url}</a><br/>YouTube Video-</CardText>
		
		<iframe  src={po.src} frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
		</CardBody>
		</Card>
		</div>

		);
		});
		return(
			<>
			<div className="container">
				<div className="row">
				<Breadcrumb>
                    <BreadcrumbItem ><Link to="/home"  style={{color:'blue'}}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active style={{color:'red'}}>Policies and Schemes</BreadcrumbItem>
                </Breadcrumb>
				</div>
			<div className="row">
			{disp}
			</div>
			</div>
			</>
			);

	}

export default Policy;