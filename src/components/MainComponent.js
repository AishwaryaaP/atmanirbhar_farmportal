import React ,{Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import CarouselComponent from './CarousalComp';
import MapContainer from './MapComponent';
import About from './AboutUs';
import Map from './MapComponent';
import Policy from './Policies';
import AgriNews from './News'
import {POLICIES} from './PolicyList';
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
    <Map
    google={this.props.google}
    center={{lat:18.5204,lng:73.8567}}
    height='450px'
    zoom={6} >
      </Map>     
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
       
        <Redirect to="/home"/>      
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
