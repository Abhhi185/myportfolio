import { useNavigate } from "react-router-dom";
import "./project.scss";

export default function Project() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="project-main-div container py-5">
      <div className="row mb-4">
        <span
          className="back-navigation d-flex justify-content-start"
          onClick={() => handleNavigation("/")}
        >
          Back
        </span>
      </div>
      <h2 className="text-center project-title">Projects</h2>
      <div className="underline"></div>

      {/* === Project 1 === */}
      <div className="project-card d-flex flex-column flex-md-row mb-5 shadow-sm">
        <div className="project-text p-4 d-flex flex-column justify-content-center">
          <h4 className="fw-bold mb-3">Transportation Management System (TMS)</h4>
          <p className="text-muted mb-4">
            An enterprise-grade Transportation Management System developed using
            React and .NET Core to streamline logistics operations. The platform
            includes modules for Product Management, Contract Management, Load Board,
            and Quote Management, enabling efficient shipment planning, rate handling,
            and operational coordination. Built with PostgreSQL and microservices
            architecture to ensure scalability, performance, and data consistency.
          </p>
          <button
            className="btn btn-outline-dark w-fit"
            onClick={() => handleNavigation("/project/tms-project")}
          >
            View Project
          </button>
        </div>
        <div className="project-image">
          <img
            src="/project-1.png"
            width={400}
            height={250}
            alt="Transportation Management System Dashboard"
          />
        </div>
      </div>


      {/* === Project 2 === */}
      <div className="project-card d-flex flex-column flex-md-row mb-5 shadow-sm reverse">
        <div className="project-image">
          <img src="/project-2.png" alt="AI Document Management System" />
        </div>
        <div className="project-text p-4 d-flex flex-column justify-content-center">
          <h4 className="fw-bold mb-3">AI-Powered Document Processing System</h4>
          <p className="text-muted mb-4">
            An intelligent document management platform that automates document
            ingestion, classification, validation, and data extraction using
            LLMs. Built with React and a .NET backend, the system integrates a
            custom MCP (Model Context Protocol) server to securely connect AI
            models with internal tools, APIs, and data sources for contextual
            reasoning and workflow automation.
          </p>
          <button className="btn btn-outline-dark w-fit">
            View Project
          </button>
        </div>
      </div>

    </div>
  );
}
