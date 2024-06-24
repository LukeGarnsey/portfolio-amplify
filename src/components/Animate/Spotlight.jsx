import { useEffect, useState } from "react";

export default function Spotlight(){
  
  const [cursorPosition, setCursorPosition] = useState({x:0, y:0});
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(()=>{
    const updateCursorPosition = (e) =>{
      setCursorPosition({x:e.clientX, y:e.clientY});
    };

    const scrollUpdate = () =>{
      if(window.innerWidth < 1024)
        setScrollPosition(0);
      else
        setScrollPosition(window.scrollY);
    };
    document.addEventListener('scroll', scrollUpdate);
    document.addEventListener('mousemove', updateCursorPosition);
    return () =>{
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('scroll', scrollUpdate);
    };
  }, []);

  const contStyles = {
    background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y + scrollPosition}px, rgba(29, 78, 216, 0.2), transparent 80%`,
    transition: 'background-color 0.3s ease-in-out'
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={contStyles}>
        
      </div>
    </>
  );
}