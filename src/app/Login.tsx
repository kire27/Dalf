import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../database/firebase-config";

function Login() {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // const auth = getAuth();
    // const navigate = useNavigate();

    return (
        <>
            <h1 className="loginPage"> Login here </h1>;
            <button onClick={() => signInWithGoogle()}>
                login with google
            </button>
        </>
    );
}

export default Login;
