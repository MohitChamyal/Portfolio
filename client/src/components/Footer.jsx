import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-background">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
    </div>
    <div className="footer-content">
      <div className="footer-links">
        <a
          href="mailto:mohit.chamyal@example.com"
          aria-label="Send Email"
          className="footer-icon-link"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/MohitChamyal"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="footer-icon-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mohit-chamyal-57254724b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-icon-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/MOHITCHAMYAL58"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="footer-icon-link"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="footer-info">
        <span>© {new Date().getFullYear()} Mohit Chamyal. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
