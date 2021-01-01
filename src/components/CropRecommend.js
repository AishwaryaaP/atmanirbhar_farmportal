import React from 'react';
import WeatherCard from './Weather2.js';
import CitySelector from './City';
import UseFetch from '../hooks/UseFetch';
import WeatherList from './WeatherList';
import {CROPS} from './CropList';
import {Card,CardTitle} from 'reactstrap';

const Crop=()=>{

const {data, error, isLoading, setUrl,city} = UseFetch();
   const getContent = ({city}) => {
    if(error) return <div className="container"><h2>Error when fetching: {error}</h2></div>
    if(!data && isLoading) return <div className="container"><h3>LOADING...</h3></div>
    if(!data) return null;
    return <WeatherList weathers={data.list.filter(reading => reading.dt_txt.includes("6:00:00"))} />
  };

  return(
  	<>
   
  <CitySelector/>
  <div >{city}...</div>
    {getContent({city})}
  }
  </>
    );
  }

export default Crop;
