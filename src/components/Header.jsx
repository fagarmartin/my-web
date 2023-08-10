function Header() {
  return (
    <header>
      <div className="header-container">
      <h1 className="title-name">FATIMA</h1>
        <h1 className="title">FRONTEND DEVELOPER</h1>
        <p>
         Ready to unlock my potential as a Front-End Developer
          and transform pixels into captivating experiences!
        </p>
      <div className="about-me">
        <p>
          {new Date().getFullYear() - 2015} years ago I started working as a
          Full Stack Web Developer, but life led me to Software Development and
          I spent 7 years working with Ignition. I decided to return to my true
          passion and completed the Ironhack Web Development Bootcamp.
        </p>
       
        </div>
      </div>

    </header>
  );
}

export default Header;
