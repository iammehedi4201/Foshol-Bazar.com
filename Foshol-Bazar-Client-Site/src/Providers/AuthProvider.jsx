import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  console.log("observer catch :", user);

  const createuser = async (email, password, name, photoURL) => {
    setLoader(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Only proceed if user account creation is successful
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Only proceed if user account Update is successful

      await sendEmailVerification(userCredential.user);

      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  console.log("Loader State :-", loader);

  //LogIn 
  const logIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logOut
  const logOut = () => {
    // setLoader(true)
    return signOut(auth)
  }

  //sign in With googleProvider
  const googleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider)
  }

  //Set observer For User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        if (currentUser) {
          console.log("onauthStateChange is called ");
          setUser(currentUser)
          const userInfo = {
            email: currentUser.email,
          }
          const uri = 'https://foshol-bazar.onrender.com/jwt'
          const respone = await fetch(uri, {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo),
          })

          const data = await respone.json();
          //storing token in local Storeage 
          localStorage.setItem("bazar-access-token", data.token);
          setLoader(false);
        } else {
          localStorage.removeItem('bazar-access-token')
          setUser(null);
          // setLoader(false)
        }

      } catch (error) {
        throw error
      }

    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createuser,
    logIn,
    logOut,
    googleSignIn,
    loader
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
