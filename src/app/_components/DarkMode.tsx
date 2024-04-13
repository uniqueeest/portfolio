'use client';

import { useState } from 'react';
import Image from 'next/image';

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeDarkMode = (darkMode: Boolean) => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button className="self-end" onClick={() => handleChangeDarkMode(darkMode)}>
      <Image
        width={24}
        height={24}
        src={darkMode ? '/icons/sun.svg' : '/icons/moon.svg'}
        alt="darkMode"
      />
    </button>
  );
};
