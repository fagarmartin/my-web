function SectionCard({ info: { title, company, date, city,achievements }}) {
  return (
    <section>
      <h4>{title}</h4>
      <div className="info-details">
        <h5>{date}</h5> <h5>{company}</h5> <h5>{city}</h5>
      </div>
      <ul className="achievements-tasks">{achievements.map((each)=>{
        return (
          <li>{each}</li>
        )
      })}</ul>
    </section>
  );
}

export default SectionCard;
