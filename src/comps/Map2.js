import React, { useState } from 'react';

const MapWithSearch = () => {
  const [location, setLocation] = useState('');
  const [url, setUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.6849685219967!2d77.20902121443879!3d28.61393969000961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce37e5ff8c7e1%3A0x52c2e90b1a408fc9!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1635589473015!5m2!1sen!2sus")
  
  const handleSearch = () => {
    // You can add additional validation or error handling here if needed
    // For simplicity, we assume the user enters a valid location
    // Update the iframe URL with the new search query
    const iframeUrl = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(location)}&key=YOUR_API_KEY`;

    setUrl(iframeUrl);
  };

  return (
    <div>
      <label htmlFor="location">Search Location:</label>
      <input
        type="text"
        id="location"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <iframe
        title="Google Map"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        src={url}
      ></iframe>
    </div>
  );
};

export default MapWithSearch;
