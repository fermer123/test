import { useState } from 'react';

const { createContext } = require('react');

export const CustomContext = createContext();

export const Context = ({ children }) => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({
    id: 1,
    name: 'Igor',
    email: 'Igor@mail.ru',
  });
  const value = {
    count,
    setCount,
    user,
    setUser,
  };

  return (
    <CustomContext.Provider value={value}>
      {children} //app
    </CustomContext.Provider>
  );
};
