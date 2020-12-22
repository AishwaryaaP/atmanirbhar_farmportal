import React from 'react';
import WeatherCard from './Weather2.js';
import CitySelector from './City';
import UseFetch from '../hooks/UseFetch';
import WeatherList from './WeatherList';

const Crop=()=>{

const {data, error, isLoading, setUrl} = UseFetch();
   const getContent = () => {
    if(error) return <div className="container"><h2>Error when fetching: {error}</h2></div>
    if(!data && isLoading) return <div className="container"><h3>LOADING...</h3></div>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return(
  	<>
  <CitySelector onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=c04c1d8e05862af3d846deafcb7a4e4f`)} />
    {getContent()}
    </>
    );

 }

export default Crop;
