import "./projects.css";
import Aliment from "../../assets/Aliment.png";
import Nomad from "../../assets/Nomad-Atlas.png";
import Conscious from "../../assets/Conscious Culture Reads.png";

const Projects = () => {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project">
        <h3>Conscious Culture Reads</h3>
        <img src={Conscious} />
        <div className="project-content">
          <p>
            Conscious Culture Reads allows you explore article that has been
            shared on the Conscious Culture newsletter and save them to your
            profile, so you can always revisit your favorite reads anytime you
            want. Conscious Culture Reads also let's you create notes on what
            you read so you have a place to put your takeaways.
          </p>
        </div>
      </div>
      <div>
        <h3>Nomad Atlas</h3>
        <img src={Nomad} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
          lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh
          at nisi ullamcorper sagittis id ve
        </p>
      </div>
      <div>
        <h3>AliemT</h3>
        <img src={Aliment} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
          lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh
          at nisi ullamcorper sagittis id ve
        </p>
      </div>
    </div>
  );
};

export default Projects;
