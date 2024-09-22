import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import auth from "../../Firebase/Firebase.config";

const Register = () => {
  const [show, setShow] = useState(true);
  // Navigate
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (data) => {
    const { name, photo, email, password } = data;
    console.log(email, password);

    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    if (!/.*[a-z].*/.test(password)) {
      setError("Password must have an lowercase");
      return;
    }
    if (!/.*[A-Z].*/.test(password)) {
      setError("Password must have an Uppercase");
      return;
    }

    registerUser(email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("username set successful"))
          .catch((error) => console.error(error));

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register successful",
          // text: `Welcome ${data?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });

        // toast.success("Successfully registered");
        navigate(location?.state ? location.state : "/");
        console.log("registerd Successfull");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          //   toast.error("Email Already In use");
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Email Already In use",
            showConfirmButton: false,
            timer: 1000,
          });
          console.log("Email already use");
        }
        console.error(error);
      });
  };
  return (
    <div className="flex justify-center items-center  h-screen">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md shadow-blue-600">
        <h1 className="text-2xl font-bold text-center">Register Now</h1>
        <form
          noValidate=""
          action=""
          className="space-y-6"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.name && <p className="text-red-600">Name is required.</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              {...register("photo", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.photo && <p className="text-red-600">Photo is required.</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {errors.email && <p className="text-red-600">Email is required.</p>}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {error && <span className="text-red-600 text-sm">{error}</span>}
            {errors.password && (
              <p className="text-red-600">Password is required.</p>
            )}
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-8 text-xl hover:cursor-pointer"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
            <div className="flex justify-end text-xs dark:text-gray-600"></div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-orange-500">
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link className="link-primary" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
