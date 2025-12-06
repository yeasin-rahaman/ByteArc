import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <div>
      <div className="about-us-page">

        {/* Page Title & Intro */}
        <section className="py-5 text-center bg-light">
          <div className="container">
            <h1 className="fw-bold">About Us</h1>
            <p className="lead mt-3">
              We are a passionate team dedicated to delivering high quality digital solutions that help businesses grow.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold mb-3">Our Story</h2>
            <p className="text-muted">
              Founded with a vision to simplify digital transformation, our company has grown into a reliable partner for clients worldwide.
              We focus on building modern, scalable, and user friendly web solutions. With every project, we aim to
              combine creativity and technology to deliver outstanding results.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">Meet the Team</h2>

            <div className="row g-4">
              {[1, 2, 3].map((item) => (
                <div className="col-md-4" key={item}>
                  <div className="card shadow-sm">
                    <img
                      src="https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3"
                      className="card-img-top"
                      alt="Team member" />

                    <div className="card-body">
                      <h5 className="card-title">John Doe {item}</h5>
                      <p className="card-text text-muted">Senior Developer</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-5">
          <div className="container">
            <h2 className="fw-bold mb-4">Mission & Vision</h2>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="p-4 rounded bg-light h-100 shadow-sm">
                  <h4 className="fw-bold">Our Mission</h4>
                  <p className="text-muted">
                    To empower businesses with innovative, reliable, and user friendly digital solutions that drive growth and success.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="p-4 rounded bg-light h-100 shadow-sm">
                  <h4 className="fw-bold">Our Vision</h4>
                  <p className="text-muted">
                    To become a global leader in delivering modern web solutions that create value and long term impact.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 text-center bg-dark text-white">
          <div className="container">
            <h3 className="mb-3">Ready to work with us?</h3>
            <p className="mb-4">Let us help you build something amazing.</p>

            <Link to="/contact" className="btn btn-about primary px-4 py-2">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;