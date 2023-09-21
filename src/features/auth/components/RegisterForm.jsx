import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { useAuth } from "../hooks";

const RegisterForm = () => {
  const { handleRegister, methodsAuth, loading } = useAuth();

  return (
    <form onSubmit={methodsAuth.handleSubmit(handleRegister)}>
      <Controller
        control={methodsAuth.control}
        name="username"
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            label="Username"
            variant="bordered"
            className="mb-3"
          />
        )}
      />
      <Controller
        control={methodsAuth.control}
        name="email"
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="email"
            label="Email"
            variant="bordered"
            className="mb-3"
          />
        )}
      />
      <Controller
        control={methodsAuth.control}
        name="password"
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            {...field}
            type="password"
            label="Contraseña"
            variant="bordered"
            className="mb-3"
          />
        )}
      />
      <Button color="primary" className="w-full" type="submit">
        {loading ? "Cargando..." : "Registrarse"}
      </Button>
    </form>
  );
};

export default RegisterForm;
