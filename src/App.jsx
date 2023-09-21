import { Routes, Route } from "react-router-dom";
import { Login } from "./features/auth/pages";
import { Home } from "./features/home/page";
import { AuthProvider } from "./features/auth/context/AuthContext";
import { HomeProvider } from "./features/home/context/HomeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer hideProgressBar theme="colored" />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <HomeProvider>
                <Home />
              </HomeProvider>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
