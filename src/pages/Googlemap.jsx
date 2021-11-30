import React from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const Googlemap = () => {
    const containerStyle = {
        width: "100%",
        height: "80vh"
      };
      
      const center = {
        lat: 37.5627216,
        lng: 126.9983663
      };
    return (
        <div>
            <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={17}
        >

          <Marker position={center}/>
          
        </GoogleMap>
      </LoadScript>
        </div>
    );
};

export default Googlemap;