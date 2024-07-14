import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import axiosClient from "../../axois-client.js";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const NavBar = () => {
  const { user, token, setUser, setToken, notification } = useStateContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const navigate = useNavigate();


//search

  const [loading, setLoading] = useState(true);






  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then(() => {
      setUser({});
      setToken(null);
      navigate("/home");
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, [setUser]);



  //search



  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false); // New state to track if no results are found

  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      try {
        const response = await axiosClient.get(`/search?query=${searchQuery}`);
        const data = response.data;
        setSuggestions([...data.menus]);
        setNoResults(data.menus.length === 0); // Set noResults based on data
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
      setNoResults(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.title || suggestion.name);
    setResults([suggestion]);

    if (suggestion.title) {
      navigate(`/Searchmenu/${suggestion.id}`);
    }
    setSuggestions([]);
  };

  return (
    <nav className=" body bg-gray-80 footer2 shadow-md shadow-slate-500  z-10  sticky" id='abou'>
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            
            <button
              type="button"
              className="relative md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-8 w-8  md:hidden ${isDropdownOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg
                className={` md:hidden  h-8 w-8 ${isDropdownOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Link to="/home" className="text-white block md:hidden rounded-md md:px-1 py-2 text-base font-medium">
              <div
                className="logo"
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: 'px',
                  fontWeight: 'bold',
                  color: '#F01543',
                  padding: '10px 10px',
                  borderRadius: '5px',
                }}
              >
          <span className="text-xl text-cyan-400" >A</span>
          <span className="text-secondary text-sm">BOU</span>
          <span className="text text-xl text-cyan-400" >L</span>
          <span className="text-secondary text-sm">JID</span>
        </div>
            </Link>
          </div>


          <div className="md:-mx-10 sm:mx-5 max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
      <Link to="/home" className="text-white hidden sm:block md:block">
        <div id="logo" className="logo" style={{ opacity: 0 }}>
          <span className="" id="A">A</span>
          <span className="text-secondary">BOU</span>
          <span className="text" id="A">L</span>
          <span className="text-secondary">JID</span>
        </div>
      </Link>
    </div>
          <div className="md:block hidden sm:hidden ">
      <div className="flex space-x-4">
        <Link
          to="/home"
          className=" navbar-link2 text-cyan-400  text-2xl font-medium ml-8 transition-opacity duration-300 opacity-0 animate-slideTop animation-delay-0"
        >
          Home
        </Link>
        <Link
          to="/service"
          className="navbar-link text-gray-100  text-2xl font-medium ml-8 transition-opacity duration-300 opacity-0 animate-slideTop animation-delay-1"
        >
          Service
        </Link>
        <Link
          to="/work"
          className="navbar-link text-gray-100  text-2xl font-medium ml-8 transition-opacity duration-300 opacity-0 animate-slideTop animation-delay-1"
        >
          Work
        </Link>
        <Link
          to="/about"
          className="navbar-link text-gray-100  text-2xl font-medium ml-8 transition-opacity duration-300 opacity-0 animate-slideTop animation-delay-2"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="navbar-link text-gray-100  text-2xl font-medium ml-8 transition-opacity duration-300 opacity-0 animate-slideTop animation-delay-3"
        >
          Contact
        </Link>
      </div>
    </div>
        </div>

      </div>

          <div className="absolute inset-y-0 right-0 flex md:space-x-5 sm:space-x-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
              <input
                type="text"
                value={localSearchTerm}
                onChange={handleSearchChange}
                className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-gray-600 focus:text-white sm:text-sm"
                placeholder="Search"
              />
            </form> */}
             {/* <form className="relative right-8 hidden md:block ">
                      <label htmlFor="simple-search" className="sr-only">Search</label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className="block w-full pl-10 pr-11 right-8  py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-gray-600 focus:text-white sm:text-sm"
                          placeholder="Search"
                          value={query}
                          onChange={handleSearch}
                          required
                        />
                        {suggestions.length > 0 && (
                          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-5 max-h-60 overflow-y-auto">
                            {suggestions.map(suggestion => (
                              <div key={suggestion.id} className='flex px-4 py-2 cursor-pointer hover:bg-gray-200' onClick={() => handleSuggestionClick(suggestion)}>
                                <img src={`http://127.0.0.1:8000/${suggestion.img}`} alt="" className='rounded-full h-6 w-6 border border-gray-100' />
                                <li className="px-2">
                                  {suggestion.title || suggestion.name}
                                </li>
                              </div>
                            ))}
                          </ul>
                        )}
                        {noResults && (
                          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 p-4 text-center text-gray-500">
                            No results found
                          </div>
                        )}
                      </div>
                    </form> */}

            <div className="relative">
         
            </div>

            <div className="relative">

            </div>

           {/*  <button type="button" className="relative p-2 rounded-full bg-gray-800 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" width="35" height="35">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button> */}

            {token ? (
              <div className="relative ml-3" onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen2 ? "true" : "false"}
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src={`http://localhost:8000/${user.photo || "imgs/avatar.png"}`} alt="User" loading="lazy" />
                </button>
                <div
                  className={`${
                    isDropdownOpen2 ? "block" : "hidden"
                  } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    to={`/DashboardUser/${user.id}`}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                  >
                    My Dashboard
                  </Link>

                  {user.role === "Admin" && (
                    <Link
                      to="/Dashboard"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                    >
                      Dashboard
                    </Link>
                  )}
                  
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    onClick={onLogout}
                  >
                    Logout
                  </a>
                </div>
              </div>
            ) : (
              <>
               <div className=" space-x-4  hidden sm:hidden md:flex ">
      <Link to="/login">
        <button className="rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-sm px-6 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white  hover:scale-105 shadow-md">
          LOGIN
        </button>
      </Link>
      <Link to="/signup">
      <button className="rounded-full border  border-cyan-400 text-cyan-400 shadow-cyan-400 text-sm px-5 py-2 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white hover:scale-105 shadow-md whitespace-nowrap">
  JOIN NOW
</button>

      </Link>
    </div>
    <div className="flex space-x-4  ">
  <Link to="/login">
    <button className=" md:hidden sm:flex rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-sm px-3 py-1 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white  hover:scale-105 shadow-md">
      LOGIN
    </button>
  </Link>
  <Link to="/signup">
    <button className=" md:hidden sm:flex items-center justify-center  rounded-full border border-cyan-400 text-cyan-400 shadow-cyan-400 text-sm px-2 py-1 transition duration-300 ease-in-out transform hover:bg-cyan-500 hover:text-white  hover:scale-105 shadow-md">
      JOIN NOW
    </button>
  </Link>


</div>
    </>
            )}
          </div>
        </div>
      </div>

      <div className={` md:hidden ${isDropdownOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
     {/*    <Link to="/home" className="text-white block rounded-md md:px-3 py-2 text-base font-medium">
                ABOULJID
              </Link> */}
             {/*   <Link to="/home" className="text-white block rounded-md md:px-3 py-2 text-base font-medium">
              <div
                className="logo"
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#F01543',
                  padding: '10px 20px',
                  borderRadius: '5px',
                }}
              >
          <span className="" id="A">A</span>
          <span className="text-secondary">BOU</span>
          <span className="text" id="A">L</span>
          <span className="text-secondary">JID</span>
        </div>
            </Link> */}
          <Link to="/home" className="text-cyan-400 block rounded-md px-3 py-2 text-base font-medium">Home</Link>
          <Link to="/work" className="text-gray-300 hover:bg-gray-700 hover:text-cyan-400 block rounded-md px-3 py-2 text-base font-medium">Work</Link>
          <Link to="/service" className="text-gray-300 hover:bg-gray-700 hover:text-cyan-400 block rounded-md px-3 py-2 text-base font-medium">Service</Link>

          <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-cyan-400 block rounded-md px-3 py-2 text-base font-medium">About</Link>
          <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-cyan-400 block rounded-md px-3 py-2 text-base font-medium">Contact</Link>

           

        </div>
      </div>

      {notification && <div className="notification">{notification}</div>}
    </nav>
  );
};

export default NavBar;
