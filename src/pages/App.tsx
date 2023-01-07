import { useState } from "react";
import "../sass/App.sass";
import { Route, Routes } from "react-router";
import Home from "./app/Home";
import NotFound from "./NotFound";

import { collection, getDocs } from "firebase/firestore";

import AuthRoute from "../components/Auth/AuthRoute";
import Login from "./Login";
import useFirebaseAuth from "../components/Auth/authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../database/firebase-config";
import Authenticate from "../components/Auth/Authenticate";

export function App() {
  // const numbers = [1, 2, 3];

  // const index = numbers.indexOf(2);
  // const added = [numbers.slice(0, index), 4, numbers.slice(index)];

  // const [users, setUsers] = useState([]);
  // const userCollectionRef = collection(firestore, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => {
  //       ...doc.data()
  //     }));
  //   };

  //   getUsers();
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Authenticate>
              <Home />
            </Authenticate>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
