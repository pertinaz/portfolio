import React, { useState } from 'react'
import "./darkMode.css"

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    }

    return (
      <div>
        <button onClick={toggleTheme}>
          {isDarkMode ? <i class="bx bx-sun"></i> : <i class="bx bx-moon"></i>}
        </button>
      </div>
    );
}

export default DarkMode