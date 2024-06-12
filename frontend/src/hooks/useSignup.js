import {useState} from "react";
import {useAuthContext} from "../hooks/useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);

    const response = await fetch("http://localhost:4000/api/user/signup", {
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
    }

    if (response.ok) {
      // save the user to localstorage
      localStorage.setItem("user", JSON.stringify(json));

      // update the auth context
      dispatch({type: "LOGIN", payload: json});
      setIsLoading(false);
    }
  };

  return {signup, error, isLoading};
};
