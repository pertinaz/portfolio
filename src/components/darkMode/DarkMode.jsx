import React, { useState, useEffect } from 'react'

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(()=>{
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark';
    });

    useEffect(()=>{
      if(isDarkMode){
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme','dark');
      }
      else{
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme','light');
      }

    },[isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    }

    return (
      <div className='theme__icon'>
        <button onClick={toggleTheme}>
          {isDarkMode ? <i class="bx bx-sun"></i> : <i class="bx bx-moon"></i>}
        </button>
      </div>
    );
}

export default DarkMode