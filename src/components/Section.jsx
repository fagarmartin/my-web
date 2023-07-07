import SectionCard from "./SectionCard";
function SectionWork({id,data,title,titleTasks}) {
  return (
    <section id={`${id}`}>
        <h2>{title}</h2>
        {data.map(({ id, title, company, date, city, achievements }) => (
          <SectionCard
            key={id}
            title={title}
            company={company}
            date={date}
            city={city}
            achievements={achievements}
            titleTasks={titleTasks}
          />
        ))}
        </section>
  )
}

export default SectionWork