import { useState } from 'react';

const { createContext } = require('react');

export const CustomContext = createContext();

export const Context = ({ children }) => {
  const [count, setCount] = useState('nothing');
  const [user, setUser] = useState({
    login: '',
  });
  const value = {
    count,
    setCount,
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
