import "./about.css";
import Tech from "./Tech";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-section">
        <div>
          <h2>About Me</h2>
          <div className="about-section__content">
            <p>
              As a full-stack developer, I have a wide range of skills and
              experience that I can bring to your company. I have experience
              with both front-end and back-end development, as well as
              experience with a variety of programming languages.
            </p>
            <br />
            <p>
              I am a quick learner and have a knack for problem-solving, which
              makes me an asset on any development team.
            </p>
          </div>
        </div>
        <div className="tech-section">
          <Tech />
        </div>
      </div>
    </div>
  );
};

export default About;
