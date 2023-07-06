import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
import LanguageCard from "../components/LanguageCard";
import dataWork from "../data/workexperience.json";
import dataEducation from "../data/education.json";
function Home() {

  return (
    <div className="container">
      <Header />
      <div className="my-experience">
        {/* jose estevez */}
        <section className="work-experience">
        <h2>WORK EXPERIENCE</h2>
        {dataWork.map(({ id, title, company, date, city, achievements }) => (
          <SectionCard
            key={id}
            title={title}
            company={company}
            date={date}
            city={city}
            achievements={achievements}
          />
        ))}
        </section>
        <section className="education">
        <h2>EDUCATION</h2>
        {dataEducation.map(({ id, title, company, date, city, achievements }) => (
          <SectionCard
            key={id}
            title={title}
            company={company}
            date={date}
            city={city}
            achievements={achievements}
          />
        ))}
        </section>
        <section>
          <h2>LANGUAGES</h2>
        <LanguageCard language={"English"} title={"Certificate in Advanced English, C1."}/>
        </section>
      </div>
    </div>
  );
}

export default Home;
