import React,{Component} from "react";
import {Breadcrumb,BreadcrumbItem,Button,Form,FormFeedback,FormGroup,Label,Input,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Firebase from 'firebase';
import firebaseConfig from '../firebase'
class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            feedback:'',
            touched:{
                firstname:false,
                lastname:false,
                telnum:false,
                email:false
            }

        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleBlur=(field)=>(evt)=>{
        this.setState({
            touched:{...this.state.touched,[field]:true}
        });
    }
    handleInputChange(event){
     const target=event.target;
     const value=target.type==='checkbox'?target.checked:target.value;
     const name=target.name;
     this.setState({
        [name]:value
     });   
    }
    
    handleSubmit(e){
        
        e.preventDefault();
        const db = Firebase.database().ref();
        var refr=Firebase.database().ref("/Feedback");
        refr.push({
            Firstname:this.state.firstname,
            Lastname:this.state.lastname,
            Telnum:this.state.telnum,
            Email:this.state.email,
            Feedback:this.state.feedback,
            Agree:this.state.agree,
            ContactType:this.state.contactType,
        })
        
        window .alert("Data Saved successfully!!!");
    }
    validate(firstname,lastname,telnum,email){
        const errors={
            firstname:'',
            lastname:'',
            telnum:'',
            email:''

        }
        if(this.state.touched.firstname && firstname.length<3)
                errors.firstname="FirstName should be >=3 characters";
        else if(this.state.touched.firstname && firstname.length>10)
                errors.firstname="FirstName should be <=10 characters";

            if(this.state.touched.lastname && lastname.length<3)
                errors.lastname="FirstName should be >=3 characters";
        else if(this.state.touched.lastname && lastname.length>10)
                errors.lastname="FirstName should be <=10 characters";

            const reg=/^\d+$/;
        if(this.state.touched.telnum && !reg.test(telnum))
                errors.telnum="Tel. Num should contain only numbers";
            if(this.state.touched.email &&email.split('').filter(x=>x==='@').length!==1)
                errors.email="Email should contain a @";
    
            return errors;
    }   

    render(){
        const errors=this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);
        const styles= {
    color: 'black',
};
    return(
        <div className="container">
        <div className="row">
        	  <Breadcrumb>
                
                <BreadcrumbItem><Link to="/home" style={{color:'blue'}}>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active style={{color:'red'}}>ContactUs</BreadcrumbItem>
               </Breadcrumb>

            
           </div>
            
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1" >
                        <h5>Our Address</h5>
                        <address style={styles}>
                      666,Upper IndiraNagar,<br />
                      Bibwewadi ,Pune<br />
                      Maharashtra<br />
                      <i className="fa fa-phone fa-lg"></i>: +91 9834360258<br />
                      <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                      <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:krishiseva@agri.net">
                            krishiseva@agri.net</a>
                    </address>
                </div>
            
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit} action="/submit"method="post">

                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                            <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname}
                                         valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}onChange={this.handleInputChange}/> 
                            <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                            <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname}
                            valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')} onChange={this.handleInputChange}/>  
                            <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number" value={this.state.telnum}
                                valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                             onChange={this.handleInputChange}/> 
                            <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                            <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email}
                            valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                            onChange={this.handleInputChange}/>     
                            <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                        <Col md={{size:6,offset:2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="agree"
                                    checked={this.state.agree} onChange={this.handleInputChange}/>{' '}
                                    <strong>May we contact you?</strong>

                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{size:2,offset:2}}>
                            <Input type="select" name="contactType" value={this.state.contactType}onChange={this.handleInputChange}>
                            <option>Tel.</option>
                            <option>Email</option>
                            </Input>
                        </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                            <Col md={10}>
                            <Input type="textarea" id="feedback" name="feedback" rows="12" value={this.state.feedback} onChange={this.handleInputChange}>
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <Col md={{size:10,offset:2}}>
                        <Button type="submit" color="primary">Send Feedback
                        </Button>
                        </Col>
                        </FormGroup>
                    </Form>
                </div>

                </div>
            </div>
    );
    }
}

export default Contact;