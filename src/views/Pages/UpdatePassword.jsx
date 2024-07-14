import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosClient from "../../axois-client";

function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token, email } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);

    try {
      const response = await axiosClient.post(`/reset-password/${token}/${email}`, {
        password,
        password_confirmation,
      });


      console.log('Réponse du serveur :', response); // Affichage de la réponse dans la console

      // Vérifier si la réponse du backend est définie
      if (response && response.data) {
        // Vérifier si la réponse contient un message de succès
        if (response.data.message) {
          alert(response.data.message);
          navigate('/login'); // Rediriger vers la page de connexion en cas de succès
        } else {
          // Si la réponse ne contient pas de message, afficher une erreur générique
          setErrors(["Une erreur inattendue s'est produite"]);
        }
      } else {
        // Si la réponse est vide ou n'est pas définie, afficher une erreur générique
        setErrors(["Une erreur inattendue s'est produite"]);
      }
    } catch (error) {
      // Afficher le message d'erreur dans la console
      console.error("Une erreur s'est produite :", error.message);
      setErrors(["Une erreur inattendue s'est produite"]);
    }

    setLoading(false);
  };

  return (
   /* <div>
      <h2>Réinitialisation du mot de passe</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nouveau mot de passe :</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmez le nouveau mot de passe :</label>
          <input
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
        </div>

        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'Mettre à jour le mot de passe'}
        </button>
      </form>
    </div> */

    <div className="flex items-center min-h-screen bg-gray-50 mb-5">
  <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
    <div className="flex flex-col md:flex-row">
      <div className="h-32 md:h-auto md:w-1/2">
        <img
          className="object-cover w-full h-full"
          src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=740&t=st=1710971644~exp=1710972244~hmac=2ef6f3d38cfe99874c01ac222c97eb3522f03d3c5452ad59c7c8c81dc9c83b43"
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
          </div>
          <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
          Réinitialisation du mot de passe
          </h1>
          <form onSubmit={onSubmit} className="mt-4">
          <div className="mt-4">
              <label className="block ">Email :</label>
              <input
                type="email"
                name="email"
                value={email}
                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-sm mt-4">Nouveau mot de passe :</label>
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Confirmez le nouveau mot de passe :</label>
              <input
              required
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
                className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {errors.length > 0 && (
              <ul className="mt-4">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}

            <button
              type="submit"
              disabled={loading}
              className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              {loading ? 'Chargement...' : 'Mettre à jour le mot de passe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default UpdatePassword;
