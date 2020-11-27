import React ,{Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import CarouselComponent from './CarousalComp';
import MapContainer from './MapComponent';
import About from './AboutUs';
import Map from './MapComponent';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

class Main extends Component{

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
        <Route exact path="/aboutus" component={About }/>}/>
        <Redirect to="/home"/>      
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
