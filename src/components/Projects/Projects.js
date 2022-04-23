import "./projects.css";
import Aliment from "../../assets/Aliment.png";
import Nomad from "../../assets/Nomad-Atlas.png";
import Conscious from "../../assets/Conscious Culture Reads.png";
import Blog from "../../assets/Will-Blog.png";

const Projects = () => {
  return (
    <div className="project-container" id="project">
      <div className="project-section">
        <h2>Projects</h2>
        <div className="project-two">
          <img src={Blog} alt="Will Bowles Blog" className="scale-up-center" />
          <div className="project-two__content">
            <h3>Will Bowles Blog</h3>
            <p>
              My Blog site was created using Next.js, and TailwindCSS. My Blog
              is using Contentful as headless CMS for the essay content.
            </p>
            <div className="project-buttons">
              <a href="https://willbowles.co/">
                <button className="live-link">Live Site</button>
              </a>
              <a href="https://github.com/vvillbiii/will-blog">
                <button className="github-link">Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project-one">
          <img
            src={Conscious}
            alt="Conscious Culture Reads"
            className="scale-up-center"
          />
          <div className="project-one__content">
            <h3>Conscious Culture Reads</h3>
            <p>
              Conscious Culture Reads is a MERN stack project. Conscious Culture
              Reads allows you explore article that has been shared on the
              Conscious Culture newsletter and save them to your profile, so you
              can always revisit your favorite reads anytime you want. Conscious
              Culture Reads also let's you create notes on what you read so you
              have a place to put your takeaways.
            </p>
            <div className="project-buttons">
              <a href="https://ccreads.netlify.app/">
                <button className="live-link">Live Site</button>
              </a>
              <a href="https://github.com/vvillbiii/ccreads-frontend">
                <button className="github-link">Github</button>
              </a>
            </div>
          </div>
        </div>
        <div className="project-two">
          <img src={Nomad} alt="Nomad Atlas" className="scale-up-center" />
          <div className="project-two__content">
            <h3>Nomad Atlas</h3>
            <p>
              Nomad Atlas is a collaboration project built with python, django,
              and postgreSQL. Nomad Atlas lets users add post to cities they've
              traveled to. Nomads, Nomad Atlas users, can leave comments on post
              to engage with the author.
            </p>
            <div className="project-buttons">
              <a href="http://nomad-atlas.herokuapp.com/">
                <button className="live-link">Live Site</button>
              </a>
              <a href="https://github.com/jajoyce/Nomad">
                <button className="github-link">Github</button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="project-three">
            <img src={Aliment} alt="Aliment" className="scale-up-center" />
            <div className="project-three__content">
              <h3>AlimenT</h3>
              <p>
                Aliment is a MEN stack collaboration project. Aliment lets users
                create a profile, that enables them to add restuarants for other
                users to leave reviews own.
              </p>
              <div className="project-buttons">
                <a href="http://morning-falls-40233.herokuapp.com/">
                  <button className="live-link">Live Site</button>
                </a>
                <a href="http://morning-falls-40233.herokuapp.com/">
                  <button className="github-link">Github</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
