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
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Policies and Schemes</BreadcrumbItem>
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
			<li>Livestock insurance Scheme</li><a style={{color:'purple'}} href="https://vikaspedia.in/agriculture/agri-insurance/livestock-insurance">(https://vikaspedia.in/agriculture/agri-insurance/livestock-insurance)</a>
			</ul>
			</div>
			</>
			);

	}
}
