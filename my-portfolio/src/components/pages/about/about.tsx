import { useNavigate } from "react-router-dom";
import "./about.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFolderOpen,
  faHome,
  faMailBulk,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="about-main container py-5 d-flex flex-column align-items-center text-center text-md-start">
      {/* Top Navigation */}
      <nav className="about-nav d-flex justify-content-between align-items-center w-100 mb-5">
        <span
          className="back-navigation d-flex justify-content-start"
          onClick={() => handleNavigation("/")}
        >
          Back
        </span>
        <div className="about-links d-flex gap-4">
          <span onClick={() => handleNavigation("/")}>
            <FontAwesomeIcon icon={faHome} />
            Home
          </span>
          <span onClick={() => handleNavigation("/project")}>
            <FontAwesomeIcon icon={faFolderOpen} />
            Projects
          </span>
          <span onClick={() => handleNavigation("/contact")}>
            <FontAwesomeIcon icon={faEnvelope} />
            Contact
          </span>
        </div>
      </nav>

      {/* Main About Section */}
      <div className="about-content d-flex flex-column flex-md-row align-items-center gap-5 mt-4">
        {/* Left Text */}
        <div className="about-text">
          <h2 className="fw-bold mb-3">About Me</h2>
          <p className="text-muted mb-4">
            I’m <strong>Abhinav Pagadala</strong>, a passionate{" "}
            <strong>.NET Full Stack Developer</strong> with hands-on experience
            in building enterprise logistics and AI-powered web applications.
            I’ve worked on projects involving Transport Management Systems,
            Contract Management, and Document Automation, integrating
            technologies like React, TypeScript, and .NET Core.
          </p>
          <button
            className="btn btn-warning text-dark fw-semibold"
            onClick={() => window.open("/myportfolio/resume.pdf", "_blank")}
          >
            Resume
          </button>
        </div>

        {/* Right Image */}
        <div className="about-image position-relative">
          <img
            src="/myportfolio/myImg.jpg" // <-- replace with your image
            alt="Profile"
            className="profile-img"
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="social-icons d-flex justify-content-center gap-4 mt-5">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://linkedin.com/in/abhinavpagadala"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:youremail@example.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* Footer */}
      <p className="text-muted small mt-4 mb-0">© Abhinav Pagadala 2026</p>
    </div>
  );
}
