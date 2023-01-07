import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as authSignOut,
} from "firebase/auth";
import { auth, provider } from "../../database/firebase-config";

const AuthUserContext = createContext({
  authUser: {},
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser({});
    setIsLoading(false);
  };

  const authStateChanged = async (user: any) => {
    setIsLoading(true);
    if (!user) {
      clear();
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
    setIsLoading(false);
  };

  const signOut = () => authSignOut(auth).then(clear);

  // Listen for Firebase Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signOut,
  };
}
