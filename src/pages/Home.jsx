import React, { useState } from 'react'
import { Moon, Sun } from 'lucide-react';



function Home() {
  const headingStyle = {
    color: 'pink',
    fontSize: '50px',
    textAlign: "center",
    marginTop: "50px",
  }

  const [isDarkMode, setIsDarkMode] = useState(false);

  const containerStyle = {
    backgroundColor: isDarkMode ? "white" : "darkslategray",
    color: isDarkMode ? "black" : "white",
    padding: "20px",
    textAlign: "center",
  }

  return (
    <div className='h-screen' style={containerStyle}>
      <h2>
        {isDarkMode ? 'Dark Mode ' : 'Light Mode '}
        {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
      </h2>
      <h1 style={headingStyle}>Home</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Mode</button>
    </div>
  )
}

export default Home