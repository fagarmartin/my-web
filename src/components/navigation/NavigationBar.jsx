import { useRef } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const myRef = useRef(null);
  const handleSelectedId = () => {executeScroll();};
  const executeScroll = () => myRef.current.scrollIntoView({ // autoscroll a los detalles
    behavior: "smooth",
    block: "nearest",
   inline: "start"
  });
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link
          to="#work-experience"
          onClick={() => {
            handleSelectedId("work-experience");
          }}
        >
          Work Experience
        </Link>
        </li>
        <li>
        <Link
          to="#education"
          onClick={() => {
            handleSelectedId("education");
          }}
        >
          Education
        </Link>
      </li>
    </nav>
  );
}

export default NavigationBar;
