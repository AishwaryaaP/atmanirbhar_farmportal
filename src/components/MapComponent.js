import {Map,GoogleApiWrapper,Marker} from 'google-maps-react';
import React,{Component } from 'react';
const st={
	width:"50%", height:"500px" 
}
class MapContainer extends Component
{
constructor(props) {
    super(props);

    // Filling our parent container
    this.state = {
      mapStyles: {
        width: "100%",
        height: "100%",
      }
    };
  }
	render()
	{
		return(
			<>
			<h3 className="center">Select Your Region </h3>
            
            <div style={{ position: 'relative', width: '50vw', height: '100vh' }}className="center">
			<Map 
          google={this.props.google}
          zoom={6}
          style={this.state.mapStyles}
          initialCenter={{ lat: 18.5204, lng:73.8567}} 
        	/>
        <Marker position={{ lat:18.5204, lng: 73.8567}} />
        </div>
        </>
		);
	}
}
export default GoogleApiWrapper({
  apiKey:'AIzaSyCvZWIc8fJkOOrocjOi61OkwoyH8q2P69E' 
})(MapContainer); 