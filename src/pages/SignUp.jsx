import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const validate = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignUp = () => {
  return (
    <div className="w-[90%] mx-auto lg:w-full flex justify-center mt-[47px]">
      <div className="relative flex flex-wrap bg-white w-[875px] rounded-3xl overflow-hidden mb-[20px]">
        <img
          className="hidden md:block absolute right-0 text-black z-10"
          src="/images/skin-logo.png"
          alt="Logo"
        />
        <div className="flex w-full flex-col md:w-1/2 px-2">
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <p className="text-left text-[34px] font-[400]">
              CREATE AN ACCOUNT
            </p>
            <p className="mt-4 text-[14px] font-[400] text-[#797b7e]">
              Already have an account?
              <a href="/login" className="underline text-[#4C4D4F]">
                Login
              </a>
            </p>
            <button className="-2 mt-[39px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <img
                className="mr-2 h-5"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                alt="Google"
              />
              Continue with Google
            </button>
            <button className="-2 mt-[10px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <img
                className="mr-2 h-5"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                alt="Facebook"
              />
              Continue with Facebook
            </button>
            <button className="-2 mt-[10px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <img
                className="mr-2 h-5"
                src="https://static.cdnlogo.com/logos/g/35/google-icon.svg"
                alt="Twitter"
              />
              Continue with Twitter
            </button>
            <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
              <div className="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-white text-center text-sm text-gray-500">
                or
              </div>
            </div>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form className="flex flex-col pt-3 md:pt-8">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col pt-4 w-[45%]">
                    <label
                      htmlFor="firstName"
                      className="text-[14px] font-[400] text-[##4C4D4F]"
                    >
                      First Name
                    </label>
                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                    <ErrorMessage
                      className="text-sm text-red-600"
                      component="p"
                      name="firstName"
                    />
                  </div>
                  <div className="flex flex-col pt-4 w-[45%]">
                    <label
                      htmlFor="lastName"
                      className="text-[14px] font-[400] text-[##4C4D4F]"
                    >
                      Last Name
                    </label>
                    <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                    <ErrorMessage
                      className="text-sm text-red-600"
                      component="p"
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-4">
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
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    className="text-sm text-red-600"
                    component="p"
                    name="email"
                  />
                </div>
                <div className="mb-12 flex flex-col pt-4">
                  <label
                    htmlFor="password"
                    className="text-[14px] font-[400] text-[##4C4D4F]"
                  >
                    Password
                  </label>
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    className="text-sm text-red-600"
                    component="p"
                    name="password"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    className="w-[24px] h-[24px] rounded-lg border border-[#4C4D4F] mr-[9px]"
                    type="checkbox"
                  />
                  <p className="text-[12px] font-[400] text-[#4C4D4F]">
                    Subscribe to our monthly newslatter
                  </p>
                </div>
                <p className="text-[12px] font-[400] text-[#797b7e] my-[12px]">
                  By clicking below you agree to our{" "}
                  <a className="text-[#4C4D4F] underline" href="/">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="text-[#4C4D4F] underline" href="/">
                    Privacy Policy
                  </a>
                </p>
                <button
                  type="submit"
                  className="w-full rounded-[24px] bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                >
                  Sign Up
                </button>
              </Form>
            </Formik>

            <div className="py-12 text-center">
              <p className="text-[12px] font-[400] text-[#797b7e]">
                Already have an account?
                <a href="/login" className="underline text-[#4C4D4F]">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none relative hidden select-none md:block md:w-1/2">
          <img
            className="-z-1 absolute top-0 w-full object-fit h-[953px] "
            src="./images/signup.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
