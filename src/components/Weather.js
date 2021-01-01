import React from 'react';
import DayCard from './Card.js';
import DegreeToggle from './DegreeToggle';
import {Row,Col,Button,Input,Label,FormGroup} from 'reactstrap';
import {CROPS} from './CropList';
import CropP from './Croppredict';
import {Card} from 'reactstrap';
class WeekContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    fullData: [],
    dailyData: [],
    degreeType:"Fahrenheit",
    State:"Maharashtra",
    city:'Pune'
  }
   this.handleInputChange=this.handleInputChange.bind(this);
     this.handleChange=this.handleChange.bind(this);
  }
	handleInputChange(event){
     const target=event.target;
     const value=target.value;
     const name=target.name;
     console.log(name);
     console.log(value);
     this.setState({
        [name]:value
     });   
    }
    handleChange(event) {
      console.log(event.target.value)
      const name="State";
      console.log(name);
      const value=event.target.value;
    this.setState({[name]:value});
    console.log(this.state.State)

  }
   updateForecastDegree = event => {
    this.setState({
      degreeType: event.target.value
    }, () => console.log(this.state))
  }
	
  formatDayCards = (city) => {
   return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} degreeType={this.state.degreeType} city={this.state.city}/>)
   // return <DayCard data={this.state.dailyData} city={city}/>
    
  }

Recommend =(st)=>{  
  return CROPS.filter((c)=>{return c.state===st}).map((s)=><CropP s={s}/>)
  }
  render() {
    const onSearch = (city) => {
      console.log(city);
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?q=city&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API}`
  fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("6:00:00"))
      this.setState({
        fullData: data.list,
        dailyData: dailyData
      }, () => console.log(this.state))
    })

  }

   
   var x=this.state.State;
    return (
     
      <div className="container">
      <Row style={{'margin':15}}>
        <Col md={4}>
        <Label htmlfor="State:"><strong> State</strong>

          <select style={{'height':35}} onChange={this.handleChange}>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chattisgarh">Chattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu & Kashmir">Jammu & Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra" selected>Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Orissa">Orissa</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Andaman & Nicobar Islands">Andaman & Nicobar Islands</option>
          <option value="Dadra & Nagar Haveli">Dadra & Nagar Haveli</option>
          <option value="Daman & Diu">Daman & Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Puducherry">Puducherry</option>

          </select>
        </Label>
        </Col>
    
        <span style={{'margin':5}} ><strong> City</strong></span>
          <Col xs={4}>
        <Input type="text" id="city" name="city" value={this.state.city}
                                         onChange={this.handleInputChange}/>
          </Col>
          <Col md={2}>
            <Button color="primary" onClick={() => onSearch(x)}> Check Weather</Button>
          </Col>  
          </Row>
        <Row className="center" ><h3>Recommending Crops for {x}</h3></Row>
        <br/>
         <div className="row justify-content-center">

          {this.Recommend(x)}
        </div>
        
        
        <div className="justify-content-center">
            <h1 className="center">5-Day Forecast</h1>
            <h5 className="display-5 text-muted center">{this.state.city}</h5>
        </div>
        
      <div> <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
      </div>
      <div className="row justify-content-center">
        {this.formatDayCards(x)}
        </div>
     
      </div>
    )
  }
}
export default WeekContainer;