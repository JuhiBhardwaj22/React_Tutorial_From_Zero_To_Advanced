import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { GoogleButton } from "react-google-button";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const SingIn = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = () => {
    navigate("/");
  };
  const handleGoogleSignIn = () => {
    console.log("hello Google");
  };
  return (
    <div className="test" id="test">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <div className="flex-block ml-96 mt-48">
              <div className="mb-10">
                {/* <span className="xl font-bold text-blue-800">Login !!</span> */}
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-96 h-10 border rounded-lg border-slate-500 mr-4 shadow-md focus:outline-blue-500"
                />
                {/* If validation is not passed show errors */}
                <p className="md text-red-600">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
              <div className="mb-8">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-96 h-10 border rounded-lg border-slate-500  shadow-md focus:outline-blue-500"
                />
                {/* If validation is not passed show errors */}
                <p className="md text-red-600">
                  {errors.password && touched.password && errors.password}
                </p>
              </div>

              <button
                type="submit"
                className="ml-40 border rounded-full w-24 h-10 bg-blue-400"
              >
                SingIn
              </button>
              <div className="my-4 ml-20">
                <GoogleButton type="dark" onClick={handleGoogleSignIn} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SingIn;
