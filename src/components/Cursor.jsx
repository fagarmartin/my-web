import { useEffect, useState } from "react";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
const [cursorVariant,setCursorVariant]=useState("default")

  useEffect(() => {
    const mouseMoveHandle = e => {
      setMousePosition({x:e.clientX,y:e.clientY})
    };
    window.addEventListener("mousemove", mouseMoveHandle);
    return () => {
      window.removeEventListener("mousemove",null);
    };
  }, []);


  
  return <div className="cursor" style={{top:mousePosition.y-16, left:mousePosition.x-16}} />;
}

export default Cursor;
