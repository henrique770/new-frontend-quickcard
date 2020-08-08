import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useDarkMode;
