import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";
import { reactLocalStorage } from "reactjs-localstorage";

import { useHistory } from "react-router-dom";

export const Form = () => {
  // const [loginToken, setLoginoken] = useState("");

  const history = useHistory();
  const { register, handleSubmit } = useForm({
    validateCriteraMode: "all",
    mode: "onChange",
  });

  const onSubmit = (data) => {
    axios
      .post("http://51.195.148.112/api/admin/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then(({ data }) => {
        reactLocalStorage.set("token", data.token);
        if (reactLocalStorage.get("token")) {
          history.push("dashboard");
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        alert("incorrect password");
      });
  };
  return (
    <div>
      <h1>Log In </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            className="form-control"
            name="email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            className="form-control"
            name="password"
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          log In
        </button>
      </form>
    </div>
  );
};

export default Form;
