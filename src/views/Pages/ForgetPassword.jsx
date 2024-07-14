import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from "../../axois-client.js";
function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      // Envoyer la demande de réinitialisation au backend
      const response = await axiosClient.post('/forgotpassword', { email });

      // Vérifier la réponse du backend
      if (response.data.status) {
        setStatus(response.data.status);
      } else {
        setErrors(["Une erreur inattendue s'est produite"]);
      }
    } catch (e) {
      if (e.response && e.response.status === 422) {
        setErrors(e.response.data.errors);
      } else {
        console.error("Une erreur inattendue s'est produite :", e);
        setErrors(["Une erreur inattendue s'est produite"]);
      }
    }
  };
  return (
    <div>
      <div className="flex items-center min-h-screen bg-gray-50 mb-5">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                className="object-cover w-full h-full"
                src="imgs/thumb/login.png"
                alt="img"
              />
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >

                  </svg>
                  <div className="justify-center items-center">
                  <Link to="/home" className="text-white block py-4 ">
        <div
          className="logo"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#F01543',

            borderRadius: '5px',
          }}
        >
          <span className="">A</span>
          <span className="text-primary">bou</span>
          <span className="text">R</span>
          <span className="text-primary">eserve</span>
        </div>
      </Link>
    </div>
                </div>
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                  Mot de passe oublié
                </h1>
                {status && <div className="text-green-500">{status}</div>}
                <form onSubmit={onSubmit}>
                  <div>
                    <label className="block text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Votre adresse e-mail"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <p className="message py-3">
                    Vous vous souvenez de votre mot de passe ?{' '}
                    <Link to="/login" className="text-sm text-blue-600 hover:underline">
                      Connexion
                    </Link>
                  </p>
                  <button
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                  >
                    Réinitialiser le mot de passe
                  </button>
                </form>
                <p className="mt-4">
                  <Link to="/signup" className="text-sm text-blue-600 hover:underline">
                    Créer un nouveau compte
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
