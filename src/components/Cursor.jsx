import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [showCursor, setShowCursor] = useState(false);
  //const [cursorVariant,setCursorVariant]=useState("default")

  useEffect(() => {
    const mouseMoveHandle = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMoveHandle);
    /* if is on mobile*/

    isMobile ? setShowCursor(false) : setShowCursor(true);

    return () => {
      window.removeEventListener("mousemove", null);
    };
  }, []);

  if (showCursor) {
    return (
      <div
        className="cursor"
        style={{ top: mousePosition.y - 12, left: mousePosition.x - 12 }}
      />
    );
  }
  return <></>;
}

export default Cursor;
