import { useForm } from "react-hook-form";
import SideImage from "./SideImage";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import google from "../../public/assets/icons/google.svg";
import github from "../../public/assets/icons/github.svg";
import facebook from "../../public/assets/icons/facebook.svg";
import microsoft from "../../public/assets/icons/microsoft.png";
const SignupForm = () => {
  const [isHide, setIsHide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const username = data.username;
    const email = data.email;
    const password = data.password;
    console.log(name, username, email, password);
  };

  return (
    <div className="flex justify-center">
      <SideImage />
      <div className="min-h-screen py-8 flex flex-col justify-center items-center flex-1">
        <div className="space-y-3 text-center md:text-left lg:pr-[135px] mb-10 md:mb-12">
          <h2 className="text-4xl font-semibold ">Sign Up Now!</h2>
          <p>To use DiveIn, Please enter your details.</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-6 md:gap-8 max-w-lg mx-auto"
        >
          {/* name input field */}
          <div>
            <label htmlFor="name" className="form_label">
              Name
            </label>
            <input
              type="text"
              className="input"
              id="name"
              placeholder="Type your name"
              {...register("name", { required: true, maxLength: 16 })}
            />
            {errors.name?.type === "required" && (
              <span className="form_message">Name is required</span>
            )}
            {errors.name?.type === "maxLength" && (
              <span className="form_message">
                Name must be less then 16 characters.
              </span>
            )}
          </div>

          {/* Username input field */}
          <div>
            <label htmlFor="username" className="form_label">
              Username
            </label>
            <input
              type="text"
              className="input"
              id="username"
              placeholder="Type your username"
              {...register("username", { required: true, maxLength: 16 })}
            />
            {errors.username?.type === "required" && (
              <span className="form_message">Username is required</span>
            )}
            {errors.username?.type === "maxLength" && (
              <span className="form_message">
                Username must be less then 16 characters.
              </span>
            )}
          </div>
          {/* email input field */}
          <div>
            <label htmlFor="email" className="form_label">
              Email
            </label>
            <input
              type="email"
              className="input"
              id="email"
              placeholder="Type your email"
              {...register("email", { required: true })}
            />
            {errors.email?.type === "required" && (
              <span className="form_message">Email is required</span>
            )}
          </div>
          {/* password input field */}
          <div className="relative">
            <label htmlFor="password" className="form_label">
              Password
            </label>
            <input
              type={isHide ? "text" : "password"}
              className="input"
              id="password"
              placeholder="Type your password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern:
                  /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
              })}
            />
            <p
              onClick={() => setIsHide(!isHide)}
              className="absolute top-[60%] right-3 cursor-pointer text-lg"
            >
              {isHide ? <FaEyeSlash /> : <FaEye />}
            </p>
            {errors.password?.type === "required" && (
              <span className="form_message">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="form_message">
                Password must be 6 characters.
              </span>
            )}
            {errors.password?.type === "maxLength" && (
              <span className="form_message">
                Password must be less then 16 characters.
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="form_message">
                Password must be have a capital letter , a small letter and also
                have a special characters.
              </span>
            )}
          </div>

          <button className="button_primary w-full" type="submit">
            Sign up
          </button>
        </form>
        <p className="my-6 text-left text-sm">
          Already have an account
          <Link to="/signin" className="underline ml-1">
            Sign In
          </Link>
        </p>
        <div className="flex items-center justify-center w-full max-w-64 lg:max-w-sm  mx-auto">
          <div className="h-px bg-gray-300 w-full"></div>
          <div className="mx-4 text-gray-200">OR</div>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-5 mt-8 text-gray-800 text-sm lg:text-2xl font-bold max-w-xs px-4 lg:px-0  lg:max-w-[445px]  w-full">
          {/* google */}
          <div className="border p-1 rounded-lg bg-light-2 flex gap-2 items-center cursor-pointer w-full">
            <img src={google} alt="google" className="w-6 lg:w-8" />
            <p>Google</p>
          </div>
          {/* microsoft */}
          <div className="border p-1 rounded-lg bg-light-2 flex gap-1  items-center cursor-pointer">
            <img src={microsoft} alt="microsoft" className="w-6 lg:w-8" />
            <p>Microsoft</p>
          </div>
          {/* github */}
          <div className="border p-1 rounded-lg bg-light-2 flex gap-1 items-center cursor-pointer">
            <img src={github} alt="github" className="w-6 lg:w-8" />
            <p>Github</p>
          </div>
          {/* facebook */}
          <div className="border p-1 rounded-lg bg-light-2 flex gap-1 items-center  cursor-pointer">
            <img src={facebook} alt="facebook" className="w-6 lg:w-8" />
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
