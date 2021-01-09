import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home" style={{color:'blue'}}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active style={{color:'red'}}>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                    <p><strong>"Agriculture is the backbone of the Indian Economy"</strong>- said Mahatma Gandhi, six decades ago. <br/>Even today, the situation is still the same, with almost the entire economy being sustained by agriculture, which is the mainstay of the villages. It contributes 16% of the overall GDP and accounts for employment of approximately 52% of the Indian population. Rapid growth in agriculture is essential not only for self-reliance but also to earn valuable foreign exchange.<br/><br/>

Indian farmers are second to none in production and productivity despite of the fact that millions are marginal and small farmers. They adopt improved agriculture technology as efficiently as farmers in developed countries. It is felt that with provision of timely and adequate inputs such as fertilizers, seeds, pesticides and by making available affordable agricultural credit /crop insurance, Indian farmers are going to ensure food and nutritional security to the Nation.It is envisaged to make available relevant information and services to the farming community and private sector through the use of information and communication technologies, to supplement the existing delivery channels provided for by the department. Farmers’ Portal is an endeavour in this direction to create one stop shop for meeting all informational needs relating to Agriculture, Animal Husbandry and Fisheries sectors production, sale/storage of an Indian farmer.<br/><br/> With this Indian Farmer will not be required to sift through maze of websites created for specific purposes.Once in the KrishiSeva Portal, a farmer will be able to get all relevant information on specific subjects around his village/block /district or state. This information will be delivered in the form of text, SMS, email and audio/video in the language he or she understands. These levels can be easily reached through the Map of India placed on the Home page. Farmers will also be able to ask specific queries as well as give valuable feedback through the feedback form.   
                
<br/><br/><strong>Our Portal is the unique portal ,that helps farmers by recommending the crop taking in account all the factors that affect the growth of the crop.</strong>
                 </p>
                </div> 

            </div>
            
        </div>
    );
}

export default About;    
