import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Get In Touch</h2>
      <p>Got a question or want to work together on something?</p>
      <p>Feel free to reach out.</p>
      <div className="contact-icons">
        <a href="mailto:will@willbowles.co">
          <img
            src="https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-02-1024.png"
            className="tech-icon"
          />
        </a>
        <a href="https://github.com/vvillbiii">
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-1024.png"
            className="tech-icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/will-bowles/">
          <img
            src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/social-linkedin-1024.png"
            className="tech-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
