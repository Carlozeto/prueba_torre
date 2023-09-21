import { api } from "../../../api/api";

export const allUsers = async () => {
  return await api.get("/user/all");
};
