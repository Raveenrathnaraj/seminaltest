'use client';
import { useEffect } from 'react';

const RightClickHandler = () => {
  // let ENVSTATE = 'development';
  let ENVSTATE = 'production';

  useEffect(() => {
    const handleContextMenu = (e: any) => {
      e.preventDefault();
    };

    if (process.env.NODE_ENV === ENVSTATE) {
      document.addEventListener('contextmenu', handleContextMenu);
    }

    return () => {
      if (process.env.NODE_ENV === ENVSTATE) {
        document.removeEventListener('contextmenu', handleContextMenu);
      }
    };
  }, [ENVSTATE]);

  return null;
};

export default RightClickHandler;
