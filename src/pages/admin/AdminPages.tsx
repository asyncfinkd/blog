import React, { useContext, useEffect } from "react";
import { useToggle } from "../../lib/use-toggle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../styles/admin/signin/AdminSignin.css";
import { useMutation } from "@apollo/client";
import { ADMIN_LOGIN_MUTATION } from "../../api/Mutation";
import { ApplicationContext } from "../../context/application/ApplicationContext";
import { useState } from "react";

type Inputs = {
  email: string;
  password: string;
};

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const { setJwtDecode } = useContext(ApplicationContext);
  const [adminIdentification, { data, loading }] =
    useMutation(ADMIN_LOGIN_MUTATION);
  const [showLoginNotification, setShowLoginNotification] =
    useState<Boolean>(false);

  useEffect(() => {
    if (data) {
      if (data.adminIdentification.text == null) {
        setJwtDecode(data.adminIdentification.access_token);
        localStorage.setItem("local", data.adminIdentification.access_token);
        setShowLoginNotification(false);
      } else {
        setShowLoginNotification(true);
      }
    }
  }, [data]);

  const [showPassword, setShowPassword] = useToggle();
  return (
    <>
      <div className="form__admin__containerBody">
        <form
          onSubmit={handleSubmit((data: Inputs) => {
            adminIdentification({
              variables: {
                email: data.email,
                password: data.password,
              },
            });
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
            {showLoginNotification && (
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
              {loading ? "დაელოდეთ..." : "შესვლა"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminPages;
