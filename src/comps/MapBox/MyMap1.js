// MapComponent.js
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicHVraHJhanBhdGVsIiwiYSI6ImNscDhjMnQ4eDJpdTQyanFvNTl5bjF3NWIifQ.k9YRmKjEzpafZua8YNGPgA';

const MyMap1 = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map1',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [77.13, 28.62],
      zoom: 13,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
  }, []);

  return <div id="map1" style={{ height: '470px', width: '570px' }} />;
};

export default MyMap1;
