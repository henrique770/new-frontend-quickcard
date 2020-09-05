import React, { createContext, useCallback } from 'react';
import api from '~/services/api';

export const AuthContext = createContext({ user: {} });

export const AuthProvider = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', {
      email,
      password,
    });
    console.log(response.data);
  }, []);

  const signOut = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{ user: { name: 'henrique', password: '12345' }, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
