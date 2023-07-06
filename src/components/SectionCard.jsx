function SectionCard({ title, company, date, city,achievements}) {
  // hacer que al poner el raton encima salgan las habilidades usadas para cada trabajo
  
  return (
    <section>
      <h4>{title}</h4>
      <div className="info-details">
        <h5>{date}</h5> <h5>{company}</h5> <h5>{city}</h5>
      </div>
      <ul className="achievements-tasks">{achievements.map((each,i)=>{
        return (
          <li  key={`achv${i}`}>{each}</li>
        )
      })}</ul>
    </section>
  );
}

export default SectionCard;
