import React, { createContext, useCallback, useState } from 'react';
import api from '~/services/api';

export const AuthContext = createContext({ user: {} });

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@QuickCard:token');
    const student = localStorage.getItem('@QuickCard:student');

    if (token && student) {
      return { token, student: JSON.parse(student) };
    }
    return '';
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', {
      email,
      password,
    });

    const { token, student } = response.data;

    localStorage.setItem('@QuickCard:token', token);
    localStorage.setItem('@QuickCard:student', JSON.stringify(student));

    setData({ token, student });
    // console.log(response.data);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@QuickCard:token');
    localStorage.removeItem('@QuickCard:student');

    setData({ token: '', student: '' });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.student, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
