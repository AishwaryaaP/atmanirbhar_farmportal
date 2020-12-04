import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Policy extends Component{

	render()
	{
		return(
			<>
			<div className="container">
				<div className="row">
				<Breadcrumb>
                    <BreadcrumbItem ><Link to="/home"  style={{color:'blue'}}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active style={{color:'red'}}>Policies and Schemes</BreadcrumbItem>
                </Breadcrumb>
				</div>
			<ul>
			<li>Pradhan Mantri Kisan Samman Nidhi Yojana</li><a style={{color:'purple'}} href="www.pmkisan.gov.in/">(www.pmkisan.gov.in/)</a>
			<li>Pradhan Mantri Kisan Maandhan yojana</li><a style={{color:'purple'}} href="pmkmy.gov.in/">(pmkmy.gov.in/)</a>
			<li>Pradhan Mantri Fasal Bima Yojana (PMFBY)</li><a style={{color:'purple'}} href=" pmfby.gov.in/"> (pmfby.gov.in/)</a>
			<li>Kisan Credit Card (KCC) scheme</li><a style={{color:'purple'}} href="https://www.pmkisan.gov.in/Documents/finalKCCCircular.pdf">(https://www.pmkisan.gov.in/Documents/finalKCCCircular.pdf)</a>
			<li>Paramparagat Krishi Vikas Yojana (PKVY)</li><a href="https://pgsindia-ncof.gov.in/pkvy/index.aspx"style={{color:'purple'}}>(https://pgsindia-ncof.gov.in/pkvy/index.aspx)</a>
			<li>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</li><a href="https://pmksy.gov.in/"style={{color:'purple'}}>(https://pmksy.gov.in/)</a>
			<li>National Agriculture Market (e-NAM)</li><a href="https://www.enam.gov.in/web/"style={{color:'purple'}}>(https://www.enam.gov.in/web/)</a>
			<li>Dairy Entrepreneurship Development Scheme</li><a style={{color:'purple'}}></a>
			<li> Soil Health Card Scheme</li><a style={{color:'purple'}}href=" soilhealth.dac.gov.in/">(soilhealth.dac.gov.in/)</a>
			<li>National Mission for Sustainable Agriculture (NMSA)</li>
			</ul>
			<div className="container border">
			<p style={{color:'orange','font-size':'20px'}}><strong>Video Links For the Government initiatives taken for Farmers</strong></p>
			<iframe  src="https://www.youtube.com/embed/5c8J9cv1oTI" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/xkKRb-xG8dc" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/AJRuvq06mhk" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/T7z3Zg4dPkI" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/x1gxLD2ZEnI" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/XvORzaanxt8" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/Twl4--EiYSM" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/QAwMPIyVkhI" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/qhj6stgAH9g" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			<iframe  src="https://www.youtube.com/embed/5jM7MDPEJrk" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
			</div>
			</div>
			</>
			);

	}
}
