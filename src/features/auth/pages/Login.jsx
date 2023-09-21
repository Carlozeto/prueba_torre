import React, { useState, useEffect } from "react";
import { FormLogin, RegisterForm } from "../components";
import { Tabs, Tab } from "@nextui-org/react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  useEffect(() => {
    if (activeTab === "login") {
      console.log("Redirigiendo a la pestaña de inicio de sesión");
    }
  }, [activeTab]);

  return (
    <div className="flex justify-between">
      <div
        className="w-2/3 bg-red-400 h-screen"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/e1/26/d3/e126d318274739fbb93081612b4edbc3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="w-1/3 h-screen flex justify-center items-center flex-col">
        <div className="p-3">
          <Tabs aria-label="Options" onChange={handleTabChange}>
            <Tab key="login" title="Login">
              <h4 className="text-3xl font-bold text-gray-80 mb-2">
                Inicio de sesión
              </h4>
              <p className="text-sm text-gray-700 mb-2">
                Bienvenido a <b>Favorite</b>. Por favor inicie sesión para
                continuar.
              </p>
              <div>
                <FormLogin />
              </div>
            </Tab>
            <Tab key="register" title="Register">
              <h4 className="text-3xl font-bold text-gray-80 mb-2">Registro</h4>
              <p className="text-sm text-gray-700 mb-2">
                Bienvenido a <b>Favorite</b>. Por favor registrese para
                continuar.
              </p>
              <div>
                <RegisterForm />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
