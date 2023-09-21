import React, { createContext, useState } from "react";
import * as authServices from "../services/auth.services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext({
  login: () => {},
  register: () => {},
  methodsAuth: {},
  loading: false,
});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const methodsAuth = useForm();
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      setLoading(true);
      const { data } = await authServices.login(credentials);
      const { token } = data;
      localStorage.setItem("token", token);
      toast.success("Bienvenido");
      methodsAuth.reset();
      navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const register = async (credentials) => {
    try {
      setLoading(true);
      await authServices.register(credentials);
      toast.success("Usuario registrado");
      methodsAuth.reset();
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ login, methodsAuth, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
