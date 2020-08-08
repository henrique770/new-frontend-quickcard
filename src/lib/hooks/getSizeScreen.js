import { useEffect, useState } from 'react';

export default function useScreenWidth() {
  const [width, setWidth] = useState(false);
  const [height, setHeight] = useState(false);

  useEffect(() => {
    if (!window) return false;

    if (!width) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return { width, height };
}
