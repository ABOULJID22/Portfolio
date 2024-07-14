import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosClient from "../../axois-client.js";
import { useStateContext } from "../../contexts/ContextProvider.jsx";

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState(null);

  const onSubmit = (ev) => {
    ev.preventDefault();
    alert(`Thank you ${fullName}, but it is not available now`);
  };

  return (
    <div className="footer2">
    <div className="flex items-center min-h-screen mb-5 py-9  ">
      <div className="flex-1 h-full max-w-4xl mx-auto   shadow-cyan-400 shadow-md z-20">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              className="hidden md:block sm:hidden object-cover w-full h-full"
              src="imgs/thumb/1.png"
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center p-8 md:p-6 sm:p-12 md:w-1/2">
            <div className="w-full relative -top-14 md:top-0">
              <div className="flex justify-center">
                <Link to="/home" className="relative -top-14 left-8  md:-top-5 text-white block py-4">
                  <div id="logo" className="logo" style={{ opacity: 0 }}>
                    <span id="A">A</span>
                    <span className="text-secondary">BOU</span>
                    <span id="A">L</span>
                    <span className="text-secondary">JID</span>
                  </div>
                </Link>
                <svg
                  className="w-20 h-20 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </div>
              <form onSubmit={onSubmit}>
                {errors &&
                  <div className="alert">
                    {Object.keys(errors).map(key => (
                      <p key={key}>{errors[key][0]}</p>
                    ))}
                  </div>
                }
                <div>
                  <label className="block text-sm">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mt-4 text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mt-4 text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 mt-1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mt-4 text-sm">Repeat Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600 mt-1"
                    placeholder="Repeat Password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                  />
                </div>
                <button
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                  Signup
                </button>
              </form>
              <p className="message py-3 text-white">
                Already registered? <Link to="/login" className="text-sm text-cyan-400 hover:underline">Sign In</Link>
              </p>
              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center justify-center w-full px-4 py-2 text-sm rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107" />
                    <path d="M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z" fill="#FF3D00" />
                    <path d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z" fill="#4CAF50" />
                    <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2" />
                  </svg>
                  <p className="text-sm px-3 text-cyan-400 mr-2 py-2 justify-between hover:text-white">Continue with Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
