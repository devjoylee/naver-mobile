import React, { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';

const Context = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || null));

  useEffect(() => {
    if (user) {
      sessionStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
}

export function useUserContext() {
  return useContext(Context);
}
