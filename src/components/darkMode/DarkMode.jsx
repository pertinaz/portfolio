import React, { useState } from 'react'

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    }

    return (
      <div className='theme__container'>
        <button onClick={toggleTheme}>
          {isDarkMode ? <i class="bx bx-sun"></i> : <i class="bx bx-moon"></i>}
        </button>
      </div>
    );
}

export default DarkMode