import { Link } from 'react-router-dom';

// Methods.
function Footer() {
  return (
    <div>
      <div className="footer-wrap">
        <footer>
          <span>Sofia Dissegna</span>
          <Link
            to="https://it.linkedin.com/in/sofiadissegna"
            target="_blank"
            title="Visit my Linkedin profile"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link
            to="https://www.artstation.com/fuss"
            title="Visit my Artstation profile"
            target="_blank"
          >
            <i className="fab fa-artstation"></i>
          </Link>
          <Link
            to="mailto:sofia.dissegna93@gmail.com"
            title="write me an email"
            target="_blank"
          >
            <i className="fas fa-envelope"></i>
            <span>sofia.dissegna93@gmail.com</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
