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
              I'm software engineer with a background in SEO and digital
              marketing. Finding new ways to solve problems and learning new
              skills are interests of mine.
            </p>
            <br />
            <p>
              In addition to solving problems independently, I value
              collaboration because there is more than one way to achieve an
              answer, and everyone’s input is valuable. My strengths are my
              attention to detail and my ability to meet deadlines.
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
