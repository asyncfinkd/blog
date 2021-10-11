import React from "react";

const Blog: React.FC = () => {
  return (
    <>
      <section id="recent-blog-posts" className="recent-blog-posts">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <h2>Blog</h2>
            <p>Recent posts form our Blog</p>
          </header>

          <div className="row">
            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span className="post-date">Tue, September 15</span>
                <h3 className="post-title">
                  Eum ad dolor et. Autem aut fugiat debitis voluptatem
                  consequuntur sit
                </h3>
                <a
                  href="blog-singe.html"
                  className="readmore stretched-link mt-auto"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span className="post-date">Fri, August 28</span>
                <h3 className="post-title">
                  Et repellendus molestiae qui est sed omnis voluptates magnam
                </h3>
                <a
                  href="blog-singe.html"
                  className="readmore stretched-link mt-auto"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <span className="post-date">Mon, July 11</span>
                <h3 className="post-title">
                  Quia assumenda est et veritatis aut quae
                </h3>
                <a
                  href="blog-singe.html"
                  className="readmore stretched-link mt-auto"
                >
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
