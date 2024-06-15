import {useState} from "react";
import {useAuthContext} from "../hooks/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);

    const response = await fetch("https://fullstack-workout-app-api.vercel.app/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      setTimeout(() => {
        setError(null);
      }, 3000);

      console.log("Error logging in.");
    }

    if (response.ok) {
      // save the user to localstorage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({type: "LOGIN", payload: json});
      setIsLoading(false);

      console.log("Logged in successfully.");
    }
  };

  return {login, error, isLoading};
};
