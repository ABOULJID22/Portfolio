
/* import "../css/style.css"; */
import "../css/profile.css"
import "../assets/font-awesome/6.4.2/css/all.min.css";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, useNavigate,Outlet } from "react-router-dom";
import axiosClient from "../../axois-client.js";
import {useEffect, useState} from "react";
import Typed from 'typed.js';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {



  const [loading, setLoading] = useState(false);
    useEffect((event) => {


      const servicesList = document.getElementById('servicesList');
      const serviceBoxes = document.querySelectorAll('.service-box');
      let currentPosition = 0;

      function moveServicesList() {
        currentPosition -= 350; // Ajustez la distance selon la largeur des boîtes de service et la marge

        if (currentPosition < -(serviceBoxes.length - 1) * (350 + 20)) {
          currentPosition = 0;
        }

        servicesList.style.transform = `translateX(${currentPosition}px)`;
      }

      const intervalId = setInterval(moveServicesList, 3000);

      var typed = new Typed(".text2", {
        strings: ["Frontend Developer", "Desktop App Developer ", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });

      // Cleanup function to clear interval and typed.js instance
      return () => {
        clearInterval(intervalId);
        typed.destroy();
      };
    }, []);

    const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg('Thank you for your message');

    // Clear message after 3 seconds
    setTimeout(() => {
      setMsg('');
    }, 3000);

    // Reset form fields
    setFormData({
      Name: '',
      Email: '',
      Phone: '',
      Message: ''
    });
  }


  const downloadPDF = () => {
    alert('ok')
    console.log('okoko');
        const pdfUrl = '/Mohamed_Abouljid.pdf'; // Assurez-vous que le chemin du fichier est correct

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'Mohamed_Abouljid.pdf'); // Nom du fichier à télécharger

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
<>




<section className="md:pt-34 body home flex flex-col lg:flex-row items-center justify-between mt-40 px-20 lg:px-32">
  <div className="home-content  text-white max-w-lg mb-10 lg:mb-0 lg:mr-10">
    <h3 className="text-2xl font-bold opacity-0 animate-slideBottom delay-500 relative left-2">Hello, It's Me</h3>
<h1 className="text-6xl lg:text-5xl font-bold mt-2 mb-4 opacity-0 animate-slideRight delay-1000">
  <span>ABOULJID MOHAMED</span>
</h1>
    <h3 className="text-2xl font-bold opacity-0 animate-slideTop delay-500">
      And I'm a <span className="text2 text-cyan-400 "></span>
    </h3>
    <p className="text-lg mt-4 opacity-0 animate-slideLeft delay-1000">
    I'm a web developer with extensive experience in this field. My expertise lies in creating websites, designing frontends, and much more...
    </p>
    <div className="home-sci flex mt-6">
      <Link to="https://www.linkedin.com/in/mohamedabouljid" target="_blank"  className="flex items-center justify-center w-10 h-10 border-2 border-cyan-400 rounded-full text-cyan-400 transition duration-500 ease hover:bg-cyan-400 hover:text-gray-900 shadow-md opacity-0 animate-slideLeft delay-700 mx-2">
        <i className="bx bxl-facebook">
        <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
</svg>

        </i>
      </Link>
      <Link to="https://github.com/ABOULJID22" target="_blank" className="flex items-center justify-center w-10 h-10 border-2 border-cyan-400 rounded-full text-cyan-400 transition duration-500 ease hover:bg-cyan-400 hover:text-gray-900 shadow-md opacity-0 animate-slideLeft delay-900 mx-2">
        <i className="">
        <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
</svg>

        </i>
      </Link>
      <Link to="https://wa.me/qr/QMLMCS62KO53O1" target="_blank" className="flex items-center justify-center w-10 h-10 border-2 border-cyan-400 rounded-full text-cyan-400 transition duration-500 ease hover:bg-cyan-400 hover:text-gray-900 shadow-md opacity-0 animate-slideLeft delay-1100 mx-2">
        <i className="whatsapp">
        <svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
</svg>

        </i>
      </Link>
      <Link to="https://www.instagram.com/aboulcode" target="_blank" className="flex items-center justify-center w-10 h-10 border-2 border-cyan-400 rounded-full text-cyan-400 transition duration-500 ease hover:bg-cyan-400 hover:text-gray-900 shadow-md opacity-0 animate-slideLeft delay-1300 mx-2">
        <i className="linkedin"><svg class="w-6 h-6  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
</svg>
</i>
      </Link>
      <a href="mailto:abouljid.mohamed@gmail.com" target="_blank" className="flex items-center justify-center w-10 h-10 border-2 border-cyan-400 rounded-full text-cyan-400 transition duration-500 ease hover:bg-cyan-400 hover:text-gray-900 shadow-md opacity-0 animate-slideLeft delay-1500 mx-2">
        <i className="git">
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>
        </i>
      </a>
    </div>
    <Link to="/about" className="btn-box  inline-block mt-6 px-7 py-3 rounded-full border border-cyan-400  shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-400 hover:text-black  hover:scale-105 shadow-md">
      More About Me
    </Link>
  </div>

  <div className="profile-image  rounded-full overflow-hidden shadow-cyan-400  opacity-0 animate-slideRight delay-1000 relative -left-auto md:-left-20 lg:-left-20">
    <img src="/imgs/صورة.jpg" alt="Your Photo" className="w-full h-full object-cover transition-transform duration-300 ease hover:scale-110" />
  </div>
</section>





{/* /* <!--     service -->
 */}
<div className="container relative top-5" id="services">
      <div className="container mx-auto px-4">
        <h1 className="sub-title text-4xl font-bold text-start text-cyan-400 mb-8">My Services</h1>
        <div className="services-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
            <div className="service-box hidden md:block sm:hidden bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className="bx bx-code-alt">
                <svg className="w-12 h-10 text-white mb-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z"/>
                </svg>
              </i>
              <h2 className="text-2xl font-semibold mb-4">Web Back-End</h2>
              <p className="text-sm mb-4">Development of the server-side of web applications, ensuring business logic, database management, and integration with external APIs to provide a robust and secure infrastructure...</p>
              <a href="/services/1" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className=" text-5xl mb-4"><svg class="w-12 h-12  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Web Front-End</h2>
              <p className="text-sm mb-4">Creation of interactive and responsive user interfaces using modern technologies such as React or Vue.js, delivering a smooth and engaging user experience...</p>
              <a href="/services/2" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className=" text-5xl mb-4"><svg class="w-12 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18h2M5.875 3h12.25c.483 0 .875.448.875 1v16c0 .552-.392 1-.875 1H5.875C5.392 21 5 20.552 5 20V4c0-.552.392-1 .875-1Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Desktop Applications</h2>
              <p className="text-sm mb-4">Development of custom desktop applications to automate and optimize business processes, including inventory management, invoicing, and client tracking, using technologies like Python...</p>
              <a href="/services/3" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className="text-5xl mb-4"><svg class="w-12 h-10 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h.01M9 8h.01M12 8h.01M4 11h16M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Database Management</h2>
              <p className="text-sm mb-4">Design, optimization, and maintenance of relational and non-relational databases, ensuring data integrity, performance, and security for web and desktop applications...</p>
              <a href="/services/4" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className=" text-5xl mb-4">
              <svg class="w-12 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

              </i>
              <h2 className="text-2xl font-semibold mb-4">Marketing Digital</h2>
              <p className="text-sm mb-4">Develop and manage digital strategies to boost online visibility and engagement. We run ads on Google Ads and Facebook Ads to increase qualified traffic and conversions. Our approach includes creating SEO-optimized blogs, videos, and infographics to engage your audience effectively..</p>
              <a href="/services/5" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box hidden md:block sm:hidden bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className="text-5xl mb-4"><svg class="w-12 h-10 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Design</h2>
              <p className="text-sm mb-4">Creation of complete visual identities including logos, color palettes, and typography, as well as communication materials such as brochures, business cards, and banners, using tools like Adobe Photoshop and Illustrator...</p>
              <a href="/services/6" className="text-cyan-500 text-sm">Learn More</a>
            </div>
          </div>
          <div className="flex pt-6">
          <Link
    to="/service"
    className="mx-auto  inline-block items-center text-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-xl px-6 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md"
  >
    See more
</Link></div>
      </div>
    
    </div>

{/* /*         <!-- My work-->
 */}        
 
 <div id="portfolio" className="footer2 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-cyan-400  mb-8">My work</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-10 mt-12">
          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/GS/GS.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer  items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl font-medium md:text-4xl mt-2 md:mt-3">Stock Management</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">This app for Tiznit's Ministry optimizes stock, supplier orders, employee management,and product tracking with centralized resource management and ...</p>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">This app for Tiznit's Ministry optimizes stock, supplier orders, employee management,and...</p>

              <Link to="/works/1" className="relative md:bottom-0 bottom-2 bg-white text-cyan-400   rounded-full flex items-center justify-center">
                <svg className="md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/Abou/page Accueil.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl font-medium md:text-4xl mt-3 md:mt-3">Site AbouReserve</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">This web app simplifies restaurant orders and reservations, boosting efficiency and  customer experience...</p>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">This web app simplifies restaurant orders and reservations, boosting efficiency and...</p>

              <Link to="/works/2" className="relative -top-2 md:top-2 bg-white text-cyan-400 md:text-xl md:w-14 md:h-14  rounded-full flex items-center justify-center">
                <svg className=" md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/users/accueil2.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl font-medium md:text-4xl mt-2 md:mt-3">Student Connect</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">Student Connect is an online platform for students to share information, collaborate, and...</p>

              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">Student Connect is an online platform for students to share information, collaborate, and  stay updated on academic resources...</p>
              <Link to="/works/3" className="relative -top-2 md:top-2 bg-white text-cyan-400 md:text-xl w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/APPGS/Application Desktop pour Gérer les Commandes d'un Restaurant - Copie_page-0004.jpg" alt="" className="w-900 h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white  p-0.5 transition-all duration-500">
              <h3 className="text-xl md:text-4xl font-medium mt-2 md:mt-3">Commands Management</h3>
              <p className="md:text-xl md:mb-4 md:pb-3 block md:hidden sm:block">The Commands Management app revolutionizes restaurant operations with a user-friendly interface for order management, dedicated kitchen and...</p>

              <p className="md:text-xl md:mb-4 md:pb-3 hidden md:block sm:hidden">The Commands Management app revolutionizes restaurant operations with a user-friendly interface for order management, dedicated kitchen and admin panels for efficient tracking and control...</p>
              <Link to="/works/4" className="relative -top-2 md:top-2 bg-white text-cyan-400 md:text-xl md:w-14 md:h-14 h-12 w-8 rounded-full flex items-center justify-center">
                <svg className="md:w-10 md:h-10 w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10"> {/* Replace with the appropriate margin class */}
  <Link
    to="/work"
    className="flex items-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-xl px-6 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md"
  >
    See more
  </Link>
</div>
      </div>
    </div>



{/*     <!-- about me -->
 */}
   <div id="about" className="footer2">
      <div className="container">
        <div className="row">
        <div className="about-col-1 sm:m-2">
            <div className="about-us relative lg:top-6 md:top-6 sm:top-8">
                <div className="">
                  <div className="about-us-img">
                    <img src="imgs/thumb/1.png" className="w-full" alt="thumb" />
                    <div className="about-us-img-btn-img">
                      <div className="about-us-img-btn-img-main">
                        <img src="imgs/small/Button.png" alt="img" />
                        <div className="about-us-img-btn-img-overlay">
                          <h2 className="text-3xl text-center relative top-10 left-2">3</h2>
                          <span className="text-3xl text-center relative top-12 left-2">Years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="about-col-2 " >
            <div id="" className="">
            <h1 className="sub-title mt-2">About Me</h1>
            <p className="lg:text-xl md:text-xl sm:text-justify sm:text-sm ">
            My name is Mohamed Aboujid, and I am based in Tiznit. I am a full stack web developer specializing in creating innovative and functional web applications. With a deep passion for development, I possess solid skills in designing and implementing comprehensive web solutions, covering everything from user interfaces to database and server management.
            With a creative mindset and a love for innovation, I am always on the lookout for new challenges and rewarding collaborations. I am confident that my blend of technical skills and entrepreneurial training equips me to undertake ambitious projects and make a positive contribution to the technological and entrepreneurial ecosystem in my region and beyond.
            </p>

            <div className="tab-titles text-lg">
              <p
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === "Competencies" ? "active-link" : ""}`}
                onClick={() => opentab("Competencies")}
              >
                Competencies
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Web Development</span>
                  <br />
                  Designing Web/App interfaces
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Designing Web/App interfaces
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Designing Web/App interfaces
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${activeTab === "Competencies" ? "active-tab" : ""}`}
              id="experience"
            >
              <ul>
                <li>
                  <span>Technical skills</span>
                  <br />
                 HTML, CSS, JavaScript, PHP, Laravel, React, MongoDB, SQL, DevOps, Jira...
                </li>
                <li>
                  <span>Software</span>
                  <br />
                  Word, Excel, PowerPoint, XAMPP, Visual Studio Code, Workbench, MySQL...
                </li>
                <li>
                  <span>Soft skills</span>
                  <br />
                  Capacity to learn and adapt, Sense of responsibility, Team spirit...
                </li>
                <li>
                  <span>Analytical and Problem-Solving Skills</span>
                  <br />
                  Strong analytical and synthesis skills, Ability to provide solutions, Management of artificial intelligence techniques,Proficiency in Computer Tools...
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}
              id="education"
            >
              <ul>
                <li>
                  <span>2024</span>
                  <br />
                  DIPLOMA in Web Full-Stack
                </li>
                <li>
                  <span>2022</span>
                  <br />
                  Google Certificate in Digital Marketing
                </li>
                <li>
                  <span>2021</span>
                  <br />
                  Bachelor in Electronics and Telecommunication System 
                </li>
              </ul>
            </div>
          </div>
               </div>
          </div>
      </div>
    </div>

{/* <!--  contact-->
 */}
<div id="contact" className="py-12 foot">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="contact-left  flex-basis:35%">
            <h1 className="sub-title md:text-6xl font-bold mb-10 mt-6">Contact Me</h1>
            <a href="mailto:abouljid.mohamed@gmail.com" className="mb-4 flex items-center text-xl">
  <i className="fas fa-paper-plane text-cyan-400"></i><span className="text-white px-3"> abouljid.mohamed@gmail.com</span>
</a>            <a href="tel:+212671540452" className="mb-4 flex items-center text-xl">
  <i className="fas fa-phone-square-alt text-cyan-400"></i> <span className="text-white px-3">+212671540452</span>
</a>
           
            <div className="hidden  md:block sm:hidden">
            <div className="social-icons  flex mt-15 mb-5">
            <Link to="https://github.com/ABOULJID22" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/in/mohamedabouljid" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
              </Link>
             
              
              <Link to="https://www.instagram.com/aboulcode" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="https://wa.me/qr/QMLMCS62KO53O1" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
              <svg class="w-10 h-10 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd"/>
  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
</svg>

              </Link>
            </div>
            <button onClick={downloadPDF} className="btn2 inline-block mt-8 px-12 py-2 rounded-md border    border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">
            <span className="p-10 text-xl mt-10">Download CV</span></button> 
          
                  </div>
                  </div>
          <div className="contact-right flex-basis:60%">
          <form name="submit-to-file" onSubmit={handleSubmit} action="save_form_data.php" method="post" className="form w-full mt-8 md:mt-0">
      <input type="text" name="Name" value={formData.Name} onChange={handleChange} placeholder="Your Name" required className="w-full p-4 mb-4 text-white rounded-md outline-none" />
      <input type="email" name="Email" value={formData.Email} onChange={handleChange} placeholder="Your Email" required className="w-full p-4 mb-4 text-white rounded-md outline-none" />
      <input type="tel" name="Phone" value={formData.Phone} onChange={handleChange} placeholder="Your Number" required className="w-full p-4 mb-4 text-white rounded-md outline-none" />
      <textarea name="Message" value={formData.Message} onChange={handleChange} rows="6" placeholder="Your Message" required className="w-full p-4 mb-4 text-white rounded-md outline-none"></textarea>
      
      <button type="submit" className="flex items-center justify-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-xl px-6 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">
        Submit
      </button>
      </form>
      <div className="contact-left block  sm:block md:hidden">
            <div className="social-icons  flex mt-15 mb-5">
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link to="#" target="_blank" className="mr-4 text-xl text-white hover:text-cyan-400 transition-transform transform hover:-translate-y-1">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                </svg>
              </Link>
            </div>
            <button onClick={downloadPDF} className="btn2 inline-block mt-8 px-12 py-2 rounded-md border    border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">
            <span className="p-10 text-xl mt-10">Download CV</span></button> 
      </div>
                  

      
      {msg && (
        <p className="bg-gray-100 text-gray-800 rounded-md p-4 mt-4">{msg}</p>
      )}
    
          </div>
        </div>
      </div>

</div>




    </>

  );
};

export default Home;

