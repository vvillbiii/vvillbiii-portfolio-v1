import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <div>
          <h2>About Me</h2>
          <p>
            I'm software engineer with a background in SEO and digital
            marketing. Finding new ways to solve problems and learning new
            skills are interests of mine.
            <br /> In addition to solving problems independently, I value
            collaboration because there is more than one way to achieve an
            answer, and everyone’s input is valuable. My strengths are my
            attention to detail and my ability to meet deadlines.
          </p>
        </div>
        <div className="tech-section">
          <h2>Technologies I Work With</h2>
          <div className="icon-section">
            <img
              src="https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/640/node-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/10-html5-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mongodb-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/postgres_database_server_relational_dbms_sql-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/python-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn2.iconfinder.com/data/icons/boxicons-logos/24/bxl-django-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-1024.png"
              className="tech-icon"
            />
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-1024.png"
              className="tech-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
