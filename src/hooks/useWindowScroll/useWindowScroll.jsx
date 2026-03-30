import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

// const useWindowScroll = () => {
//   const [scroll, setScroll] = useState({x: '' , y: ''});
  
//     const handleScroll = () => {
//         const newScrollYPosition = {x: window.scrollX , y: window.scrollY};
//         setScroll(newScrollYPosition);
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//   return scroll
// }
// export default useWindowScroll

const useWindowScroll = (throttleMs = 100) => {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY });

  const handleScroll = throttle(() => {
    if(scroll.x == window.scrollX && scroll.y == window.scrollY){
        return
    }
    setScroll({ x: window.scrollX, y: window.scrollY });
    
  }, throttleMs);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scroll;
};

export default useWindowScroll;