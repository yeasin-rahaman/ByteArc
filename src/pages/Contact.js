import React, { useState } from "react";
import contactUs from "./../Assets/img/ContactUs.gif"
const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }
    setErrors({});
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section container py-5">

      {/* Top: Contact info + Map */}
      <div className="row mb-5">
        {/* Contact Details */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold mb-4">Contact Info</h2>
          <p>
            <i className="fas fa-map-marker-alt me-2"></i>
            123 Street, Dhaka, Bangladesh
          </p>
          <p>
            <i className="fas fa-envelope me-2"></i>
            info@example.com
          </p>
          <p>
            <i className="fas fa-phone me-2"></i>
            +880 1234 567 890
          </p>
          <div className="mt-3 d-flex gap-3">
            <a href="#" className="fs-4 text-dark">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="fs-4 text-dark">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="fs-4 text-dark">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>


        {/* Map */}
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9033630192296!2d90.40166091542425!3d23.77717698456908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7d9b6c8b3%3A0x6f3f9b6f1e0a7bd8!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1701760000000!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom: Form + Image */}
      <div className="row align-items-center justify-content-center">
        {/* Contact Form */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-4">Send a Message</h3>
          {success && (
            <div className="alert alert-success">
              Your message has been sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Your Name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Your Email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                placeholder="Your Message"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        {/* Image */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src={contactUs}
            alt="Contact"
            className="img-fluid "
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
