import React ,{Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
import CarouselComponent from './CarousalComp';
import About from './AboutUs';
import {Row,Col} from 'reactstrap';
class Main extends Component{

 render(){

 const HomePage=() =>{
  return (
    <div>
    <CarouselComponent />
    </div>
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
