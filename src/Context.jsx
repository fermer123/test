import axios from 'axios';
import { useEffect, useMemo } from 'react';
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
  const [count, setCount] = useState(1);
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }

    if (localStorage.getItem('cart') !== null) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
    axios
      .get('http://localhost:8080/clothes')
      .then(({ data }) => setShop(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const endPrice = useMemo(() => {
    return Number(cart.reduce((acc, val) => acc + val.price * val.count, 0));
  }, [cart]);

  const addCart = (item) => {
    const sameItem = cart.findIndex(
      (e) =>
        e.id === item.id &&
        e.price === item.price &&
        e.color === item.color &&
        e.size === item.size,
    );

    if (sameItem >= 0) {
      setCart(
        cart.map((e) => {
          if (
            e.id === item.id &&
            e.price === item.price &&
            e.color === item.color &&
            e.size === item.size
          ) {
            return {
              ...e,
              count: +cart[sameItem].count + +item.count,
            };
          } else {
            return e;
          }
        }),
      );
    } else {
      setCart([...cart, item]);
    }
  };

  const addOrder = async (data) => {
    await axios.post('http://localhost:8080/orders', {
      ...data,
      clothes: cart,
      price:
        Array.isArray(ticket) && ticket.length
          ? (endPrice / 100) * (100 - ticket[0].sum)
          : endPrice,
      userEmail: user,
    });

    await axios.patch(`http://localhost:8080/users/${user.id}`, {
      orders: [
        ...user.orders,
        {
          clothes: cart,
          price:
            Array.isArray(ticket) && ticket.length
              ? (endPrice / 100) * (100 - ticket[0].sum)
              : endPrice,
        },
      ],
    });
    setCart([]);
    push('/success');
  };

  const updateItem = (id, color, size, count) => {
    setCart(
      cart.map((e) => {
        if (e.id === id && e.color === color && e.size === size) {
          return {
            ...e,
            count: count,
          };
        } else {
          return e;
        }
      }),
    );
  };

  const deleteItem = (id, size, color) => {
    setCart(
      cart.filter((e) => {
        return e.id !== id && e.size !== size && e.color !== color;
      }),
    );
  };

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
    localStorage.removeItem('cart');
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
    deleteItem,
    count,
    setCount,
    updateItem,
    ticket,
    setTicket,
    addOrder,
    endPrice,
  };

  return (
    <CustomContext.Provider value={value}>
      {children}
      {/* App*/}
    </CustomContext.Provider>
  );
};
