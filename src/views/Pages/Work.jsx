import React from 'react'

import "../css/style.css";

import "../assets/font-awesome/6.4.2/css/all.min.css";
import { Link } from 'react-router-dom';
function Work() {


  return (
    
    <div>

{/* /*         <!-- My work-->
 */}        
 
 <div id="portfolio" className="py-12 footer2 ">
      <div className="container mx-auto px-4  ">
        <h1 className="text-4xl font-bold text-center text-cyan-400  mb-8">My work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/GS/GS.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer items-center justify-center text-center text-white transition-all duration-500">
              <h3 className="text-xl font-medium mt-3 md:mt-4">Stock Management</h3>
              <p className="text-sm ">This app for Tiznit's Ministry optimizes stock, supplier orders, employee management, and product tracking with centralized resource management and....</p>
              <Link to="/works/1" className=" bg-white text-pink-500 mb-3  w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
          <img src="/imgs/Abou/page Accueil.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
          <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white   transition-all duration-500">
              <h3 className="text-xl font-medium mt-3 md:mt-4 ">Site AbouReserve</h3>
              <p className="text-sm ">This web app simplifies restaurant orders and reservations, boosting efficiency and customer experience...</p>
              <Link to="/works/2" className="md:mb-2 mb-1 relative md:bottom-0 bottom-2 bg-white text-pink-500  w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/users/accueil2.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer  flex flex-col items-center justify-center text-center text-white   transition-all duration-500">
              <h3 className="text-xl font-medium mt-4 ">Student Connect</h3>
              <p className="text-sm ">Student Connect is an online platform for students to share information, collaborate, and stay updated on academic resources...</p>
              <Link to="/works/3" className="md:mb-2 relative md:bottom-0 bottom-2 bg-white text-pink-500 md:text-xl w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>
{/*  */}
          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/tawjih.png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white   transition-all duration-500">
              <h3 className="text-xl font-medium mt-4 ">Site Tawjihi</h3>
              <p className="text-sm ">Tawjihi offers educational resources and interactive study materials for student success in academics and careers...</p>
              <Link to="/works/5" className="md:mb-2 relative md:bottom-0 bottom-2 bg-white text-pink-500 md:text-xl w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/APPGS/Application Desktop pour Gérer les Commandes d'un Restaurant - Copie_page-0004.jpg" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute  flex flex-col items-center justify-center text-center text-white   transition-all duration-500">
              <h3 className="text-xl font-medium mt-4 ">Commands Management</h3>
              <p className="text-sm ">The Commands Management app revolutionizes restaurant operations with a user-friendly interface for order management, dedicated kitchen and...</p>
              <Link to="/works/4" className="md:mb-2 relative md:bottom-0 bottom-2 bg-white text-pink-500 md:text-xl w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="work relative rounded-lg overflow-hidden shadow-lg hover:shadow-pink-600">
            <img src="/imgs/Design sans titre (3).png" alt="" className="w-full h-full rounded-lg transition-transform duration-500"/>
            <div className="layer absolute inset-0 flex flex-col items-center justify-center text-center text-white   transition-all duration-500">
              <h3 className="text-xl font-medium mt-4 ">Stor Ecommerce </h3>
              <p className="text-sm ">This Ecommerce site prioritizes simplicity and reliability, specializing in cash on delivery transactions for seamless ordering...</p>
              <Link to="/works/6" className="md:mb-2 relative md:bottom-0 bottom-2 bg-white text-pink-500 md:text-xl w-14 h-14 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* /* <!--     service -->
 */}
<div className="container relative top-5" id="services">
      <div className="container mx-auto px-4">
        <h1 className="sub-title text-4xl font-bold text-start text-cyan-400 mb-8">My Services</h1>
        <div className="services-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className="bx bx-code-alt">
                <svg className="w-12 h-10 text-white mb-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.17a3.001 3.001 0 0 0 0 5.66V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 0 0-2 0v9.17ZM11 20v-9.17a3.001 3.001 0 0 1 0-5.66V4a1 1 0 1 1 2 0v1.17a3.001 3.001 0 0 1 0 5.66V20a1 1 0 1 1-2 0Zm6-1.17V20a1 1 0 1 0 2 0v-1.17a3.001 3.001 0 0 0 0-5.66V4a1 1 0 1 0-2 0v9.17a3.001 3.001 0 0 0 0 5.66Z"/>
                </svg>
              </i>
              <h2 className="text-2xl font-semibold mb-4">Web Back-End</h2>
              <p className="text-sm ">Development of the server-side of web applications, ensuring business logic, database management, and integration with external APIs to provide a robust and secure infrastructure...</p>
              <a href="/services/1" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className=" text-5xl mb-4"><svg class="w-12 h-12  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Web Front-End</h2>
              <p className="text-sm ">Creation of interactive and responsive user interfaces using modern technologies such as React or Vue.js, delivering a smooth and engaging user experience...</p>
              <a href="/services/2" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className=" text-5xl mb-4"><svg class="w-12 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18h2M5.875 3h12.25c.483 0 .875.448.875 1v16c0 .552-.392 1-.875 1H5.875C5.392 21 5 20.552 5 20V4c0-.552.392-1 .875-1Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Desktop Applications</h2>
              <p className="text-sm ">Development of custom desktop applications to automate and optimize business processes, including inventory management, invoicing, and client tracking, using technologies like Python...</p>
              <a href="/services/3" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className="text-5xl mb-4"><svg class="w-12 h-10 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 8h.01M9 8h.01M12 8h.01M4 11h16M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Database Management</h2>
              <p className="text-sm ">Design, optimization, and maintenance of relational and non-relational databases, ensuring data integrity, performance, and security for web and desktop applications...</p>
              <a href="/services/4" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className=" text-5xl mb-4">
              <svg class="w-12 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

              </i>
              <h2 className="text-2xl font-semibold mb-4">Marketing Digital</h2>
              <p className="text-sm ">Develop and manage digital strategies to boost online visibility and engagement. We run ads on Google Ads and Facebook Ads to increase qualified traffic and conversions. Our approach includes creating SEO-optimized blogs, videos, and infographics to engage your audience effectively..</p>
              <a href="/services/5" className="text-cyan-500 text-sm">Learn More</a>
            </div>
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className="text-5xl mb-4"><svg class="w-12 h-10 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Design</h2>
              <p className="text-sm ">Creation of complete visual identities including logos, color palettes, and typography, as well as communication materials such as brochures, business cards, and banners, using tools like Adobe Photoshop and Illustrator...</p>
              <a href="/services/6" className="text-cyan-500 text-sm">Learn More</a>
            </div>
          </div>
      </div>
      <div className="flex pt-6 pb-4">
          <Link
    to="/service"
    className="mx-auto  inline-block items-center text-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-xl px-6 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md"
  >
    See more
</Link></div>

    </div>

    </div>
  )
}

export default Work

