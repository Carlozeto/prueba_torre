import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { login, register, methodsAuth, loading } = useContext(AuthContext);

  const handleSubmit = (credentials) => {
    login(credentials);
  };

  const handleRegister = (credentials) => {
    register(credentials);
  }

  return {
    handleSubmit,
    methodsAuth,
    handleRegister,
    loading
  };
};

export default useAuth;
