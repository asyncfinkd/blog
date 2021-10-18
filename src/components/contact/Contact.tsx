import axios from "axios";
import React from "react";
import { useMutation } from "react-query";
import env from "application/environment/env.json";
import { ContactInputs } from "types/contact/ContactTypes";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

const schema = yup
  .object()
  .shape({
    username: yup.string().trim().required("Please enter a username"),
    email: yup
      .string()
      .trim()
      .required("Please enter a email")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Incorrect validation"
      ),
    subject: yup.string().trim().required("Please enter a subject"),
    message: yup.string().trim().required("Please enter a message"),
  })
  .required();

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactInputs>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation((identification: any) => {
    return axios
      .post(`${env.host}/api/contact`, identification)
      .then((result: any) => {
        if (result.success == true) {
          setValue("username", "");
          setValue("email", "");
          setValue("subject", "");
          setValue("message", "");
          toast.success("Your Application Sent Success");
        }
      });
  });
  return (
    <>
      <ToastContainer />
      <section id="contact" className="contact">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>
                      A108 Adam Street,
                      <br />
                      New York, NY 535022
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +1 5589 55488 55
                      <br />
                      +1 6678 254445 41
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                className="php-email-form"
                onSubmit={handleSubmit((data: ContactInputs) => {
                  mutation.mutate({
                    username: data.username,
                    email: data.email,
                    subject: data.email,
                    message: data.message,
                  });
                })}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      {...register("username")}
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      {...register("email")}
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      {...register("subject")}
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="Message"
                      {...register("message")}
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
