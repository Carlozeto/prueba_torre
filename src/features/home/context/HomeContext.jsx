import React, { createContext, useEffect, useState } from "react";
import * as homeServices from "../services/home.services";

export const HomeContext = createContext({
  users: [],
});

export const HomeProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const allUsers = async () => {
    try {
      const { data } = await homeServices.allUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    allUsers();
  }, []);
  return (
    <HomeContext.Provider
      value={{
        users,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
