import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import data from "../data/workexperience.json";
function Home() {

  return (
    <div className="container">
      <Header />
      <div className="my-experience">
        {/* jose estevez */}
        {data.map(({ id, title, company, date, city, achievements }) => (
          <SectionCard
            key={id}
            title={title}
            company={company}
            date={date}
            city={city}
            achievements={achievements}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
