import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";

export default function SignupSection() {
  // style in form
  const [isTranslateFirstName, setTranslateFirstName] = useState(false);
  const [isTranslateLastName, setTranslateLastName] = useState(false);
  const [isTranslateEmail, setTranslateEmail] = useState(false);
  const [isTranslatePhone, setTranslatePhone] = useState(false);
  const [isTranslatePassword, setTranslatePassword] = useState(false);
  const [isTranslateConfirmPassword, setTranslateConfirmPassword] =
    useState(false);

  // firstName input event
  function changeFirstNameInput(e) {
    if (e.target.value != "") {
      setTranslateFirstName(true);
    } else {
      setTranslateFirstName(false);
    }
  }

  // lastName input event
  function changeLastNameInput(e) {
    if (e.target.value != "") {
      setTranslateLastName(true);
    } else {
      setTranslateLastName(false);
    }
  }

  // email input event
  function changeEmailInput(e) {
    if (e.target.value != "") {
      setTranslateEmail(true);
    } else {
      setTranslateEmail(false);
    }
  }

  // phone input event
  function changePhoneInput(e) {
    if (e.target.value != "") {
      setTranslatePhone(true);
    } else {
      setTranslatePhone(false);
    }
  }

  // password input event
  function changePasswordInput(e) {
    if (e.target.value != "") {
      setTranslatePassword(true);
    } else {
      setTranslatePassword(false);
    }
  }

  // password input event
  function changeConfirmPasswordInput(e) {
    if (e.target.value != "") {
      setTranslateConfirmPassword(true);
    } else {
      setTranslateConfirmPassword(false);
    }
  }

  // validation form
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is Required"),
    lastname: Yup.string().required("Last Name is Required"),
    email: Yup.string().required("Email is Required").email("Email is Invalid"),
    phone: Yup.string().required("Phone is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 character or more")
      .required("Password is Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password not match")
      .required("Confirm Password is Required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get function to build form with useform() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  // onsubmit event
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <section className="bg-gray-800 mx-auto rounded-md max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-10 lg:m-auto">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <Image
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-auto h-auto"
              width={500}
              height={500}
              alt="login-image"
              priority={true}
            />
          </div>

          {/* Right column container */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign Up with</p>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </div>

              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  Or
                </p>
              </div>

              <div className="flex mb-6 mt-6">
                {/* First Name */}
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name="firstname"
                    className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    }`}
                    id="ilmLoginFormControlInputFirstName"
                    {...register("firstname")}
                    onChange={(e) => {
                      changeFirstNameInput(e);
                    }}
                  />
                  <label
                    htmlFor="ilmLoginFormControlInputFirstName"
                    className={`${
                      isTranslateFirstName ? "-translate-y-[0.9rem]" : ""
                    } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                  >
                    First Name
                  </label>
                  {/* error alert start */}
                  <div className="invalid-feedback text-red-500 text-sm">
                    {errors.firstname?.message}
                  </div>
                  {/* error alert end */}
                </div>
                {/* Last Name */}
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name="lastname"
                    className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    }`}
                    id="ilmLoginFormControlInputLastName"
                    {...register("lastname")}
                    onChange={(e) => {
                      changeLastNameInput(e);
                    }}
                  />
                  <label
                    htmlFor="ilmLoginFormControlInputLastName"
                    className={`${
                      isTranslateLastName ? "-translate-y-[0.9rem]" : ""
                    } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                  >
                    Last Name
                  </label>
                  {/* error alert start */}
                  <div className="invalid-feedback text-red-500 text-sm">
                    {errors.lastname?.message}
                  </div>
                  {/* error alert end */}
                </div>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  {...register("email")}
                  onChange={(e) => {
                    changeEmailInput(e);
                  }}
                />
                <label
                  htmlFor="exampleFormControlInput2"
                  className={`${
                    isTranslateEmail ? "-translate-y-[0.9rem]" : ""
                  } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                >
                  Email address
                </label>
                {/* error alert start */}
                <div className="invalid-feedback text-red-500 text-sm">
                  {errors.email?.message}
                </div>
                {/* error alert end */}
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlPhone"
                  placeholder="Phone"
                  {...register("phone")}
                  onChange={(e) => {
                    changePhoneInput(e);
                  }}
                />
                <label
                  htmlFor="exampleFormControlPhone"
                  className={`${
                    isTranslatePhone ? "-translate-y-[0.9rem]" : ""
                  } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                >
                  Phone
                </label>
                {/* error alert start */}
                <div className="invalid-feedback text-red-500 text-sm">
                  {errors.phone?.message}
                </div>
                {/* error alert end */}
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlPassword"
                  placeholder="Password"
                  {...register("password")}
                  onChange={(e) => {
                    changePasswordInput(e);
                  }}
                />
                <label
                  htmlFor="exampleFormControlPassword"
                  className={`${
                    isTranslatePassword ? "-translate-y-[0.9rem]" : ""
                  } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                >
                  Password
                </label>
                {/* error alert start */}
                <div className="invalid-feedback text-red-500 text-sm">
                  {errors.password?.message}
                </div>
                {/* error alert end */}
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlConfirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmpassword")}
                  onChange={(e) => {
                    changeConfirmPasswordInput(e);
                  }}
                />
                <label
                  htmlFor="exampleFormControlConfirmPassword"
                  className={`${
                    isTranslateConfirmPassword ? "-translate-y-[0.9rem]" : ""
                  } pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                >
                  Confirm Password
                </label>
                {/* error alert start */}
                <div className="invalid-feedback text-red-500 text-sm">
                  {errors.confirmpassword?.message}
                </div>
                {/* error alert end */}
              </div>

              <div className="text-center mt-5 lg:text-left">
                <button
                  type="submit q"
                  className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Sign Up
                </button>

                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account?
                  <Link
                    href="/signup"
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
