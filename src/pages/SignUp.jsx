import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { BsFacebook } from 'react-icons/bs';

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
              <svg className="mr-[12px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
              </svg>
              Continue with Facebook
            </button>
            <button className="-2 mt-[10px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <svg className="mr-[12px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Continue with Google
            </button>
            <button className="-2 mt-[10px] flex items-center justify-center h-[48px] rounded-[24px] border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-transparent hover:bg-black hover:text-white">
              <svg className="mr-[12px]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
              </svg>
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
