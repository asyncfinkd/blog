import React, { useContext, useEffect } from "react";
import { useToggle } from "../../lib/use-toggle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../styles/admin/signin/AdminSignin.css";
import { ApplicationContext } from "../../context/application/ApplicationContext";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import env from "../../application/environment/env.json";
import { useCookies } from "react-cookie";
import Helmet from "react-helmet";
import { Inputs } from "../../types/admin/AdminPagesTypes";

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .trim()
      .required("შეიყვანეთ ელექტრონული ფოსტა")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "არასწორი ფორმატი"
      ),
    password: yup.string().required("შეიყვანეთ პაროლი"),
  })
  .required();

const AdminPages: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [cookies, setCookie] = useCookies(["local"]);
  const mutation = useMutation((identification: any) => {
    return axios
      .post(`${env.host}/api/login`, identification)
      .then((result) => {
        if (result.data.success === true) {
          setCookie("local", result.data.access_token);
          setJwtDecode(result.data.access_token);
          history.push("/admin/dashboard");
        } else {
          setError(true);
        }
      });
  });
  const { pathname } = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (cookies.local) {
      history.push("/admin/dashboard");
    }
  }, [cookies.local]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const { setJwtDecode } = useContext(ApplicationContext);

  const [showPassword, setShowPassword] = useToggle();
  return (
    <>
      <Helmet>
        <title>
          ადმინისტრატორით შესვლა – ბავშვთა უფლებების "ცოდნის ცენტრი"
        </title>
      </Helmet>
      <div className="form__admin__containerBody">
        <form
          onSubmit={handleSubmit((data: Inputs) => {
            mutation.mutate({ email: data.email, password: data.password });
          })}
          className="form__admin__container"
        >
          <h2 className="form__admin__title">შესვლა ადმინისტრატორით</h2>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              autoFocus
              placeholder="ელექტრონული ფოსტა"
              className="form__admin__input"
              {...register("email")}
            />
            <br />
            {errors.email && (
              <small className="form__admin__errorLabel">
                {errors?.email?.message}
              </small>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              className="form__admin__input"
              placeholder="პაროლი"
              {...register("password")}
            />
            <br />
            {errors.password && (
              <small className="form__admin__errorLabel">
                {errors?.password?.message}
              </small>
            )}
            {error && (
              <small className="form__admin__errorLabel">
                ელ.ფოსტა ან პაროლი არასწორია
              </small>
            )}
            <div
              className={
                showPassword
                  ? "form__admin__passwordEye form__admin__passwordShowEye"
                  : "form__admin__passwordEye form__admin__passwordHideEye"
              }
              onClick={() => {
                setShowPassword();
              }}
            ></div>
          </div>
          <div>
            <button className="form__admin__button" type="submit">
              {mutation.isLoading ? "დაელოდეთ..." : "შესვლა"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminPages;
