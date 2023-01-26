import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../database/firebase-config";

export default function Authenticate({ children }: any) {
    const [userAuth, setUserAuth] = useState(false);
    const [userAuthData, setUserAuthData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const clear = () => {
        setUserAuthData({});
        setIsLoading(false);
    };

    const authStateChanged = async (user: any) => {
        setIsLoading(true);
        if (user) {
            console.log("authorized");
            return;
        } else {
            clear();
            navigate("/login");
            console.log("unauthorized");
        }
        setUserAuthData({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        });
        setIsLoading(false);
        setUserAuth(true);
    };

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("authorized");
            console.log(user);
        } else {
            clear();
            navigate("/login");
            console.log("unauthorized");
        }
    });

    return <>{children}</>;
}
