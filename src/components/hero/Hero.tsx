import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className="aos-init aos-animate">
                We offer modern solutions for growing your business
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                className="aos-init aos-animate"
              >
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="600"
                className="aos-init aos-animate"
              >
                <div className="text-center text-lg-start">
                  <a
                    href="#about"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
