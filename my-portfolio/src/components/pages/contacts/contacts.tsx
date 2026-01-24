import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faUser,
  faPhoneAlt,
  faHome,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./contact.scss";
import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  const [active, setActive] = useState<"location" | "phone" | "email" | null>(
    "location"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleClick = (type: "location" | "phone" | "email") => {
    setActive(type);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = async () => {
    // Send form data to your email using an email service like EmailJS, SMTPJS, or your backend
    const mailData = {
      ...formData,
      to: "abhinavpagadala2201@gmail.com",
    };
    console.log("Sending mail:", mailData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-main-div">
      <div className="d-flex justify-content-end gap-4 mb-4">
        <span onClick={() => handleNavigation("/")} className="about-links">
          <FontAwesomeIcon icon={faHome} />
          Home
        </span>
        <span
          className="about-links"
          onClick={() => handleNavigation("/project")}
        >
          <FontAwesomeIcon icon={faFolderOpen} />
          Projects
        </span>
      </div>
      <h2 className="mt-4">Get in touch!</h2>
      <p>Contact us for a quote, help or to join the team.</p>

      {/* Contact Info */}
      <div className="contact-info">
        <div
          className={`info-item ${active === "location" ? "active" : ""}`}
          onClick={() => handleClick("location")}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <span>Hyderabad</span>
        </div>
        <div
          className={`info-item ${active === "phone" ? "active" : ""}`}
          onClick={() => handleClick("phone")}
        >
          <FontAwesomeIcon icon={faPhone} className="info-icon" />
          <span>+91 733 73 71 724</span>
        </div>
        <div
          className={`info-item ${active === "email" ? "active" : ""}`}
          onClick={() => handleClick("email")}
        >
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <span>abhinavpagadala2201@gmail.com</span>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        {active === "phone" && (
          <div className="phone-card">
            <p className="phone-name">Abhinav Pagadala</p>
            <p className="phone-number">+91 7337371724</p>
            <p className="phone-email">abhinavpagadala2201@gmail.com</p>
          </div>
        )}

        {active === "location" && (
          <>
            <div className="location-card">
              <div className="location-address">
                Plot No: 124, ARK Chambers, Kavuri Hills Phase 1, Jubilee Hills,
                Hyderabad – 500033, Telangana, India.
              </div>
              <div className="location-map">
                {/* Google Map iframe */}
                <iframe
                  title="My Location"
                  src="https://www.google.com/maps?q=124+ARK+Chambers+Kavuri+Hills+Hyderabad&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </>
        )}
        {active === "email" && (
          <>
            <div className="form-left">
              <label>
                Your Name
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label>
                Mail
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </label>

              <label>
                Phone
                <div className="input-wrapper">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </label>
            </div>

            <div className="form-right">
              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </label>
            </div>
          </>
        )}
      </div>
      {active === "email" && (
        <>
          <button className="btn btn-warning" onClick={handleSend}>
            Send Message
          </button>
        </>
      )}
    </div>
  );
}
