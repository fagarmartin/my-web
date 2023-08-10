import { useState } from "react";
import SectionElement from "./SectionElement";

function SectionCard({ title, company, date,  achievements }) {
  // hacer que al poner el raton encima salgan las habilidades usadas para cada trabajo
  const [toggleInfo, setToggleInfo] = useState('hide');
  const toggleInfoHandle =()=>{
    setToggleInfo(toggleInfo==='hide'?'show': 'hide')
  }
  return (
    <div className="by-date">
      <h6 className="date">{date} </h6>
    <div className="list-cards">
      <div className="on-display">
       <div onClick={toggleInfoHandle} className="list-card-title"><span><h4 className="work-title">{title}</h4></span><span> <h5 >{company}</h5></span></div>
       </div>
      <div className={`not-on-display ${toggleInfo}`}>
        <div className={`display-info`}>          
          
          <ul className="achievements-tasks">
            {achievements.map((each, i) => {
              return <SectionElement key={`achv${i}`} each={each} index={i} />;
            })}
          </ul>
          </div>
        </div>
     
    </div>
    </div>
  );
}

export default SectionCard;
