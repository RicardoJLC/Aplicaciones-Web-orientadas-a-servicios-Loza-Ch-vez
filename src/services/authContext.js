import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  user: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {}
});

export default AuthContext;