import Header from "../components/Header";
import SectionCard from "../components/SectionCard";
function Home() {
  const achievementsEstevez=["Succesfully designed and developed projects for the departments of production, laboratory and  maintenance.","Database design with SQL Management.","Logic implementation.","Testing and debugging.","Implementation and deployment."]
  return (
    <div className="container">
      <Header />
      <div className="my-experience">
      {/* jose estevez */}
        <SectionCard info={{title:"Full-Stack Developer",company:"José Estévez S.A.",date:"05/2016 - 12/2022",city:"Jerez de la Frontera,Cádiz",achievements:achievementsEstevez}}/>
      </div>
    </div>
  );
}

export default Home;
