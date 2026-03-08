import React, { useEffect, useState, useMemo } from 'react';
import AuthContext from './authContex';

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(() => {
    const s = localStorage.getItem('session');
    return s ? JSON.parse(s) : null;
  });

  useEffect(() => {
    if (session) localStorage.setItem('session', JSON.stringify(session));
    else localStorage.removeItem('session');
  }, [session]);

  const login = async (username, password) => {
    try {
      const resp = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await resp.json();
      console.log('login response:', data); 
      if (data?.token) {
        const userSession = { username, token: data.token };
        setSession(userSession);
        return true;
      }
      return false;
    } catch (error) {
      console.error('login error', error);
      return false;
    }
  };

  const logout = () => setSession(null);

  const value = useMemo(() => ({
    session,
    login,
    logout,
    isLoggedIn: !!session
  }), [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};