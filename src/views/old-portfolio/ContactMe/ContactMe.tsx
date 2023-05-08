import Layout from '@/components/old-portfolio/Layout/Layout';

function ContactMe() {
  return (
    <Layout>
      <div className="contact-page">
        <h1 className="ml14 standard-title inner">
          <span className="text-wrapper">
            <span className="letters">Contact me</span>
            <span className="line"></span>
          </span>
        </h1>

        <div className="contact-container">
          <div>
            <a
              href="https://it.linkedin.com/in/sofiadissegna"
              className="contact-link"
              target="_blank"
              title="Visit my Linkedin profile"
            >
              <i className="fab fa-linkedin"></i>
              <span>Linkedin Profile</span>
            </a>
            <a
              href="https://www.artstation.com/fuss"
              className="contact-link"
              title="Visit my Artstation profile"
              target="_blank"
            >
              <i className="fab fa-artstation"></i>
              <span>Artstation Profile</span>
            </a>
            <a
              href="mailto:sofia.dissegna93@gmail.com"
              title="write me an email"
              target="_blank"
              className="contact-link"
            >
              <i className="fas fa-envelope"></i>
              <span>sofia.dissegna93@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactMe;
