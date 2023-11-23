// MapComponent.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicHVraHJhanBhdGVsIiwiYSI6ImNscDg5ZG5ybTJqNjEya3M0NzN5MmxncWwifQ.qvVnMYBYW91HHMuaKZBtGg';

const MyMap2 = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map2',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [77.13, 28.62],
      zoom: 13,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
        color: 'orange',
      },
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  }, []);

  return <div id="map2" style={{ height: '470px', width: '47vw',
  backgroundColor: '#f0f0f0', margin: '20px',padding: '20px'
  ,boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)'}} />;
};

export default MyMap2;
