import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

const useHome = () => {
  const { users } = useContext(HomeContext);

  return {
    users,
  };
};

export default useHome;
