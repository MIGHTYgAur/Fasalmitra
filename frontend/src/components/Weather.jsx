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

    <div className="bg-[#384c3] bg-[#024535]">


    <div className="h-[100vh] w-[99vw] flex justify-center items-center bg-blue-20 bg-[#0B4D3E] -mt-[10vh] rounded-3xl">
      <div className="w-[40vw] h-[60vh] bg-white rounded-xl p-6 shadow-lg  ">
        <h1 className="text-4xl font-bold mb-4 flex justify-center">Weather Forecast</h1>


       <div className="flex">

 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC0CAMAAACJ8pgSAAABAlBMVEX///8pq+L/vwAXqOG44fT/vQD/vACVyv+YzP//wQAzWrL//PP/+Of/xij/0Vn/7bv//vkpVLD/6bD3/P6j0f//++7I4//c7f80W7Lk8f////z/89QYqujt9v/z+f8hUa/q7vf/3Yf/78X/yjv/1Wn/4ZX/7sOs3PP/9ts3seRswupLt+bb8Pr/123E5vb/56mU0u//zEiZqtajs9rU3O61weHJ0umx2P9aeL98k8s/ZLdwicdQcLz/237/4pv/4I99yeyWs4LAuFksrNXsvRh5sp/Uuz5jsLDdvC+Is5Swt3BZr7hFrcimtndNrsCUtIe6uGTKulGo0dRngsS93v/N1ut8XwftAAAHxklEQVR4nO2bbWOaOhTHRQSF+oTU1VZFq3ZWa12ttt3W53m3u3Vd7+7d9v2/yg0oQpBA2IoQen5v2pQkkr8nJycnaSoFAAAAAAAAAAAAAAAAAAAAAAAAAMywFfULxJK9Y2E/6neII/m0UACLWScvgS5ugC7ugC7ugC7ugC7ugC7ugC7ugC5L9nqFjq3o1KUiXW/6jeJBXRS6e1bRoctWQRDzm3+pGFCVBMFmMA5dKoJQKG/+pTbPYck5zGtB6FklfH+0NxHEG0f9rVICDSgviROHMHVBkKyRlovCse1Z2v7MoFoQE2hBh4IgFh3DKgrigVUq122PkS0d45WrXWFNqiRwIKTFIr4QV0SxR6g9EcUO9gddFuFNSO8WKQdiWsCFKV8X64TKneItVs7rslTCerVoWReGmiTL8gfCJFsWT2HK1fxhvuq+3iRdlqUwzsHv1W96BSmNkKRu72bN5SRfloUweBzTOZZENG5B1yWNfoqCdI1JUy0kX5ZU6kbAAtlKQVxKYoFqdEtWlX3xBchiCPPa/L2EVEm7gZRZhS8VMZ0wWdTmONPv9zPjkWr7a/1w+Uu+R1BlYTTXW84GiWDUHw54k8GwP3JWeC2RVdERC6Sgj13UzJDjec4CaTPM2K1Gn0+esiCTSdr8SWWOMFFMaY4yVpVb0UcVYy45Uw1MMxq6qLKQZmjOJhpZdGUStFPMcARVdGEGfaPOG785tLKYks+nMcMJWRVDmRNUp5Om1CUtSNhiVC5VGE1N3XnLgoS50yNYSlmQMF1LiPxtActkMYSvLLowx/SyoOXaTMTUi8Y2gcnLQz6TaEHjPoAsaMYtZtKWoYp0y+I8GtPIgoT5EEiYRa6zjLaXEza9sDagkoXj5n8FESa9iHsPD1iNfymcy9JgPgYymGP/j44zI0pVdGE+BdGF8eMRanNBa9LfQQxGZDrqDWAuyGA+BzEY0ikTE1Ct0StdvgTRpVCNenC/j3oUxF64eZCJJLC6EiFGQcwloOdl2cH0A+piD3olycdemAz+FwRYjQxdlivS54ePXx/n88evXx7IwR7LjvcomC7co24n3574RsNoqP98eiDYjVBcfMZhyUbH+31igkq7BzAZSNL9oIGJyTfm39x1mRgX8ToiBhNhsBZQFo778NhY/2Pj0c0fL3V5YxxMmoiTqMdMQ3Bd3JPAPP9AnEfl66KNHhOLd3BdSDT+SZLffT5dXPJWAsNXnIP6XQ/WphKLSV11lDm5uzvpP6Mu3Nyxq7RO+llhfDfgFkfQzyjLKugzYS0BQz5Z/EP47y7LNCuoJx4ni3+oy5M98hVv/V8mPqhBI/9A/Gs3GCYilSXqIExZ7JlxtqZRqNaCtpUFS5flNRgmknYB0wrBWe2TzBPqidiN/6E95cni79P47jCXqqgfw+7H/K5dyLPIthkwcy+pfcm43Rvru2WZsGVZHBhIn79/u/9v3Fx8aP6gi4SJ9VZpGL4uH9PSw9Og0Wig0NG8slh+3SvGeSI1w1ZFt5dPT6tsHs8fjaMeMw3hTyO0UM+xe65cP+pBUxDoaPGZ4BkQJnz34iZM/KdSJLpwg6iH7Uvo0Ysr8Z9J0dgLdxT1uP2ISBdu7X9SYkYU6xHHgOcNfddI0CXuDob6QuoL0yX87AujukQzkWLvX6JakZpRD9uXgLfpngV+GPWoKQh4ne5ZdMn4v1b0bNz18rEPdxds2sXwcY92TTYb9bIxiwwyoR454qpw7Miin9wPQrrQ4FDF+sdrRtAyQ/MCTGhwg2H8A7p11NE4EyojLeohAgAAAACQOE5bp1ZB286R0kfq9rbt0bT1jqp3DWvFEDNFVqzQ6yKbfUWoiD2ateRam6b7n+QO481bWbG++Z1sLkv4enezudyuvdUlTe87WCuGmCqy3DYL6nYu+5NQEXt0RmkueodMmkv7vdyarkqvsrlt1b0i9kirycrUvZ5HK5Z4p8hvV4VmLpfdca+HP9Jb0QzXo8N4c67UlNmqhDzrBaEi9ugXanVO071Hh7FGczpd0iKN+2OslQceHcYb5HTft82Cl4/EHmGu2gM1x7DTPVuVdB9JqnmRtR7hrTz46dFhrEHu88eqsIu+XXKksWu5WdTqiqb3ZtarwxijvVdwp0sKXTDOFbk186+GOsyx6XRRdHZlzQfdR9JkYrWrAE6XydAFQ6P1kafIVbvrN2tjxR1WN0YYyEdSGb1GdLrTlrW0GewwGdHh7NJu79TLlvt+sV2jdDtM4bFfdKDN3J0GtrYlBeQjt6mcBhG0SsnJM5dmlrC9O2vVqEarr1Kn/tWYo+m+jdGdBtUGEa1SVy/ovNUjn/DqwuanZ7KsUG0NksGsJSu/3B/tYhmEH5RZzYTgEdr+VlYzIUwV4nDXsppJdLoW56dtq9CWa6R8gpZ1ZDWv2N8JeTBrtWyx2aU99YuD5Sd1L0S1aDELlp/0yCfg+UnarCazYP7EI1JTnVnNZDtd/CiJnE/AE554qySCBXGzGjGJu36UFPqrRYl+lGQFcZcKMVLDnO65nMT0gg38KOmMfBSCJTzVl+B0rXxb+0puEZyu5nS6JC+UDNAXb/Mn5y3i9ngnaztKSr2lPEpil6l9PrSvaoT9om4vto30NOGzCKF6lGhbAQAAAAAAAAAAAAAAAAAAAAAAAEDk/A8mLLhReisWewAAAABJRU5ErkJggg==" className="" alt="" />

{weatherData?
       (<p className="text-7xl font-roboto mb-2 flex justify-center items-center"> {weatherData.temperature_2m[0]}°C</p>):(<p>Loading wheather data</p>)
}
       </div>
        {location ? (
          <p className="text-lg font-bold mb-2">{location}</p>
        ) : (
          <p>Loading location...</p>
        )}
        <div className=" flex float-right border-2 p-4 border-grey bg-purple-200 rounded-xl -mt-20">

        {currentWindSpeed !== null ? (
          <p className="text-lg mb-2">Current Wind Speed: {currentWindSpeed} m/s</p>
        ) : (
          <p>Loading current wind speed...</p>
        )}
        </div>

        <div className="flex mt-10 justify-around">


{weatherData?(
  <div className="border-2 p-4  rounded-xl bg-blue-200 border-blue-300">

<p className="text-lg mb-2">Rain: {weatherData.rain[0]} mm</p>
  </div>

):(<p>Loading data</p>)}

{weatherData?(
  <div className="rounded-xl bg-[#E1CF8B] border-[#E1CF8B] border-2 p-4">
  <p className="text-lg mb-2">Soil Temperature (0 cm): {weatherData.soil_temperature_0cm[0]}°C</p>

  </div>

):(<p>Loading Data</p>)}



        </div>
        {/* {weatherData ? (
          <div>
            <p className="text-lg mb-2">Weather Code: {weatherData.weather_code[0]}</p>
            <p className="text-lg mb-2">Soil Temperature (6 cm): {weatherData.soil_temperature_6cm[0]}°C</p>
            <p className="text-lg mb-2">Soil Temperature (18 cm): {weatherData.soil_temperature_18cm[0]}°C</p>
            <p className="text-lg mb-2">Soil Temperature (54 cm): {weatherData.soil_temperature_54cm[0]}°C</p>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )} */}
      </div>
    </div>
    </div>
  );
}

export default Weather;
