import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import env from "../../application/environment/env.json";

const Blog: React.FC = () => {
  const [data, setData] = useState([]);
  const fetchEvents = async () => {
    await axios.get(`${env.host}/api/get/events`).then((result: any) => {
      setData(result.data);
    });
  };
  const { isLoading } = useQuery("Events", fetchEvents);
  return (
    <>
      <section id="recent-blog-posts" className="recent-blog-posts">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <h2>Blog</h2>
            <p>Recent posts form our Blog</p>
          </header>

          <div className="row">
            {!isLoading &&
              data.map((item: any) => {
                return (
                  <>
                    <div className="col-lg-4">
                      <div className="post-box">
                        <div className="post-img">
                          <img src={item.image} className="img-fluid" alt="" />
                        </div>
                        <span className="post-date">{item.date}</span>
                        <h3 className="post-title">{item.title}</h3>
                        <a
                          href="blog-singe.html"
                          className="readmore stretched-link mt-auto"
                        >
                          <span>Read More</span>
                          <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
