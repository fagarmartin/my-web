import SectionCard from "./SectionCard";
function SectionWork({ id, data, title, titleTasks, intro }) {
  return (
    <section id={`${id}`}>
      <h2>{title}</h2>
      <p className="intro">{intro}</p>
      {data.map(({ id, title, company, date, city, achievements }) => (
        <SectionCard
          key={id}
          title={title.toUpperCase()}
          company={company}
          date={date}
          city={city}
          achievements={achievements}
          titleTasks={titleTasks}
          intro={intro}
        
        />
      ))}
    </section>
  );
}

export default SectionWork;
