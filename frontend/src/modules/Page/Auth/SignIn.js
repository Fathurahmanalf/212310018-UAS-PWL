import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { MdError } from "react-icons/md";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
        const response = await axios.post('http://localhost:3003/auth/login', {
          email: email,
          password: password
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        });

        const token = response.data.token;
        console.log('Token:', token);

        localStorage.setItem('token', token);
        setMsg('');
        navigate("/");

        // Display success message using SweetAlert
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successful!',
            showConfirmButton: false,
            timer: 2000
        });
    } catch (error) {
        console.error(error);
        if (error.response) {
            setMsg(error.response.data.message);
        }
    }
};

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div
          className="sm:block bg-cover "
          style={{ backgroundImage: "url('/assets/Login.jpg')" }}
        ></div>

        <div className="bg-[#ffffff] flex flex-col justify-center">
          <form onSubmit={handleLogin} className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg">
            <h2 className="text-4xl dark:text-black font-bold text-center">
              SignIn
            </h2>
            <div className="flex flex-col text-black py-2">
              <label>Email</label>
              <input
                className="flex-1 rounded-[10px] border mt-2 p-2 pl-5 text-black focus:border-grey-500 focus:outline-none"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
              />
              {submitted && !email && <p className="text-red-500">Email is required</p>}
            </div>

            <div className="flex flex-col text-black py-2">
              <label>Password</label>
              <input
                className="flex-1 rounded-[10px] border mt-2 p-2 pl-5 text-black focus:border-grey-500 focus:outline-none"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
              />
              {submitted && !email && <p className="text-red-500">Password is required</p>}
            </div>

         
            {msg && <p role="alert" className="text-black text-sm alert alert-warning  py-5 my-5"> <MdError /> {msg}</p>}
              <button className="w-full my-2 py-2 bg-blue-500 text-white font-semibold rounded-lg" type="submit">
                Sign In
              </button>
            

            <div className="flex flex-row">
              <p>belum punya akun?</p>
              <Link
                to="/signup"
                className="text-blue-500 mx-1 hover:text-blue-300 no-underline"
                onClick={navigateToSignup}
              >
                SignUp
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
