import React, { useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = () => {};

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};