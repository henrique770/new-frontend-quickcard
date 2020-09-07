import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import api from '~/services/api';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({ user: {} });

toast.configure();

export const AuthProvider = ({ children }) => {
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@QuickCard:token');
    const student = localStorage.getItem('@QuickCard:student');

    if (token && student) {
      return { token, student: JSON.parse(student) };
    }
    return '';
  });

  const signIn = useCallback(async ({ email, password }) => {
    setLoadingSignIn(true);
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      const { token, student } = response.data;

      localStorage.setItem('@QuickCard:token', token);
      localStorage.setItem('@QuickCard:student', JSON.stringify(student));

      setData({ token, student });

      toast.success('login feito com sucesso', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch {
      toast.error('falha no login', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setLoadingSignIn(false);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@QuickCard:token');
    localStorage.removeItem('@QuickCard:student');

    setData({ token: '', student: '' });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.student, signIn, signOut, loadingSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
