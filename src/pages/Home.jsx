import Header from "../components/Header";
import Section from "../components//Section";
import LanguageCard from "../components/LanguageCard";
import dataWork from "../data/workexperience.json";
import dataEducation from "../data/education.json";
import SoftSkillCard from "../components/softskills/SoftSkillCard";
function Home() {
  return (
    <div className="container">
      <Header />
      <section className="soft-skills">
      <SoftSkillCard imgSrc={"bulb.svg"} title={"Creativity"} description={"As a web developer with a background in graphic design, I bring a unique blend of creativity and technical expertise to my work. "} />

      <SoftSkillCard imgSrc={"bulb.svg"} title={"Self-learning"} description={"I have a natural curiosity and an innate drive to expand my knowledge and skills independently. I'm always seeking new opportunities to learn and grow."} />

      <SoftSkillCard imgSrc={"bulb.svg"} title={"Problem solving"} description={"I take my time to plan and devise a robust strategy, often thinking outside the box to discover unconventional yet effective solutions."} />
      </section>
      <div className="my-experience">
        <Section
          data={dataWork}
          id={"work-experience"}
          title="WORK EXPERIENCE"
          titleTasks="Achievements/Tasks"
        />
        <Section
          data={dataEducation}
          id={"education"}
          title="EDUCATION"
        />

        <section>
          <h2>LANGUAGES</h2>
          <LanguageCard
            language={"English"}
            title={"Certificate in Advanced English, C1."}
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
