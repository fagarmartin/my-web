import Header from "../components/Header";
import Section from "../components//Section";
import LanguageCard from "../components/LanguageCard";
import dataWork from "../data/workexperience.json";
import dataEducation from "../data/education.json";
function Home() {

  return (
    <div className="container">
      <Header />
     
      <div className="my-experience">
        {/* jose estevez */}
       <Section data={dataWork} className={"work-experience"} title="WORK EXPERIENCE" titleTasks="Achievements/Tasks"/>
       <Section data={dataEducation} className={"education"} title="EDUCATION" />      
        <section>
          <h2>LANGUAGES</h2>
        <LanguageCard language={"English"} title={"Certificate in Advanced English, C1."}/>
        </section>
      </div>
    </div>
  );
}

export default Home;
