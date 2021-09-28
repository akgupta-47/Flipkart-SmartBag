import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  search: '',
  callSearch: (search) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [search, setSearch] = useState('');
  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const Searcher = (term) => {
    setSearch(term);
  };

  const contextValue = {
    token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    search,
    callSearch: Searcher,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
