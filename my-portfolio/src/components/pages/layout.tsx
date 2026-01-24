import { useNavigate } from "react-router-dom";
import "./layout.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFolderOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="layout-div">
      <div className="layout-main-div">
        <div className="layout-intenral-div">
          <div className="layout-internal-child-div">
            <div className="row align-items-center">
              {/* LEFT SECTION */}
              <div className="col-md-7 text-start">
                <h6 className="text-warning">
                  Full-Stack .NET & React Developer
                </h6>
                <h1>
                  Hello, <br /> my name is <span>Abhinav Pagadala</span>
                </h1>
                <span className="description">
                  I’m a Full-Stack Developer specializing in C#, ASP.NET Core, and React,
                  with experience building scalable web applications and RESTful APIs.
                  I enjoy turning complex problems into simple, elegant solutions and
                  writing clean, maintainable code. Recently, I’ve also been working with
                  LLM integrations and MCP-based systems to build intelligent, automation-driven features.
                </span>

                <div className="buttons">
                  <button
                    className="btn btn-warning me-3"
                    onClick={() => handleNavigation("/project")}
                  >
                    Projects
                  </button>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() =>
                      window.open(
                        "https://linkedin.com/in/YOUR-LINKEDIN",
                        "_blank"
                      )
                    }
                  >
                    LinkedIn
                  </button>
                </div>
              </div>

              {/* RIGHT SECTION */}
              <div className="col-md-5 position-relative text-center">
                <div className=" mb-2 d-flex text-center justify-content-end gap-4">
                  <span
                    className="text-link"
                    onClick={() => handleNavigation("/about")}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    About
                  </span>
                  <span
                    className="text-link"
                    onClick={() => handleNavigation("/project")}
                  >
                    <FontAwesomeIcon icon={faFolderOpen} />
                    Projects
                  </span>
                  <span
                    className="text-link"
                    onClick={() => handleNavigation("/contact")}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Contact
                  </span>
                </div>

                <div className=""></div>
                <img src="myportfolio/coverImg.jfif" alt="profile" className="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
