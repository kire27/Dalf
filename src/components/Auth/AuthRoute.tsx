import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../database/firebase-config";

function AuthRoute(props: any) {
  const { children } = props;
  const navigate = useNavigate();
  // const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    AuthCheck();
    return () => AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("authorized");
      navigate("/");
      console.log(user);
    } else {
      navigate("/login");
      console.log("unauthorized");
    }
  });

  return <>{children}</>;
}

export default AuthRoute;
