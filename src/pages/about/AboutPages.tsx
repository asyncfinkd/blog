import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { ForLoading } from "../../utils/load/loadjs";

const About: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section id="about" className="about hero d-flex align-items-center">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                  Expedita voluptas omnis cupiditate totam eveniet nobis sint
                  iste. Dolores est repellat corrupti reprehenderit.
                </h2>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="#"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Read More</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center aos-init aos-animate"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
