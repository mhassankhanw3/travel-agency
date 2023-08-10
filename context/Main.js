import { useRouter } from "next/router";
import { useState, createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../firebase/config";

const MyContext = createContext();
export const useMainContext = () => useContext(MyContext);
export const MainContextProvider = (props) => {
  const [loading, setLoading] = useState(false);

  const newUser = async (email, password) => {
    const auth = getAuth(); // Get the auth instance
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential, "userCredential");
      // Signed in
      const user = userCredential.user;
      // ...
    } catch (error) {
      console.log(error, "error");
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    }
  };

  const router = useRouter();
  const { children } = props;

  return (
    <MyContext.Provider value={{ func: { newUser } }}>
      {children}
    </MyContext.Provider>
  );
};
