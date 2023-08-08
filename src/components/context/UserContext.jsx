import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [mediaPath, setMediaPath] = useState("");

  return (
    <UserContext.Provider
      value={{ userData, setUserData, mediaPath, setMediaPath }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
