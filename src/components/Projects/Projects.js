import "./projects.css";
import Aliment from "../../assets/Aliment.png";
import Nomad from "../../assets/Nomad-Atlas.png";
import Conscious from "../../assets/Conscious Culture Reads.png";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-section">
        <h2>Projects</h2>
        <div className="project-one">
          <img src={Conscious} alt="Conscious Culture Reads" />
          <div className="project-one__content">
            <h3>Conscious Culture Reads</h3>
            <p>
              Conscious Culture Reads allows you explore article that has been
              shared on the Conscious Culture newsletter and save them to your
              profile, so you can always revisit your favorite reads anytime you
              want. Conscious Culture Reads also let's you create notes on what
              you read so you have a place to put your takeaways.
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
          <img src={Nomad} alt="Nomad Atlas" />
          <div className="project-two__content">
            <h3>Nomad Atlas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
              eget. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
              pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis
              id ve
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
            <img src={Aliment} alt="Aliment" />
            <div className="project-three__content">
              <h3>AlimenT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nisl eros, pulvinar facilisis justo mollis, auctor consequat
                urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
                enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
                vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Duis pharetra luctus
                lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere
                ut, pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper
                sagittis id ve
              </p>
              <div className="project-buttons">
                <a href="http://morning-falls-40233.herokuapp.com/">
                  <button className="live-link">Live Site</button>
                </a>
                <a href="">
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
