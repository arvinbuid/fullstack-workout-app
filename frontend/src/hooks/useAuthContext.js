import {useContext} from "react";
import {AuthContext} from "../context/authContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside AuthContextProvider.");
  }

  return context;
};
