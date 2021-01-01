import React ,{Component} from 'react';
import {Link}from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import CarouselComponent from './CarousalComp';
import About from './AboutUs';
import Policy from './Policies';
import AgriNews from './News';
import {POLICIES} from './PolicyList';
import WeekContainer from './Weather'

function RenderCrop({onClick})
{
  return(

    <div className="container border">
      <div className="center"style={{"font-size":20}}><strong> Select Your State </strong></div>
      <Link to="/Week"><img src={process.env.PUBLIC_URL+'/images/india.jpg'} className="center"width="auto" height="600px"alt="india map"/></Link>
    </div> 

    );
}
class Main extends Component{
constructor(props){
    super(props);
    this.state={
      policy:POLICIES,
  
      }

  }

 render(){

 const HomePage=() =>{
  
  return (
    <>
    <CarouselComponent/>
    <RenderCrop onClick/>
    </>
    );
 }
  return (

    <div >
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/contactus" component={Contact}/>
        <Route exact path="/aboutus" component={About }/>
        <Route exact path="/policies" component={()=><Policy policy={this.state.policy}/>}/>
        <Route exact path="/news" component={AgriNews}/>
        <Route exact path="/Week" component={WeekContainer}/>
        <Redirect to="/home"/>      
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
