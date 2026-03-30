import React, { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({x: '' , y: ''});
  useLayoutEffect(() => {
    const updateSize = () => {
      if(window.innerWidth != size.x){
        setSize({x: window.innerWidth, y: window.innerHeight});
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [size]);
  
  var sizeObj = {width: `${size.x}` , height: `${size.y}`}
  return sizeObj;
}


export default useWindowSize