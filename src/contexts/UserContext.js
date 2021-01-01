import React from 'react';
import { useState, createContext, useContext } from 'react';

const Context = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export function useUserContext() {
  return useContext(Context);
}
