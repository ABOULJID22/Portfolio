import React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const worksData = [
  {
    id: '1',
    title: 'Stock Management',
    description2:" This app for Tiznit's Ministry optimizes stock, supplier orders, employee management, and product tracking with centralized resource management and....",
    description: "This application is created for the Ministry of Equipment, Transport, Logistics, and Water in Tiznit. Developed in Python, it optimizes processes for managing stocks, supplier orders, employee management, and product availability tracking within the stock. Offering centralized and efficient resource management, it includes advanced features for inventory management and real-time statistical report generation. Login and registration pages ensure secure user management.",
    image: '/imgs/GS/GS.png',
    img1: '/imgs/GS/register fr2.png',
    img2: '/imgs/GS/produit.png',
    img3: '/imgs/GS/mouvement .png',
    img4: '/imgs/GS/sinuup pro3.png',
    img5: '/imgs/GS/fentre Fonctionnaire.png',
  },
  {
    id: '2',
    title: 'Site AbouReserve',
    description2:"This web app simplifies restaurant orders and reservations, boosting efficiency and customer experience...",
    description: "This web application simplifies the management of orders and reservations for restaurants, improving operational efficiency and the customer experience. By automating the ordering process and offering reservations online or locally to streamline the connection between customers and servers, it reduces errors and optimizes customer reception. Internal communication is centralized, and contactless solutions comply with health standards. Developed in PHP (Laravel), JavaScript (React), and MySQL, AbouReserve modernizes restaurant management for superior service quality.",
    image: '/imgs/Abou/page Accueil.png',
    img1: '/imgs/Abou/Dashboard.png',
    img2: '/imgs/Abou/cart shop online.png',
    img3: '/imgs/Abou/page menu.png',
    img4: '/imgs/Abou/chefpage.png',
    img5: '/imgs/Abou/DashboardUsers.png',
  },
  {
    id: '3',
    title: "Student Connect",
    description2:"Student Connect is an online platform for students to share information, collaborate, and stay updated on academic resources...",
    description: "Student Connect is a vibrant online platform designed to foster a network among students, enabling them to seamlessly share and exchange information. It provides a dynamic space where students can connect, collaborate, and stay updated on academic resources, events, and opportunities. With intuitive features for communication and information sharing, Student Connect aims to enhance the student experience by promoting engagement and knowledge sharing within the academic community.",
    image: '/imgs/users/accueil2.png',
    img1: '/imgs/users/homepro.png',
    img2: '/imgs/users/profilepro.png',
    img3: '/imgs/users/setting.png',
    img4: '/imgs/users/dashborad.png',
    img5: '/imgs/users/accueil2.png',

  },
  {
    id: '4',
    title: 'The Commands Management',
    description2:"The Commands Management app revolutionizes restaurant operations with a user-friendly interface for order management, dedicated kitchen and...",
    description: 'The Commands Management desktop application, developed using Python, revolutionizes restaurant operations with its intuitive interface tailored for seamless order management. Featuring a user-friendly design, it simplifies the ordering process, allowing customers to place orders effortlessly. For kitchen staff, the application provides a dedicated interface to track and manage orders efficiently, ensuring timely preparation and service. Moreover, administrators benefit from comprehensive oversight through an admin interface, facilitating real-time monitoring of orders and enhancing operational control.',
    image: '/imgs/APPGS/Application Desktop pour Gérer les Commandes d\'un Restaurant - Copie_page-0002.jpg',
    img1: '/imgs/APPGS/Application Desktop pour Gérer les Commandes d\'un Restaurant - Copie_page-0006.jpg',
    img2: '/imgs/APPGS/Application Desktop pour Gérer les Commandes d\'un Restaurant - Copie_page-0003.jpg',
    img3: '/imgs/APPGS/Application Desktop pour Gérer les Commandes d\'un Restaurant - Copie_page-0004.jpg',
    img4: '/imgs/APPGS/Application Desktop pour Gérer les Commandes d\'un Restaurant - Copie_page-0005.jpg',
    img5: '/imgs/APPGS/Application Desktop pour Gérer les Commandes d\'un Restaurant - Copie_page-0006.jpg',

  },

  {
    id: '5',
    title: 'Tawjihi',
    description2:"Tawjihi offers educational resources and interactive study materials for student success in academics and careers...",
    description: "Tawjihi is a dynamic frontend website designed using HTML, CSS, and JavaScript. Its primary goal is to serve as a versatile platform for orientation and online courses. With a user-friendly interface and responsive design, Tawjihi offers valuable educational resources tailored to students needs. From informative content on career paths to interactive study materials, the website aims to empower users with knowledge and guidance essential for academic and career success.",
    image: '/imgs/tawjih.png',
  },
  {
    id: '6',
    title: 'Ecommerce website',
    description2:"This Ecommerce site prioritizes simplicity and reliability, specializing in cash on delivery transactions for seamless ordering...",
    description: "This Ecommerce website is tailored for simplicity and reliability, specializing in cash on delivery (COD) transactions. It provides customers with a seamless ordering experience and secure payment options upon delivery. Ideal for businesses aiming to expand their online sales without upfront payments, this platform ensures convenience and trust for both sellers and buyers.",
    image: '/imgs/Design sans titre (3).png',
  },
];
const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
function Works() {
  const { id } = useParams();
  const work = worksData.find(work => work.id === id);
  const otherWorks = worksData.filter(work => work.id !== id).slice(0, 3);
  if (!work) {
    return <div className="text-center text-xl font-bold mt-10">Work not found</div>;
  }


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div className='relative'>
    <div className='footer2 '>
  <div className="sm:container  py-10 px-4 sm:px-24 ">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-white rounded-lg shadow-lg shadow-cyan-400 pl-8 pr-8 pb-8">

    <div className="flex flex-col justify-center">
    <h1 className="sm:container text-3xl sm:text-2xl lg:text-3xl md:text-3xl font-bold text-cyan-600 pb-4 pt-5 text-center lg:text-center">{work.title}</h1>

      <div className=" rounded-lg sm:p-4 md:p-8">
        <p className="text-gray-100  lg:text-left md:text-lg md:text-justify  sm:text-sm md:mb-2">{work.description}</p>
        
      </div>
    </div>
    
    {/* Image à droite */}
    
    <img src={work.image} alt={work.title} className="w-full h-auto  shadow-md shadow-cyan-400  relative  md:top-24  object-cover rounded-lg" />
    <div className=" flex flex-col sm:flex-row justify-center lg:justify-between ">
          <button onClick={openModal} className="hidden md:block sm:hidden px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition">View All Images</button>
          <Link to="/" className="hidden md:block sm:hidden px-4 py-2  items-center justify-center text-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">Back to Home</Link>
          <Link to="/" className="block sm:block md:hidden px-4 py-2 items-center  text-center justify-center rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 md:text-xl  transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md">Back to Home</Link>

        </div>
  </div>



  {work.img1 && (
    <div className="w-full h-full relative pt-20 hidden md:block">
      <Slider {...settings}>
        {work.img1 && <img src={work.img1} alt={`${work.title} 1`} onClick={openModal} className="p-4 m-4 h-64 w-full object-cover" />}
        {work.img2 && <img src={work.img2} alt={`${work.title} 2`} onClick={openModal} className="p-4 m-4 h-64 w-full object-cover" />}
        {work.img3 && <img src={work.img3} alt={`${work.title} 3`} onClick={openModal} className="p-4 m-4 h-64 w-full object-cover" />}
        {work.img4 && <img src={work.img4} alt={`${work.title} 4`} onClick={openModal} className="p-4 m-4 h-64 w-full object-cover" />}
        {work.img5 && <img src={work.img5} alt={`${work.title} 5`} onClick={openModal} className="p-4 m-4 h-64 w-full object-cover" />}
      </Slider>
    </div>
  )}
  
  <div className='pt-20'>
  <p className="block md:hidden sm:block text-xl font-bold text-cyan-400 mb-4 text-cente ">Other Images
</p>
  {work.img1 && (
    
    <div className="block md:hidden ">
      <Slider {...settings2}>
        {work.img1 && <img src={work.img1} alt={`${work.title} 1`} onClick={openModal} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img2 && <img src={work.img2} alt={`${work.title} 2`} onClick={openModal} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img3 && <img src={work.img3} alt={`${work.title} 3`} onClick={openModal} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img4 && <img src={work.img4} alt={`${work.title} 4`} onClick={openModal} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img5 && <img src={work.img5} alt={`${work.title} 5`} onClick={openModal} className="p-4 m-4 h-full w-full object-cover" />}
      </Slider>
    </div>
  )}
  </div>
  
</div>
</div>
 
 {/* /*         <!-- other-->
 */}        

 
 <div id="portfolio" className="footer2 py-12 ">
        <div className="container mx-auto px-4">
        <h1 className="md:text-4xl text-4xl font-bold text-start mb-8 text-cyan-400 ">Other Works</h1>  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  ">
            {otherWorks.map(work => (
              <div key={work.id} className="work  relative rounded-lg overflow-hidden shadow-lg shadow-slate-500 hover:shadow-pink-600">
                <img src={work.image} alt={`${work.title} 3`} className="w-full h-full rounded-lg transition-transform duration-500" />
                <div className="layer items-center justify-center text-center text-white transition-all duration-500">
                  <h3 className="text-xl font-medium mt-3 md:mt-4">{work.title}</h3>
                  <p className="text-sm">{work.description2}</p>
                  <Link to={`/works/${work.id}`} className="bg-white text-pink-500 mb-3 w-14 h-14 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
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


   




    {isModalOpen && (
  <div className="fixed hidden  md:flex inset-0 bg-black bg-opacity-75  items-center justify-center z-50" onClick={closeModal}>
    <div className="relative p-4 rounded-lg sm:w-3/4 md:w-3/4 max-w-4xl" onClick={(e) => e.stopPropagation()}>
      <button onClick={closeModal} className="absolute top-4 right-4 text-2xl text-blue-500 hover:text-red-700"></button>
      <Slider {...settings2}>
        {work.img1 && <img src={work.img1} alt={`${work.title} 1`} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img2 && <img src={work.img2} alt={`${work.title} 2`} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img3 && <img src={work.img3} alt={`${work.title} 3`} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img4 && <img src={work.img4} alt={`${work.title} 4`} className="p-4 m-4 h-full w-full object-cover" />}
        {work.img5 && <img src={work.img5} alt={`${work.title} 5`} className="p-4 m-4 h-full w-full object-cover" />}
      </Slider>
    </div>
  </div>
)}




{/* /* <!--     service -->
 */}
<div className="container relative top-5 md:mb-14 mb-4" id="services">
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
            <div className="service-box bg-gray-800 p-5 text-white rounded-lg transition-transform transform hover:-translate-y-2">
              <i className="text-5xl mb-4"><svg class="w-12 h-10 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
</svg>
</i>
              <h2 className="text-2xl font-semibold mb-4">Design</h2>
              <p className="text-sm mb-4">Creation of complete visual identities including logos, color palettes, and typography, as well as communication materials such as brochures, business cards, and banners, using tools like Adobe Photoshop and Illustrator...</p>
              <a href="/services/6" className="text-cyan-500 text-sm">Learn More</a>
            </div>
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
  );
}

export default Works;
