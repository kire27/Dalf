import { useEffect, useState } from "react";
import "../sass/app.sass";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import NotFound from "./NotFound";

import AuthRoute from "./Auth/AuthRoute";
import Login from "./Login";
// import useFirebaseAuth from "./Auth/authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore, provider } from "../database/firebase-config";
import Authenticate from "./Auth/AuthRoute";

import { sendData } from "../pages/Todos/Data/firedataTodosApi";
import { collection, doc, getDocs } from "firebase/firestore";

export function App() {
    // const numbers = [1, 2, 3];

    // const index = numbers.indexOf(2);
    // const added = [numbers.slice(0, index), 4, numbers.slice(index)];

    const [users, setUsers] = useState([]);
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

    const [hook, setHook] = useState(0);

    if (hook === 0) {
        sendData();

        setHook(1);
    }

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
