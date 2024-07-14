import {Link, Navigate, Outlet,useNavigate} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import axiosClient from "../axois-client.js";
import {useEffect,useState} from "react";

export default function AdminLayout() {
  const {user, token, setUser, setToken, notification} = useStateContext();
  const navigate = useNavigate();
  const [currentDateTime, setCurrentDateTime] = useState("");

  if (!token) {
    return <Navigate to="/home"/>
  }

  const onLogout = ev => {
    ev.preventDefault()

    axiosClient.post('/logout')
      .then(() => {
        setUser({})
        setToken(null)
        navigate("/home");
      })
  }

//datetime
  useEffect(() => {
     const interval = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
         setUser(data)
      })
  }, [])

  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownMenu = document.getElementById('dropdown-menu');
      const userMenuButton = document.getElementById('user-menu-button');
      if (dropdownMenu && !dropdownMenu.contains(event.target) && !userMenuButton.contains(event.target)) {
        setIsDropdownOpen2(false); // Fermer le menu déroulant si le clic se produit en dehors de l'élément
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen2]); // Nous devons également surveiller les changements dans isDropdownOpen2





  return (
<div id="defaultLayout" className="flex">
  <aside className="bg-gray-800 text-white w-64 py-8">

{/*     <h6 className="text-sm text-gray-100 mb-4">abouljid</h6>

 */}
    <div
                className="logo"
                style={{
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#F01543',
                  paddingRight: '20px',
                  paddingLeft: ' 20px',
                  borderRadius: '5px',
                }}
              >
                <span className="">A</span>
                <span className="text-secondary">bou</span>
                <span className="text">R</span>
                <span className="text-secondary">eserve</span>
              </div>
              <div className="text-center text-xl font-bold mb-8">Dashboard
</div>
    <div className="px-2">
      <ul>
      <li className="mb-4 flex items-center">
  <Link to="/dashboard" className="py-2 px-4 rounded flex items-center">
    <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
    </svg>
    Home
  </Link>
</li>

        <li className="mb-4 flex items-center">
          <Link to="/users" className="py-2 px-4 rounded flex items-center">
          <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

            Users</Link>
        </li>
        <li className="mb-4 flex items-center">
          <Link to="/category" className="py-2 px-4 rounded flex items-center">
          <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
Categories</Link>
        </li>
        <li className="mb-4 flex items-center">
          <Link to="/menus" className="py-2 px-4 rounded flex items-center"><svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-6 4h6m-6 4h6M6 3v18l2-2 2 2 2-2 2 2 2-2 2 2V3l-2 2-2-2-2 2-2-2-2 2-2-2Z"/>
</svg>
Menus</Link>
        </li>
        <li className="mb-4 flex items-center">
          <Link to="/tables" className="py-2 px-4 rounded flex items-center"><svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.005 11.19V12l6.998 4.042L19 12v-.81M5 16.15v.81L11.997 21l6.998-4.042v-.81M12.003 3 5.005 7.042l6.998 4.042L19 7.042 12.003 3Z"/>
</svg>
Tables</Link>
        </li>
        <li className="mb-4 flex items-center">
          <Link to="/orderLocal" className="py-2 px-4 rounded flex items-center"> <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"/>
</svg>
Orders  Local</Link>
        </li>

        <li className="mb-4 flex items-center">
          <Link to="/orderOnline" className="py-2 px-4 rounded flex items-center"> <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

Orders Online</Link>
        </li>


        <li className="mb-4 flex items-center">
          <Link to="/userPaymentOnline" className="py-2 px-4 rounded flex items-center"> <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
</svg>

Payments Online</Link>
        </li>


        <li className="mb-4 flex items-center">
          <Link to="/cheff" className="py-2 px-4 rounded flex items-center">
          <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

Chefs</Link>
        </li>
        <li className="mb-4 flex items-center">
          <Link to="/promotion" className="py-2 px-4 rounded flex items-center">
          <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
</svg>

Offers</Link>
        </li>

        <li className="mb-4 flex items-center">
          <Link to="/subscribes" className="py-2 px-4 rounded flex items-center"> <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
</svg>

Subscribes</Link>
        </li>

        <li className="mb-4 flex items-center">
          <Link to="/messages" className="py-2 px-4 rounded flex items-center"> <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

Messages</Link>
        </li>

        <li className="mb-4 flex items-center">
          <Link to="/settings/1" className="py-2 px-4 rounded flex items-center"> <svg class="w-6 h-6 text-gray-100 dark:text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

Settings</Link>
        </li>
      </ul>
    </div>
  </aside>
  <div className="content flex-1">
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    {/* <Link to="/home" className="px-4 py-2 text-blue-500 hover:underline">To Home Page</Link>
      <div>{currentDateTime}</div>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="mr-4">{user.name}</div>
          <a onClick={onLogout} className="btn-logout cursor-pointer text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Logout</a>
        </div>
      </div> */}
          <div className="mr-4">{user.name}</div>
          <div>{currentDateTime}</div>



      <div
                className="relative ml-3"
                onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
              >
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>

                    <img
                      className="h-8 w-8 rounded-full"
                      src={'http://localhost:8000/'+user.photo || "../imgs/avater.png"}
                      alt="User Image"
                      loading="lazy"
                    />
                  </button>
                </div>
                <div
                  className={`  ${
                    isDropdownOpen2 ? "block " : "hidden "
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
                   My dashboard
                  </Link>
                  {user.role === "Admin" && (
                      <Link
                        to="/home"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                      >
                        Homme
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
    </header>
    <main className="p-6">
      <Outlet />
    </main>
    {notification && (
      <div className="notification fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md">
        {notification}
      </div>
    )}
  </div>
</div>
  )
}
