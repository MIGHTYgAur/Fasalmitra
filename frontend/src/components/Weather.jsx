// import React, { useState, useEffect } from 'react';

// function Weather() {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     // Fetch weather data from the API
//     fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain')
//       .then(response => response.json())
//       .then(data => {
//         setWeatherData(data.hourly); // Store the relevant data
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//       });
//   }, []);

//   return (
//     <div className="h-[100vh] flex justify-center items-center bg-blue-200">
//       <div className="w-[80vw] h-[60vh] bg-white rounded-xl p-6 shadow-lg">
//         <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
//         {weatherData ? (
//           <div>
//             <p className="text-lg mb-2">Temperature: {weatherData.temperature_2m[0]}°C</p>
//             <p className="text-lg mb-2">Rain: {weatherData.rain[0]} mm</p>
//           </div>
//         ) : (
//           <p>Loading weather data...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Weather;
// import React, { useState, useEffect } from 'react';

// function Weather() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [currentWindSpeed, setCurrentWindSpeed] = useState(null);

//   useEffect(() => {
//     // Fetch weather data from the updated API
//     fetch('https://api.open-meteo.com/v1/forecast?latitude=19.2437&longitude=73.1355&current=wind_speed_10m&hourly=temperature_2m,rain,weather_code,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm')
//       .then(response => response.json())
//       .then(data => {
//         setWeatherData(data.hourly); // Store the hourly weather data
//         setCurrentWindSpeed(data.current.wind_speed_10m); // Store the current wind speed
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//       });
//   }, []);

//   return (
//     <div className="h-[100vh] flex justify-center items-center bg-blue-200">
//       <div className="w-[80vw] h-[60vh] bg-white rounded-xl p-6 shadow-lg">
//         <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
//         {currentWindSpeed !== null ? (
//           <p className="text-lg mb-2">Current Wind Speed: {currentWindSpeed} m/s</p>
//         ) : (
//           <p>Loading current wind speed...</p>
//         )}
//         {weatherData ? (
//           <div>
//             <p className="text-lg mb-2">Temperature: {weatherData.temperature_2m[0]}°C</p>
//             <p className="text-lg mb-2">Rain: {weatherData.rain[0]} mm</p>
//             <p className="text-lg mb-2">Weather Code: {weatherData.weather_code[0]}</p>
//             <p className="text-lg mb-2">Soil Temperature (0 cm): {weatherData.soil_temperature_0cm[0]}°C</p>
//             <p className="text-lg mb-2">Soil Temperature (6 cm): {weatherData.soil_temperature_6cm[0]}°C</p>
//             <p className="text-lg mb-2">Soil Temperature (18 cm): {weatherData.soil_temperature_18cm[0]}°C</p>
//             <p className="text-lg mb-2">Soil Temperature (54 cm): {weatherData.soil_temperature_54cm[0]}°C</p>
//           </div>
//         ) : (
//           <p>Loading weather data...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Weather;

import React, { useState, useEffect } from 'react';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentWindSpeed, setCurrentWindSpeed] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Fetch weather data from the updated API
    fetch('https://api.open-meteo.com/v1/forecast?latitude=19.2437&longitude=73.1355&current=wind_speed_10m&hourly=temperature_2m,rain,weather_code,soil_temperature_0cm,soil_temperature_6cm,soil_temperature_18cm,soil_temperature_54cm')
      .then(response => response.json())
      .then(data => {
        setWeatherData(data.hourly); // Store the hourly weather data
        setCurrentWindSpeed(data.current.wind_speed_10m); // Store the current wind speed
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });

    // Fetch location data from a reverse geocoding API
    fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=19.2437&longitude=73.1355&localityLanguage=en')
      .then(response => response.json())
      .then(data => {
        setLocation(`${data.city}, ${data.principalSubdivision}, ${data.countryName}`);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
      });
  }, []);

  return (
    <div className="h-[100vh] flex justify-center items-center bg-blue-200">
      <div className="w-[80vw] h-[60vh] bg-white rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
        {location ? (
          <p className="text-lg mb-2">Location: {location}</p>
        ) : (
          <p>Loading location...</p>
        )}
        {currentWindSpeed !== null ? (
          <p className="text-lg mb-2">Current Wind Speed: {currentWindSpeed} m/s</p>
        ) : (
          <p>Loading current wind speed...</p>
        )}
        {weatherData ? (
          <div>
            <p className="text-lg mb-2">Temperature: {weatherData.temperature_2m[0]}°C</p>
            <p className="text-lg mb-2">Rain: {weatherData.rain[0]} mm</p>
            <p className="text-lg mb-2">Weather Code: {weatherData.weather_code[0]}</p>
            <p className="text-lg mb-2">Soil Temperature (0 cm): {weatherData.soil_temperature_0cm[0]}°C</p>
            <p className="text-lg mb-2">Soil Temperature (6 cm): {weatherData.soil_temperature_6cm[0]}°C</p>
            <p className="text-lg mb-2">Soil Temperature (18 cm): {weatherData.soil_temperature_18cm[0]}°C</p>
            <p className="text-lg mb-2">Soil Temperature (54 cm): {weatherData.soil_temperature_54cm[0]}°C</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
}

export default Weather;
