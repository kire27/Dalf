import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../database/firebase-config";

export default function AuthRoute({ children }: any) {
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
    };

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        setIsLoading(true);
        if (user) {
            console.log("authorized");
            console.log(user);
            return;
        } else {
            clear();
            navigate("/login");
            console.log("unauthorized");
        }
        setUserAuthData({
            uid: user!.uid,
            email: user!.email,
            displayName: user!.displayName,
            photoURL: user!.photoURL,
        });
        setIsLoading(false);

        console.log(userAuthData);
    });

    return <>{children}</>;
}
