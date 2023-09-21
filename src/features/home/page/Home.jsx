import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { Button } from "@nextui-org/react";
import { useHome } from "../hooks";

const Home = () => {
  const { users } = useHome();
  const [showUsersContainer, setShowUsersContainer] = useState(false);

  const handleSearchBarClick = () => {
    setShowUsersContainer(true);
  };

  const handleSearchBarBlur = () => {
    setShowUsersContainer(false);
  };

  const lastFiveUsers = users.slice(-5);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Busca tus amigos y agrégales para que puedas ver su perfil
        </h1>
        <div className="relative flex items-center gap-2">
          <input
            type="text"
            placeholder="Buscar..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            onClick={handleSearchBarClick}
            onBlur={handleSearchBarBlur}
          />
          <Button color="primary" type="submit">
            Buscar
          </Button>
          {showUsersContainer && (
            <div className="absolute top-8 bg-white border border-gray-300 p-4 rounded shadow mt-2 w-full">
              {lastFiveUsers.map((user) => (
                <div key={user.id} className="mb-2 border-b p-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={user.avatar || "https://i.imgur.com/6VBx3io.png"}
                      alt="No image"
                      className="w-6 h-6 rounded-full border-2"
                    />
                    <p>{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
