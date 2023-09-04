import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validate = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[90%] mx-auto lg:w-full flex justify-center mt-[47px]">
      <div className="relative px-2  flex flex-wrap bg-white w-[875px] rounded-3xl overflow-hidden mb-[20px]">
        <img
          className="hidden md:block absolute right-0 text-black z-10"
          src="/images/skin-logo.png"
          alt="Logo"
        />
        <div className="flex w-full flex-col md:w-1/2">
          <div className="lg:w-[28rem] py-[25px] mx-auto my-auto flex flex-col justify-center md:justify-start md:px-6">
            <p className="text-left text-[34px] font-[400]">
              Forgot your password?
            </p>
            <p className="mt-4 text-[14px] font-[400] text-[#797b7e]">
              No worries, enter your email below to get instructions to reset
              your password
            </p>

            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
                navigate("/reset-password");
              }}
            >
              <Form className="flex flex-col pt-3 md:pt-8">
                <div className="flex flex-col pt-4 mb-3">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-[400] text-[##4C4D4F]"
                  >
                    Email
                  </label>
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 pb-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    className="text-sm text-red-600"
                    component="p"
                    name="email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-[24px] bg-gray-900 px-4 mt-3 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                >
                  Reset Password
                </button>
              </Form>
            </Formik>
            <a
              href="/login"
              className="mt-2 underline text-center text-[14px] font-[400] text-[#797b7e]"
            >
              I remember my password
            </a>
          </div>
        </div>
        <div className="pointer-events-none relative hidden select-none md:block md:w-1/2">
          <img
            className="-z-1 absolute top-0 w-full object-fit"
            src="./images/forgot.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
