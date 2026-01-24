import { useNavigate } from "react-router-dom";
import "./tms-project.scss";

export default function TmsProject() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="project-details container py-5">
      {/* Back Navigation */}
      <div className="row mb-4">
        <span
          className="back-navigation d-flex justify-content-start"
          onClick={() => handleNavigation("/project")}
        >
          ← Back to Projects
        </span>
      </div>

      {/* Title */}
      <h2 className="text-center project-title mb-3">
        Transport Management System (TMS)
      </h2>
      <div className="underline mb-5"></div>

      {/* Description Section */}
      <div className="project-content d-flex flex-column flex-md-row align-items-center mb-5">
        <div className="project-image mb-4 mb-md-0 me-md-5">
          <img
            src="/myportfolio/project-1.png"
            alt="TMS Dashboard"
            className="img-fluid rounded-3 shadow-sm"
          />
        </div>
        <div className="project-text">
          <p className="text-muted fs-5">
            I worked on an enterprise-grade <strong>Transportation Management System (TMS)</strong>
            for a 3PL logistics platform designed to streamline and manage end-to-end
            transportation operations. The system handled core entities such as
            <strong> carriers</strong>, <strong>customers</strong>, <strong>bill-to accounts</strong>,
            <strong> tenants</strong>, and <strong>logistics plans</strong>, ensuring seamless
            coordination across multiple stakeholders.
          </p>

          <p className="text-muted fs-5">
            My role as a <strong>.NET Full-Stack Developer</strong> involved contributing to
            the design and development of several key business modules, including:
          </p>

          <ul className="text-muted fs-6">
            <li><strong>Product Management</strong> – Configuring transportation products and service offerings</li>
            <li><strong>Contract Management</strong> – Managing carrier and customer contracts, rate structures, and validity periods</li>
            <li><strong>Rating & Pricing</strong> – Implementing pricing logic based on routes, contracts, and business rules</li>
            <li><strong>Order Lifecycle Management</strong> – Supporting end-to-end shipment flow from order placement to delivery</li>
            <li><strong>Load Board & Tendering</strong> – Enabling load posting, carrier assignment, and tender workflows</li>
            <li><strong>Tracking & Exception Handling</strong> – Monitoring shipment progress and resolving operational issues</li>
          </ul>

          <p className="text-muted fs-5">
            I developed responsive frontend interfaces using <strong>React.js</strong> and
            <strong> Bootstrap</strong>, and built backend services with <strong>.NET Core</strong>
            and <strong>PostgreSQL</strong>. The system followed a clean, modular architecture
            with domain-driven design principles and event-based tracking for state changes.
          </p>
        </div>

      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack my-5">
        <h4 className="fw-bold mb-3">Tech Stack</h4>
        <ul className="text-muted fs-6">
          <li>Frontend: React, TypeScript, Bootstrap</li>
          <li>Backend: .NET Core, C#, Marten (Event Sourcing), PostgreSQL</li>
          <li>Other Tools: AutoMapper, Swagger, OpenAI Integration</li>
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn btn-outline-dark px-4"
          onClick={() => handleNavigation("/project")}
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
}
