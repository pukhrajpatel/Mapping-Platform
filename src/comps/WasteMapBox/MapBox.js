import React from 'react';
import './MapBox.css'; // Import your CSS file for styling

const MapBox = () => {
  return (
    <div className="map-box">
      <div className="map-container">
        {/* Your map component goes here */}
        <iframe
          title="Map"
        //   src = "https://www.google.com/maps/search/New+Delhi,India"
        src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6849685219967!2d77.20902121443879!3d28.61393969000961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37e5ff8c7e1%3A0x52c2e90b1a408fc9!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1635589473015!5m2!1sen!2sus"
        //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6849685219967!2d77.20902121443879!3d28.61393969000961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37e5ff8c7e1%3A0x52c2e90b1a408fc9!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1635589473015!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapBox;
