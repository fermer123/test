import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { createContext } = require('react');

export const CustomContext = createContext();
export const Context = ({ children }) => {
  const push = useNavigate();
  const [user, setUser] = useState({
    login: '',
  });
  const [shop, setShop] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [status, setStatus] = useState('all');
  const [cart, setCart] = useState([]);
  console.log(cart);
  const addCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }

    const clothes = axios
      .get('http://localhost:8080/clothes')
      .then(({ data }) => setShop(data));
  }, []);

  const Register = async (data) => {
    const resp = await axios.post('http://localhost:8080/register', {
      ...data,
    });
    setUser(resp.data.user);
    localStorage.setItem('user', JSON.stringify(resp.data.user));
    push('/');
  };

  const Login = async (data) => {
    const resp = await axios.post('http://localhost:8080/login', { ...data });
    localStorage.setItem('user', JSON.stringify(resp.data.user));
    setUser(resp.data.user);
    push('/');
  };

  const Logout = () => {
    localStorage.removeItem('user');
    setUser({ login: '' });
  };

  const value = {
    user,
    shop,
    setUser,
    Register,
    Logout,
    Login,
    currPage,
    setCurrPage,
    status,
    setStatus,
    cart,
    setCart,
    addCart,
  };

  return (
    <CustomContext.Provider value={value}>
      {children}
      {/* App*/}
    </CustomContext.Provider>
  );
};
