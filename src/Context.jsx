import { useEffect } from 'react';
import { useState } from 'react';

const { createContext } = require('react');

export const CustomContext = createContext();

export const Context = ({ children }) => {
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);

  const [user, setUser] = useState({
    login: '',
  });

  const value = {
    user,
    setUser,
  };

  return (
    <CustomContext.Provider value={value}>
      {children}
      {/* App*/}
    </CustomContext.Provider>
  );
};
