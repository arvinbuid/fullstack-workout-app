import {useState} from "react";
import {useAuthContext} from "../hooks/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);

    const response = await fetch("https://fullstack-workout-app-api.vercel.app/api/user/signup", {
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

      console.log("Error signing up.");
    }

    if (response.ok) {
      // save the user to localstorage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({type: "LOGIN", payload: json});
      setIsLoading(false);

      console.log("Signed up successfully!");
    }
  };

  return {signup, error, isLoading};
};
