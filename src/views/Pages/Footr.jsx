/* import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"; */
import { Link } from "react-router-dom";
import "../css/style.css";
import "../assets/font-awesome/6.4.2/css/all.min.css";
import React, { useEffect,useState } from 'react';
import axiosClient from '../../axois-client';
import {useStateContext} from "../../contexts/ContextProvider";

export default function Footr() {
  const currentYear = new Date().getFullYear();
  const [settings, setSettings] = useState({});
  useEffect(() => {
    // Fetch current settings
    axiosClient.get('/settings/1') // Assuming you are fetching the settings with ID 1
      .then(({ data }) => {
        setSettings(data);
      })
      .catch(error => {
        console.error('There was an error fetching the settings!', error);
      });
  }, []);
  const { setNotification } = useStateContext();

  const handleSubscribe = async () => {
    console.log('ok')
    const emailInput = document.getElementById('exampleFormControlInput6');
    const email = emailInput.value;

    try {
      await axiosClient.post('/subscribes', { email });
      setNotification('Subscription successful!');
      emailInput.value = '';
    } catch (error) {
      console.error('Error subscribing:', error);
      setNotification('Subscription failed. Please try again later.');
    }
  };
  return (
    <div className="shadow-2xl shadow-cyan-400 relative z-40 ">



<footer className="footer2 py-10 text-white pt-20  ">
      <div className="pl-16 pr-16 mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/home" className="text-white">
              <div className="logo text-2xl font-bold text-cyan-400">
                <span id="A">A</span><span className="text-secondary">BOU</span><span  id="A">L</span><span className="text-secondary">JID</span>
              </div>
            </Link>
            <p className="mt-4 text-gray-400">With Abouljid, we invite you to embark on a journey of innovation and excellence. Our projects are more than just code.</p>
            <div className="flex mt-6 space-x-4">
              <Link to="https://www.linkedin.com/in/mohamedabouljid" className="w-10 h-10 border-2 border-cyan-400 text-cyan-400  rounded-full flex items-center justify-center transition hover:bg-cyan-400 hover:text-gray-900">
                <i className="linkedin"><svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/><path d="M7.2 8.809H4V19.5h3.2V8.809Z"/></svg></i>
              </Link>
              <Link to="https://github.com/ABOULJID22" className="w-10 h-10 border-2 border-cyan-400  text-cyan-400  rounded-full flex items-center justify-center transition hover:bg-cyan-400 hover:text-gray-900">
                <i className="github"><svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/></svg></i>
              </Link>
              <Link to="https://wa.me/qr/QMLMCS62KO53O1 " className="w-10 h-10 border-2 border-cyan-400 text-cyan-400  rounded-full flex items-center justify-center transition hover:bg-cyan-400 hover:text-gray-900">
                <i className="bx bxl-whatsapp"><svg className="w-8 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/><path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.144.24-.289.341-.432l.086-.129c.102-.148.075-.263.054-.346-.034-.139-.301-.724-.41-.988l-.007-.015c-.107-.25-.217-.509-.33-.744-.136-.283-.277-.51-.404-.728a.974.974 0 0 0-.852-.492.571.571 0 0 0-.292.078A3.52 3.52 0 0 0 8.28 8.55c-.228.273-.46.57-.66.916-.198.346-.38.758-.462 1.222-.172.92-.036 1.766.205 2.383.424 1.058 1.08 1.865 1.546 2.445a8.956 8.956 0 0 0 3.09 2.47c.49.218.964.348 1.402.414.46.073.886.043 1.265-.024.388-.07.75-.184 1.085-.319.345-.142.678-.33.968-.565a4.31 4.31 0 0 0 .866-.999c.07-.115.07-.115.102-.17.17-.272.122-.425.085-.499-.033-.065-.116-.1-.162-.122Z"/></svg></i>
              </Link>
              <a href="mailto:abouljid.mohamed@gmail.com" className="w-10 h-10 border-2 border-cyan-400 text-cyan-400  rounded-full flex items-center justify-center transition hover:bg-cyan-400 hover:text-gray-900">
                <i className="email"><svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>
</i>
              </a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h5 className="text-lg font-bold text-cyan-400 mb-4">Contact</h5>
            <div className="mb-4 flex items-center">
              <i className="fas fa-map-marker-alt text-cyan-400 mr-3"></i>
              <p>{settings.adresse}Tiznit-Agadir</p>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-envelope text-cyan-400 mr-3"></i>
              <a href="mailto:abouljid.mohamed@gmail.com">{settings.email}abouljid.mohamed@gmail.com</a>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone text-cyan-400 mr-3"></i>
              <a href="tel:+212671540452">{settings.phone} +212671540452</a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h5 className="text-lg font-bold text-cyan-400 mb-4">Subscribe to our newsletter</h5>
            <div className="flex items-center mb-4">
              <input
                id="exampleFormControlInput6"
                type="email"
                placeholder="Enter email"
                className="w-full p-3 rounded-md text-black   border border-cyan-400 hover:border-cyan-400  shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform  hover:text-white hover:scale-105 shadow-md"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="ml-2 p-3 rounded-md  border border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-gray-400">Subscribe to our newsletter and stay updated on the latest development projects, special offers, and more.</p>
            </div>
        </div>
      </div>
      
      <div className="text-center text-gray-400 mt-10">
      <hr className="mb-2  text-cyan-400"></hr>
      <p className="mb-2">&copy; {currentYear} <Link to="/home" className="text-cyan-400">AbouLJID</Link>. All rights reserved.</p>
{/*               <p>Designed by <Link to="https://Abouljid.com" className="text-cyan-400">Abouljid</Link></p>
 */}      </div>
    </footer>
    

    </div>
  );
}
