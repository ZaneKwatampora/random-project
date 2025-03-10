import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Nasa() {
  const [nasaData, setNasaData] = useState(null);

  const API_KEY = import.meta.env.VITE_NASA_API_KEY;
  const NASA_URL = import.meta.env.VITE_NASA_BASE_URL;

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await axios.get(`${NASA_URL}?api_key=${API_KEY}`);
        setNasaData(response.data);
      } catch (error) {
        console.error("Error fetching from Nasa API", error)
      }
    }

    fetchNasaData();
  }, []);


  // console.log(NASA_URL);
  return (
    <div className='h-screen'>
      <h1>Nasa Apod</h1>
      <div>
        {nasaData ? (
          <div>
            <h3>{nasaData.title}</h3>
            <p>{nasaData.explanation}</p>
            <p>{nasaData.url}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Nasa