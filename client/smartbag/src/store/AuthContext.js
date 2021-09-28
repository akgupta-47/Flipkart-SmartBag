import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  id: '',
  idSetter: (id) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [prodId, setProdId] = useState('');
  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };
  const idHandler = (id) => {
    setProdId(id);
  };

  const contextValue = {
    id: prodId,
    idSetter: idHandler,
    token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
