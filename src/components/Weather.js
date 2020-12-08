import React from 'react';
import DayCard from './Card.js';
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component {
	state = {
    fullData: [],
    dailyData: [],
    degreeType:"Fahrenheit"
  }
   updateForecastDegree = event => {
    this.setState({
      degreeType: event.target.value
    }, () => console.log(this.state))
  }
	componentDidMount = () => {
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?q=Pune&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API}`
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
  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} degreeType={this.state.degreeType} />)
  }
  render() {
  	//const weatherurl=`http://api.openweathermap.org/data/2.5/forecast?q=Pune&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API}`
    return (
      <div className="container">
       <h1>5-Day Forecast</h1>
      <h5 className="display-5 text-muted">Pune</h5>
      <div> <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree}/>
      </div>
      <div className="row justify-content-center">
        {this.formatDayCards()}
        </div>
      </div>
    )
  }
}

export default WeekContainer;