import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const SignUp = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!nama || !email || !password) {
      setMsg("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3003/auth/register",
        {
          nama: nama,
          email: email,
          password: password,
        }
      );

      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Akun Berhasil Dibuat",
        showConfirmButton: false,
        timer: 2000,
      });

      navigate("/signin");
    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "Email has been used") {
          Swal.fire({
            icon: "error",
            title: "Email Sudah Digunakan",
            text: "Gunakan email lain untuk registrasi.",
          });
        } else {
          setMsg(errorMessage);
        }
      } else {
        setMsg("Registration failed. Please try again later.");
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateToLogin = () => {
    navigate("/signup");
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div
          className="sm:block bg-cover"
          style={{ backgroundImage: "url('/assets/Login.jpg')" }}
        ></div>
        <div className="bg-[#ffffff] flex flex-col justify-center">
          <form
            onSubmit={handleRegister}
            className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg"
          >
            <h2 className="text-4xl dark:text-black font-bold text-center">
              SignUp
            </h2>
            {msg && <p className="text-red-500 text-center py-3">{msg}</p>}

            <div className="flex flex-col text-black py-2">
              <label>Nama</label>
              <input
                className="flex-1 rounded-[10px] border mt-2 p-2 pl-5 text-black focus:border-grey-500 focus:outline-none"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Your Name"
              />
              {submitted && !email && <p className="text-red-500">Nama is required</p>}
            </div>
            <div className="flex flex-col text-black py-2">
              <label>Email</label>
              <input
                className="flex-1 rounded-[10px] border mt-2 p-2 pl-5 focus:border-grey-500 text-black focus:outline-none"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
              {submitted && !email && <p className="text-red-500">Email is required</p>}
            </div>
            <div className="flex flex-col text-gray-600 py-2 relative">
              <label htmlFor="password">Password</label>
              <div className="relative flex">
                <input
                  className="flex-1 rounded-[10px] border mt-2 p-2 pl-5 text-black focus:border-grey-500 focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Your Password"
                />
                <button
                  className="absolute left-72 p-3 mt-2.5"
                  type="button"
                  onClick={handleToggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {submitted && !email && <p className="text-red-500">Password is required</p>}
            </div>
            <button
              className="w-full my-2 py-4 bg-black text-white font-semibold rounded-[30px] hover:bg-gray-800"
              onClick={navigateToLogin}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
