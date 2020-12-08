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
import WeatherCard from './Weather2.js';
import CitySelector from './City';
import UseFetch from '../hooks/UseFetch';
import WeatherList from './WeatherList';
class Main extends Component{
constructor(props){
    super(props);
    this.state={
      policy:POLICIES,
      }

  }

 render(){

 const HomePage=() =>{
  const {data, error, isLoading, setUrl} = UseFetch();
   const getContent = () => {
    if(error) return <div className="container"><h2>Error when fetching: {error}</h2></div>
    if(!data && isLoading) return <div className="container"><h3>LOADING...</h3></div>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };
  return (
    <>
    <CarouselComponent/>
    <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c04c1d8e05862af3d846deafcb7a4e4f`)} />
    {getContent()}
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
