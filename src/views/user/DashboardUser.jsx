import React, { useState, useEffect } from 'react';
import axiosClient from '../../axois-client';
import { useStateContext } from '../../contexts/ContextProvider';
import { Link,useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCog, faSignOutAlt,faShoppingBag,faHeart,faEnvelope,faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import jsPDF from 'jspdf';

function DashboardUser() {
  const { notification } = useStateContext();
  const [showProfile, setShowProfile] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [ShowSettings, setShowSettings] = useState(false);
  const [ShowOrders, setShowOrders] = useState(false);
  const [ShowTransaction, setShowTransaction] = useState(false);

  useEffect(() => {
    axiosClient.get('/user').then(({ data }) => {
      setUser(data);
    });
  }, []);

  const handleLogout = () => {
    // Ajoutez la logique de déconnexion ici
  };

  const navigate = useNavigate();
  const { token } = useStateContext();

  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    telephone: '',
    sexe: '',
    nationalite: '',
    photo: null,
    adresse: '',
    ville: '',
    password: '',
    password_confirmation: ''
  });

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modificationSuccess, setModificationSuccess] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (token) {
      setLoading(true);
      axiosClient.get(`/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
      })
      .catch(() => {
        setLoading(false);
      });
    }
  }, [token]);

  const updatePhoto = () => {
    const formData = new FormData();
    formData.append('photo', photo);

    axiosClient.post(`/users/${user.id}/update-photo`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(({ data }) => {
      setModificationSuccess(true);
      setTimeout(() => {
        setModificationSuccess(false);
        setShowProfile(true);
        setShowSettings(false);
        setShowTransaction(false);
      }, 2000);
    })
    .catch((err) => {
      console.error('Error updating photo:', err.response.data.error);
      // Affichez un message d'erreur à l'utilisateur ici...
    });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    const updatedUser = { ...user };

    if (user.id) {
      axiosClient.put(`/users/${user.id}`, updatedUser, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        if (photo) {
          updatePhoto();
          window.location.reload();
        } else {
          setModificationSuccess(true);
          setTimeout(() => {
            setModificationSuccess(false);
            window.location.reload();

            /* navigate('/DashboardUser'); */
            setShowProfile(true);
            setShowSettings(false);
          }, 2000);
        }
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
    } else {
      // ... code pour le cas où l'utilisateur est nouveau
    }
  };


  const handleChange = (field, value) => {
    if (field === 'photo') {
      setPhoto(value);
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [field]: value,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: null,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);
    handleChange('photo', file);
  };



  //order
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    getUser();
  }, []);
 const getUser= () => {
    axiosClient
      .get("/users")
      .then(({ data }) => {
        setUsers(data);

      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des tables de restaurant:", error);
      });
  };

  //cuisin
  const [groupedOrdersonline, setGroupedOrdersonline] = useState([]);

  useEffect(() => {
    getOrdersonline();
  }, []);




  const getOrdersonline = () => {
    axiosClient.get("/orderOnlineTolivraison")
      .then(res => {
        // Group ordersonline by creation date and table number
        const grouped = {};
        res.data.forEach(order => {
          const key = `${order.created_at}_${order.user_id}`;
          if (!grouped[key]) {
            grouped[key] = { date: order.created_at, user_id: order.user_id, ordersonline: [] };
          }
          grouped[key].ordersonline.push(order);
        });
        // Convert object to array for rendering
        const groupedArray = Object.values(grouped);
        setGroupedOrdersonline(groupedArray);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des orderLocal:", error);
      });
  };



  const [isOpendetail, setIsOpendetail] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);



const [orderCount, setOrdereCount] = useState(0);
useEffect(() => {
  let total = 0;

  // Itérer sur les groupes d'ordres
  groupedOrdersonline.forEach(group => {
    if (group.ordersonline.some(order => order.new_command === 0)) {
      total++;
    }
  });

  // Mettre à jour l'état avec le total calculé
  setOrdereCount(total);
}, [groupedOrdersonline]);

const [menus, setMenus] = useState([]);

useEffect(() => {
  getMenus();
}, []);


const getMenus = () => {
  axiosClient
    .get("/menus")
    .then(({ data }) => {
      setMenus(data);
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des menus :", error);
    });
};

const [modalOpen, setModalOpen] = useState(false);
const [selectedOrder, setSelectedOrder] = useState(null);

const handleOrderClick = (order) => {
  setSelectedOrder(order);
  setModalOpen(true);
};






const getMenuTitle = (menuId) => {
  const menu = menus.find(menu => menu.id === menuId);
  return menu ? menu.title : 'Titre introuvable';
};
const getMenuPrice = (menuId) => {
  const menu = menus.find(menu => menu.id === menuId);
  return menu ? menu.price : 'quantity  introuvable';
};

const handleDetail = (group) => {
  setSelectedGroup(group);
  setIsOpendetail(true);
};

const closeModalDetail = () => {
  setIsOpendetail(false);
  setSelectedGroup(null);
};
const closeModal = () => {
  setShowModal(false);
};



//payement
const [userPaymentOnline, setUserPaymentOnline] = useState([]);

useEffect(() => {
  getUserPayment();
}, []);

const getUserPayment = () => {
  axiosClient.get('/getinfocard')
    .then(({ data }) => {
      setLoading(false);
      setUserPaymentOnline(data);
      calculateTotalPrice(data);
    })
    .catch((error) => {
      setLoading(false);
      console.error('Une erreur s\'est produite lors du chargement des données :', error);
    });
}

/* const calculateTotalPrice = (data) => {
  const totalPrice = data.reduce((acc, curr) => acc + parseFloat(curr.total_price), 0);
  setTotalPrice(totalPrice.toFixed(2)); // Fixer le total à 2 décimales
} */

const getUserName = (userId) => {
  const userm =  (user.id === userId);
  if (userm==true) {
    return user.name;
  } else {
    return 'Utilisateur introuvable';
  }
};





  return (
    <div>
      <div id="defaultLayout">
      <aside className="  bg-gray-800 text-white p-4 space-y-4 me-6">


        <div className="flex flex-col items-center space-y-2">
          <img
            className="w-20 h-20 border-4 border-white rounded-full"
            src={`http://localhost:8000/${user.photo}`}
            alt="User Image"
            loading="lazy"
          />

          <div className="flex items-center space-x-2">
            {user.id && (
              <p className="text-lg font-semibold">
                {user.name}
              </p>
            )}
          </div>
        </div>

  <a
    onClick={() => { setShowProfile(true); setShowChangePassword(false); setShowSettings(false); setShowOrders(false); setShowWhishlist(false); setShowTransaction(false); }}
    className="flex items-center justify-start space-x-2 text-base py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
  >
    <FontAwesomeIcon icon={faUser} className="text-lg" />
    Profile
  </a>

  <a
    onClick={() => { setShowProfile(false); setShowChangePassword(true); setShowSettings(false); setShowOrders(false); setShowWhishlist(false); setShowTransaction(false); }}
    className="flex items-center justify-start space-x-2 text-base py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
  >
    <FontAwesomeIcon icon={faLock} className="text-lg" />
    Changer le mot de passe
  </a>

  <a
    onClick={() => { setShowSettings(true); setShowProfile(false); setShowChangePassword(false); setShowOrders(false); setShowWhishlist(false); setShowTransaction(false); }}
    className="flex items-center justify-start space-x-2 text-base py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
  >
    <FontAwesomeIcon icon={faCog} className="text-lg" />
    Settings
  </a>

  <a
    onClick={() => { setShowOrders(true); setShowProfile(false); setShowChangePassword(false); setShowSettings(false); setShowWhishlist(false); setShowTransaction(false); }}
    className="flex items-center justify-start space-x-2 text-base py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
  >
    <FontAwesomeIcon icon={faShoppingBag} className="text-lg" />
    Order & Reordering
  </a>

  <a
    onClick={() => { setShowWhishlist(true); setShowProfile(false); setShowChangePassword(false); setShowSettings(false); setShowOrders(false); setShowTransaction(false)
    }}
    className="flex items-center justify-start space-x-2 text-base py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
  >
    <FontAwesomeIcon icon={faHeart} className="text-lg" />
    Whishlist
  </a>
{/*     <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
 */}

<a
  onClick={() => {
    setShowTransaction(true);
    setShowProfile(false);
    setShowChangePassword(false);
    setShowSettings(false);
    setShowOrders(false);
    setShowWhishlist(false);
  }}
  className="mb-4 flex items-center justify-start space-x-2 text-base py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 text-white"
>
  <FontAwesomeIcon icon={faExchangeAlt} className="w-5 h-5 text-white" />
  <span>My Transaction</span>

</a>

  <a
    onClick={handleLogout}
    className="flex items-center justify-start space-x-2 text-base py-2 px-4 bg-red-500 rounded-lg hover:bg-red-700 transition duration-300"
  >
    <FontAwesomeIcon icon={faSignOutAlt} className="text-lg" />
    Déconnexion
  </a>
</aside>



        <div className="content">
          <header></header>
          <main>
            <div className="h-full">
              {notification && (
                <div className="notification">{notification}</div>
              )}

              {showProfile && (
                <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center space-y-4">
                  {/* Contenu du profil */}
                  <img
                    className="w-40 border-4 border-white rounded-full"
                    src={`http://localhost:8000/${user.photo}`}
                    alt="User Image"
                    loading="lazy"
                  />

                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-2">
                      {user.id && (
                        <p className="text-2xl">
                          {user.name}
                          <sup className="text-sm text-gray-500">{user.role}</sup>
                        </p>
                      )}
                    </div>

                    <p className="text-gray-700">{user.email}</p>
                    <p className="text-sm text-gray-500">
                      {user.ville}, {user.nationalite}
                    </p>

                    <ul className="mt-2 text-gray-700">
                      <li className="flex border-b py-2">
                        <span className="font-bold">Nom complet :</span>
                        <span className="text-gray-700">{user.name}</span>
                      </li>
                      <li className="flex border-b py-2">
                        <span className="font-bold">Téléphone :</span>
                        <span className="text-gray-700">{user.telephone}</span>
                      </li>
                      <li className="flex border-b py-2">
                        <span className="font-bold">Email :</span>
                        <span className="text-gray-700">{user.email}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {showChangePassword && (
                <div>
                    <div className="h-full p-8">
                      <div className="bg-white rounded-lg shadow-xl pb-8">
                      {loading && (
                          <div   className="flex items-center justify-center h-screen" role="status">
                          <svg aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span class="sr-only">Loading...</span>
                      </div>)
                        }
                      {!loading && (
                        <form onSubmit={onSubmit} className="p-6">


                          <label htmlFor="password">Password:</label>
                          <input type="password"
                          onChange={ev => setUser({...user, password: ev.target.value})}
                          placeholder="Password"
                          />
                          <label htmlFor="password">Confirmation Password:</label>
                          <input type="password"
                          onChange={ev => setUser({...user, password_confirmation: ev.target.value})}
                          placeholder="Password Confirmation"/>




                          {modificationSuccess && (
                            <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">
                              Modification enregistrée avec succès!
                            </div>
                          )}

                          <button type="submit"  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                            Save
                          </button>
                        </form>
                        )}
                      </div>
                  </div>
                  </div>
              )}

              {ShowSettings && (
                <div>
                  <div className="h-full p-8">
                      <div className="bg-white rounded-lg shadow-xl pb-8">
                      {loading && (
                          <div   className="flex items-center justify-center h-screen" role="status">
                          <svg aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span class="sr-only">Loading...</span>
                      </div>)
                        }
                      {!loading && (
                        <form onSubmit={onSubmit} className="p-6">

                        <label htmlFor="photo">Photo de profil:</label>
                        <input
                          type="file"
                          id="photo"
                          accept="image/*"
                          onChange={handleImageChange}
                        />

                          <label htmlFor="name">Name:</label>
                          <input
                            type="text"
                            id="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                          />

                          <label htmlFor="email">Email:</label>
                          <input
                            type="text"
                            id="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                          />
                          <label htmlFor="telephone">Phone:</label>
                          <input
                            type="text"
                            id="telephone"
                            value={user.telephone}
                            onChange={(e) => setUser({ ...user, telephone: e.target.value })}
                          />
                          <label htmlFor="sexe">Gender:</label>
                          <input
                            type="text"
                            id="sexe"
                            value={user.sexe}
                            onChange={(e) => setUser({ ...user, sexe: e.target.value })}
                          />
                          <label htmlFor="ville">Ville:</label>
                          <input
                            type="text"
                            id="ville"
                            value={user.ville}
                            onChange={(e) => setUser({ ...user, ville: e.target.value })}
                          />
                          <label htmlFor="nationalite">Nationalite:</label>
                          <input
                            type="text"
                            id="nationalite"
                            value={user.nationalite}
                            onChange={(e) => setUser({ ...user, nationalite: e.target.value })}
                          />
                          <label htmlFor="adresse">Adresse:</label>
                          <input
                            type="text"
                            id="adresse"
                            value={user.adresse}
                            onChange={(e) => setUser({ ...user, adresse: e.target.value })}
                          />
                          <label htmlFor="password">Password:</label>
                          <input type="password"
                          onChange={ev => setUser({...user, password: ev.target.value})}
                          placeholder="Password"
                          />
                          <label htmlFor="password">Confirmation Password:</label>
                          <input type="password"
                          onChange={ev => setUser({...user, password_confirmation: ev.target.value})}
                          placeholder="Password Confirmation"/>




                          {modificationSuccess && (
                            <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">
                              Modification enregistrée avec succès!
                            </div>
                          )}

                          <button type="submit"  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                            Save
                          </button>
                        </form>
                        )}
                      </div>
                  </div>
                </div>
              )}

              {/* Ajoutez d'autres sections selon les besoins */}

              {ShowOrders && (
  <div className="ms-2 ">
<table className="card animated fadeInDown min-w-full my-4 ml-5 p-8 max-h-[20px] overflow-y-auto">
    <thead>
        <tr className="bg-gray-200">
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Prix</th>
            <th className="px-4 py-2">Livraison</th>
            <th className="px-4 py-2">Détails</th>
        </tr>
    </thead>
    {loading ? (
        <tbody>
            <tr>
                <td colSpan="5" className="text-center">Chargement...</td>
            </tr>
        </tbody>
    ) : (
        <tbody>
            {groupedOrdersonline.map((group, index) => (
                (group.ordersonline[0].user_id == user.id) && (
                    <tr key={index}>
                        <td className="px-4 py-2">{group.ordersonline[0].name}</td>
                        <td className="px-4 py-2">{moment(group.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        <td className="px-2 py-2">{group.ordersonline[0].total_price}</td>
                        <td className="px-8 py-2">
                            {group.ordersonline[0].to_livraison === 0 ? (
                                <svg className="w-6 h-6 dark:text-white text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </td>
                        <td className="px-3 py-2">
                            <button onClick={() => handleDetail(group)} className="hover:colore-blue-700 text-blue-500 font-bold py-2 px-4 rounded">
                                <svg className="w-6 h-6 text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                )
            ))}
        </tbody>
    )}
</table>

</div>






)}
{ShowTransaction && (
      <div className="ms-2">
      <table className="card animated fadeInDown min-w-full my-4 ml-5 p-8">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Client</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Prix</th>
            <th className="px-4 py-2">Paiement Card</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" className="text-center">Chargement...</td>
            </tr>
          ) : userPaymentOnline.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">Aucune donnée à afficher.</td>
            </tr>
          ) : (
            userPaymentOnline.map((userPay, id) => (
              (userPay.user_id == user.id) && (

              <tr key={id}>
                <td className="px-4 py-2">{ getUserName(userPay.user_id)}</td>
                <td className="px-4 py-2">{moment(userPay.created_at).format('MMMM Do YYYY, h:mm:ss a')}</td>
                <td className="px-2 py-2">{userPay.total_price}</td>
                <td className="px-8 py-2">{userPay.card_brand}</td>
              </tr>)
            ))
          )}
        </tbody>
      </table>
    </div>
)}


   </div>
          </main>
        </div>


        {isOpendetail && selectedGroup && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-gray-800 bg-opacity-50" onClick={closeModal}></div>
    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md  max-h-[600px] overflow-y-auto">
      {/* Modal header */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 rounded-t">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Détails de la commande</h3>
        <button
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
          onClick={closeModalDetail}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      {/* Modal content */}
      <div className="p-4 md:p-5 space-y-6">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p className="text-sm text-gray-600">Client:</p>
      <p className="text-lg font-medium text-gray-900 dark:text-white">{selectedGroup.ordersonline[0].name}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Telephone:</p>
      <p className="text-lg font-medium text-gray-900 dark:text-white">{selectedGroup.ordersonline[0].phone}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Adress:</p>
      <p className="text-lg font-medium text-gray-900 dark:text-white">{selectedGroup.ordersonline[0].address_line1}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Prix total:</p>
      <p className="text-lg font-medium text-gray-900 dark:text-white">{selectedGroup.ordersonline[0].total_price}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">City:</p>
      <p className="text-lg font-medium text-gray-900 dark:text-white">{selectedGroup.ordersonline[0].city}</p>
    </div>
    <div>
      <p className="text-sm text-gray-600">Date Command :</p>
      <p className="text-lg font-medium text-gray-900 dark:text-white">{moment(selectedGroup.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  </div>
  <div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Articles commandés:</h3>
    {selectedGroup && selectedGroup.ordersonline && (
      <table className="w-full mt-4 border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white">Menu</th>
            <th className="border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white">Quantité</th>
            <th className="border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white">Prix unitaire</th>
          </tr>
        </thead>
        <tbody>
          {selectedGroup && selectedGroup.ordersonline.map(order => (
            <tr key={order.id}>
              <td className="border border-gray-400 px-4 py-2 text-sm text-gray-900 dark:text-white">{getMenuTitle(order.menu_id)}</td>
              <td className="border border-gray-400 px-4 py-2 text-sm text-gray-900 dark:text-white">{order.quantity}</td>
              <td className="border border-gray-400 px-4 py-2 text-sm text-gray-900 dark:text-white">{getMenuPrice(order.menu_id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
</div>

    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default DashboardUser;
