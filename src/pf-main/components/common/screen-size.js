import React, { createContext, useState, useEffect } from 'react';

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isDesktop }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeContext;