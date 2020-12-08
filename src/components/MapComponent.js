import React ,{Component} from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import {Form,FormGroup,Label,Input,Col,Row,Button} from 'reactstrap';
import Autocomplete from 'react-google-autocomplete';
import WeekContainer from './Weather';
import Policy from './Policies';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);
Geocode.enableDebug();
function a(){
  return(
    <div>hiii</div>
    );
}
class Map extends Component{
    constructor( props ){
  super( props );
  this.state = {
   address: '',
   city: '',
   area: '',
   state: '',
   mapPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
   },
   markerPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
    }
  }
  this.handleInputChange=this.handleInputChange.bind(this);
 this.handleSubmit=this.handleSubmit.bind(this);
 }
 /**
  * Get the current address from the default map position and set those values in the state
  */

 componentDidMount() {
  Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
   response => {
    const address = response.results[0].formatted_address,
     addressArray =  response.results[0].address_components,
     city = this.getCity( addressArray ),
     area = this.getArea( addressArray ),
     state = this.getState( addressArray );
  
    console.log( 'city', city, area, state );
  
    this.setState( {
     address: ( address ) ? address : '',
     area: ( area ) ? area : '',
     city: ( city ) ? city : '',
     state: ( state ) ? state : '',

    } )
   },
   error => {
    console.error(error);
   }
  );

 };
 /**
  * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
  *
  * @param nextProps
  * @param nextState
  * @return {boolean}
  */
 shouldComponentUpdate( nextProps, nextState ){
  if (
   this.state.markerPosition.lat !== this.props.center.lat ||
   this.state.address !== nextState.address ||
   this.state.city !== nextState.city ||
   this.state.area !== nextState.area ||
   this.state.state !== nextState.state
  ) {
   return true
  } else if ( this.props.center.lat === nextProps.center.lat ){
   return false
  }
 }
 /**
  * Get the city and set the city input value to the one selected
  *
  * @param addressArray
  * @return {string}
  */
 getCity = ( addressArray ) => {
  let city = '';
  for( let i = 0; i < addressArray.length; i++ ) {
   if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
    city = addressArray[ i ].long_name;
    return city;
   }
  }
 };

 /**
  * Get the area and set the area input value to the one selected
  *
  * @param addressArray
  * @return {string}
  */
 getArea = ( addressArray ) => {
  let area = '';
  for( let i = 0; i < addressArray.length; i++ ) {
   if ( addressArray[ i ].types[0]  ) {
    for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
     if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
      area = addressArray[ i ].long_name;
      return area;
     }
    }
   }
  }
 };

 /**
  * Get the address and set the address input value to the one selected
  *
  * @param addressArray
  * @return {string}
  */
 getState = ( addressArray ) => {
  let state = '';
  for( let i = 0; i < addressArray.length; i++ ) {
   for( let i = 0; i < addressArray.length; i++ ) {
    if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
     state = addressArray[ i ].long_name;
     return state;
    }
   }
  }
 };

 /**
  * And function for city,state and address input
  * @param event
  */
 
 /**
  * This Event triggers when the marker window is closed
  *
  * @param event
  */
 onInfoWindowClose = ( event ) => {

 };
onMarkerDragEnd = ( event ) => {
    let newLat = event.latLng.lat(),
        newLng = event.latLng.lng();
    
    Geocode.fromLatLng( newLat , newLng ).then(
      response => {
        const address = response.results[0].formatted_address,
              addressArray =  response.results[0].address_components,
              city = this.getCity( addressArray ),
              area = this.getArea( addressArray ),
              state = this.getState( addressArray );
        this.setState( {
          address: ( address ) ? address : '',
          area: ( area ) ? area : '',
          city: ( city ) ? city : '',
          state: ( state ) ? state : '',
          markerPosition: {
            lat: newLat,
            lng: newLng
            
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
      
          },
        } );
        
      },

      error => {
        console.error(error);
        window.alert(error);
      }
    );

  };
/**
   * When the user types an address in the search box
   * @param place
   */
  onPlaceSelected = ( place ) => {
    console.log( 'plc', place );
    const address = place.formatted_address,
          addressArray =  place.address_components,
          city = this.getCity( addressArray ),
          area = this.getArea( addressArray ),
          state = this.getState( addressArray ),
          latValue = place.geometry.location.lat(),
          lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      address: ( address ) ? address : '',
      area: ( area ) ? area : '',
      city: ( city ) ? city : '',
      state: ( state ) ? state : '',
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      },
    })
  };
  handleInputChange(event){
     const target=event.target;
     const value=target.type==='checkbox'?target.checked:target.value;
     const name=target.name;
     this.setState({
        [name]:value
     });   
    }


  handleSubmit(event)
  {
    a();
  }
 render(){
  
   const AsyncMap = withScriptjs(
   withGoogleMap(
    props => (
     <GoogleMap google={this.props.google}
      defaultZoom={this.props.zoom}
      defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
     >
     {/* For Auto complete Search Box */}
      <Autocomplete
       style={{
        width: '100%',
        height: '40px',
        paddingLeft: '16px',
        marginTop: '2px',
        marginBottom: '100px'
       }}
       onPlaceSelected={ this.onPlaceSelected }
       types={['(regions)']}
      />
      {/*Marker*/}
      <Marker google={this.props.google}
       name={'Dolores park'}
          draggable={true}
          onDragEnd={ this.onMarkerDragEnd }
             position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
      />
      <Marker />
      {/* InfoWindow on top of marker */}
      <InfoWindow
       //onClose={this.onInfoWindowClose}
       position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
      >
       <div>
        <span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
       </div>
      </InfoWindow>
     </GoogleMap>

     )
   )
  );

  let map;
  const apikey= {
  "s": process.env.REACT_APP_API_KEY
};

const url="https://maps.googleapis.com/maps/api/js?&key=AIzaSyB445mQbS-Mv9N4pNyi03A5tAqEsXeDXGg&libraries=places"
  if( this.props.center.lat !== undefined ) {
   map = <div>
     <div className="container col-12 col-sm-9">

    
      <FormGroup row  >
      <Col md={{size:12,offset:2}}style={{color:'blue','font-size':'25px'}}><strong>Enter Your State and District</strong></Col>
      </FormGroup>
  
      <FormGroup row onSubmit={this.handleSubmit}>
       <Label htmlFor="" md={{size:1,offset:2}}><strong>City</strong></Label>
        <Col md={{size:3,offset:-6}}>
         <Input type="text" id="city" name="city" placeholder="City Name" onChange={ this.handleInputChange }  value={ this.state.city }/>
        </Col>
       <Label htmlFor="" md={{size:1,offset:-2}}><strong>Area</strong></Label>
       <Col md={{size:3,offset:-6}}>
       <Input type="text" name="area" id="area" onChange={ this.handleInputChange }  placeholder="Area" value={ this.state.area }/>
        </Col>
      </FormGroup>
      <FormGroup row>
       <Label htmlFor=""md={{size:1,offset:2}}><strong>State</strong></Label>
       <Col md={{size:3,offset:-6}}>
       <Input type="text" name="state" id="state" placeholder="State Name" onChange={ this.handleInputChange }  value={ this.state.state }/>
       </Col>
      
       <Label htmlFor="" md={{size:1,offset:-2}}><strong>Address</strong></Label>
        <Col md={{size:3,offset:-6}}>
       <Input type="text" name="address" id="address" onChange={ this.handleInputChange } placeholder="Address" value={ this.state.address }/>
        </Col>  
         <Col md={{size:10,offset:2}}>
                        <Button type="submit" color="primary">Proceed
                        </Button>
                        </Col>
      </FormGroup>
     </div>

     <AsyncMap
      googleMapURL={url}
      style={{'background-color':'green'}}
      loadingElement={
       <div className="center" style={{position: 'relative', width: '50vw', height: '100vh'}} />
      }
      containerElement={
       <div className="center"style={{ position: 'relative', width: '50vw', height: '100vh'}} />
      }
      mapElement={
       <div className="center" style={{ position: 'relative', width: '50vw', height: '100vh' }} />
      }
     />
    </div>
    } else {
   map = < div className="center" style={{position: 'relative', width: '50vw', height: '100vh'}} />
  }
  return( map )
  
 }
}
export default Map;
