import { signOut } from "firebase/auth";
import { JSXElementConstructor, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../database/firebase-config";
import Counter from "../../database/state/components/Counter";

import TodoList from "../Todos/components/TodoList.js";

function Home() {
    const navigate = useNavigate();

    const [count, setCount] = useState(0);

    return (
        <>
            <h1 className="home"> Hello World </h1>
            <button onClick={() => signOut(auth)}>sign out</button>
            <div>
                {/* {true &&
            users.map((user: string, key: number) => {
            return <div key={key}> {user} </div>;
            })} */}

                {/* <p> {authUser?.email} </p> */}
            </div>
            <div className="card">
                <button onClick={() => setCount((count: number) => count + 1)}>
                    count is {count}
                </button>
                <Counter />
            </div>
            <TodoList />
        </>
    );
}

export default Home;
