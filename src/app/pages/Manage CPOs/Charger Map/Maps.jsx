// src/components/Map.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import MarkIcon from './IconM.png'
import axios from 'axios';
import { BASE_URL } from '../../../Config/BaseUrl';
const Maps = () => {
  const token =sessionStorage.getItem('token');
  const userData=JSON.parse(sessionStorage.getItem('User'))
  const [rows, setRows] = useState([]);
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: 26.9124,
    lng: 75.7873,
  };
const iconUrl=MarkIcon;
const locations = [
    { lat: 26.9124, lng: 75.7873, image: iconUrl },
    { lat: 26.9855, lng: 75.8513, image: iconUrl },
    { lat: 26.9239, lng: 75.8267, image: iconUrl },
    { lat: 26.9242, lng: 75.8236, image: iconUrl },
    { lat: 26.9257, lng: 75.8237, image: iconUrl },
    { lat: 26.9530, lng: 75.8257, image: iconUrl },
    { lat: 26.9533, lng: 75.8464, image: iconUrl },
    { lat: 26.9120, lng: 75.8101, image: iconUrl },
    { lat: 26.9857, lng: 75.8462, image: iconUrl },
    { lat: 26.8901, lng: 75.7957, image: iconUrl },
  ];

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/chargers/cpo/${userData._id}`, {
          headers: { Authorization: `${token}` },
        });
        // Assuming the response data is an array of objects with the required properties
        
        const data = response.data;
        const ChargerData=data.data.chargers;
        console.log("response chargers==>", data);
        if(data && data.status === 'success'){
             const formattedData = ChargerData.map((item) => ({
              lat:item.Latitude,
              lng:item.Longitude,
              image: iconUrl

            
            
        }));
  
        setRows(formattedData);
        }
        else{
          setRows([]);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setRows([]);
      }
    };
  
    // console.log("UserData", userData);
    fetchData();
  },[])

  return (
    
      <LoadScript googleMapsApiKey="AIzaSyDP5tt8aCvabaJ5nBlOGS2OTJoUasYvKvk">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={2}
        center={defaultCenter}
      >
        {rows.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: location.image,
              scaledSize: { width: 40, height: 40 }
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
