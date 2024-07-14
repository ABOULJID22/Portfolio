import {Link, Navigate, Outlet,useNavigate} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import axiosClient from "../axois-client.js";
import {useEffect,useState} from "react";
import moment from 'moment';
import jsPDF from 'jspdf';
import './styleCuisin/style.css';
import DashboardContent from "./styleCuisin/DashboardContent.jsx";
import KanbanContent from "./styleCuisin/KanbanContent.jsx";
import StatuCommend from "./styleCuisin/StatuCommend.jsx";
import StatuCommendOnline from "./styleCuisin/StatuCommendOnline.jsx";
import StatuLivraison from "./styleCuisin/StatuLivraison.jsx";
import CompteChef from "./styleCuisin/CompteChef.jsx";

export default function CuisineLayout() {
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


  const [isOpen, setIsOpen] = useState(false);

  const [restaurantTables, setRestaurantTables] = useState([]);

  useEffect(() => {
    getTable();
  }, []);
 const getTable = () => {
    axiosClient
      .get("/restaurant-tables")
      .then(({ data }) => {
        setRestaurantTables(data);

      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tables de restaurant:", error);
      });
  };

  //cuisin
  const [groupedOrders, setGroupedOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    axiosClient.get("/getorderLocal")
      .then(res => {
        // Group orders by creation date and table number
        const grouped = {};
        res.data.forEach(order => {
          const key = `${order.created_at}_${order.Numerotable}`;
          if (!grouped[key]) {
            grouped[key] = { date: order.created_at, Numerotable: order.Numerotable, orders: [] };
          }
          grouped[key].orders.push(order);
        });
        // Convert object to array for rendering
        const groupedArray = Object.values(grouped);
        setGroupedOrders(groupedArray);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des orderLocal:", error);
      });
  };


  const [showModal, setShowModal] = useState(false);
  const [tableCount, setTableCount] = useState('');



  const handleTableClick = (tableCount) => {
    setShowModal(true);
    console.log(tableCount)
    setTableCount(tableCount);
console.log(orderCount)

  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [orderCount, setOrdereCount] = useState(0);

  useEffect(() => {
    let total = 0;

    // Itérer sur les groupes d'ordres
    groupedOrders.forEach(group => {
      if (group.orders.some(order => order.new_command === 1)) {
        total++;
      }
    });

    // Mettre à jour l'état avec le total calculé
    setOrdereCount(total);
  }, [groupedOrders]);

  const [orderCountTable, setOrdereCountTable] = useState({});

  useEffect(() => {
    const tableCounts = {};

    // Itérer sur les groupes d'ordres
    groupedOrders.forEach(group => {
      const tableNumber = group.Numerotable;

      // Initialiser le compteur pour la table si elle n'existe pas encore
      if (!tableCounts[tableNumber]) {
        tableCounts[tableNumber] = 0;
      }

      // Vérifier s'il y a au moins une nouvelle commande dans le groupe
      if (group.orders.some(order => order.new_command === 1)) {
        tableCounts[tableNumber]++;
      }
    });

    // Mettre à jour l'état avec les totaux calculés pour chaque table
    setOrdereCountTable(tableCounts);
  }, [groupedOrders]);



  const handelAnnuler = (group) => {
    // Envoyer une requête au serveur pour annuler les commandes
    axiosClient.post("/annulerOrders", group.orders)
      .then(res => {
        // Identifier l'index du groupe de commandes à supprimer
        const index = groupedOrders.findIndex(orderGroup => orderGroup.Numerotable === group.Numerotable);
        // Créer une copie de l'état actuel
        const updatedGroupedOrders = [...groupedOrders];
        // Supprimer le groupe de commandes annulées de l'état local
        if (index !== -1) {
          updatedGroupedOrders.splice(index, 1);
          setGroupedOrders(updatedGroupedOrders);
        }
      })
      .catch(error => {
        console.error("Erreur lors de l'annulation des commandes :", error);
      });
  };


const changeStatuPayement = (group) => {
  // Mettre à jour le statut de paiement à 1
  const updatedOrders = group.orders.map(order => ({
    ...order,
    payment_status: 1,
    new_command: 0,
    last_command: 1
  }));

  // Envoyer une requête au serveur pour mettre à jour les commandes
  axiosClient.post("/updateOrdersLocal", updatedOrders)
    .then(res => {
      // Mettre à jour l'état local avec les nouvelles commandes
      const updatedGroupedOrders = groupedOrders.map(orderGroup => {
        if (orderGroup.Numerotable === group.Numerotable) {
          return {
            ...orderGroup,
            orders: updatedOrders
          };
        }
        return orderGroup;
      });
      setGroupedOrders(updatedGroupedOrders);
    })
    .catch(error => {
      console.error("Erreur lors de la mise à jour du statut de paiement :", error);
    });
};


const generatePDF = (group) => {
  const doc = new jsPDF();

// Construction du nom du fichier
const fileName = `commande_${moment(group.date).format('YYYYMMDD_HHmmss')}_table${group.Numerotable}.pdf`;

  // Contenu du PDF
  let content = `
    Table: ${group.Numerotable}
    Date de création: ${moment(group.date).format('MMMM Do YYYY, h:mm:ss a')}
    Nombre de personnes: ${group.orders[0].person_count}
    Prix total: ${group.orders[0].total_price}
    Type de paiement: ${group.orders[0].payment_type}
    Statut du corps: ${group.orders[0].body_status}
    Articles commandés:
  `;
  group.orders.forEach(order => {
    content += `
      - ${order.menu_id} - Quantité: ${order.quantity}, Prix unitaire: ${order.price}
    `;
  });

  // Ajout du contenu au PDF
  doc.text(content, 10, 10);

  // Téléchargement du PDF
  doc.save(fileName);
};


const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setIsOpen(false); // Fermer la barre latérale après avoir cliqué sur un élément
    setSelectedItem(itemName);
  };



  const [page, setPage] = useState('dashboard');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>

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
                    to={`/compte/chef/${user.id}`}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                  >
                  Compte
                  </Link>
                  {user.role === "chef" && (
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


<section className="page sidebar-2-page bg-blue-400 ">
  <aside id="logo-sidebar" className={`sidebar-2 z-20 ${isOpen ? "open" : ""}`} aria-label="Sidebar">
    <div className="inner">
      <header className="flex items-center h-16 px-2 bg-opacity-25 bg-black">
        <button className="sidebar-2-burger w-11 h-16 grid place-items-center text-white" onClick={() => setIsOpen(!isOpen)}>
       {/*    <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
          <span className="material-symbols-outlined"></span> */}
          <div className="flex items-center">
          <svg class="w-11 h-11 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
</svg>
<span className="ms-6 material-symbols-outlined" style={{ fontSize: '20px' }}>Chef</span>

</div>


        </button>
      </header>
      <nav className="grid gap-1 px-2">
        <ul className="space-y-2 font-medium py-3">
           <li className="mb-6 ">
            <Link onClick={() => handlePageChange('dashboard')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
</svg>
              </svg>
              <span className="ms-5 material-symbols-outlined" style={{ fontSize: '20px' }}>Dashboard</span>
            </Link>
          </li>
     {/* LivrStatu */}

     <li className="mb-8">
            <Link onClick={() => handlePageChange('StatuLivraison')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
            </svg>

              <span className="flex-1 ms-5 whitespace-nowrap " style={{ fontSize: '20px' }}>Status Delivery</span>
            </Link>
          </li>


          {/* localStatu */}

           <li className="mb-8 ">
            <Link onClick={() => handlePageChange('status')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
</svg>
            </svg>

              <span className="flex-1 ms-5 whitespace-nowrap" style={{ fontSize: '20px' }}>Order Local</span>
            </Link>
          </li>


           <li className="mb-8">
            {/* onlineStatu */}
            <Link onClick={() => handlePageChange('statusOnline')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
              </svg>
              <span className="ms-5 material-symbols-outlined" style={{ fontSize: '20px' }}>Order On-ligne</span>
            </Link>
          </li>
          <li className="mb-8">
            {/* onlineStatu */}
            <Link onClick={() => handlePageChange('Compte')} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
              <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>
              </svg>
              <span className="ms-5 material-symbols-outlined" style={{ fontSize: '20px' }}>Order On-ligne</span>
            </Link>
          </li>


          {/* Ajoutez d'autres éléments de navigation ici */}
        </ul>
      </nav>
    </div>
  </aside>
</section>

<div className={` ${isOpen ? 'ml-40' : ''}`}>
  {page === 'dashboard' && <DashboardContent />}
  {page === 'status' && <StatuCommend />}
  {page === 'statusOnline' && <StatuCommendOnline />}
  {page === 'StatuLivraison' && <StatuLivraison/>}
  {page === 'Compte' && <CompteChef/>}

</div>


    </>
  )
}
