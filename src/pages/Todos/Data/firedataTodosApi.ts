import React from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "../../../database/firebase-config";

// export function firestoreApi() {
//     return (
//         <div>

//         </div>
//     );
// }

export const sendData = async () => {
    const collectionRef = collection(firestore, "users");

    await setDoc(doc(collectionRef, "home"), {
        name: "San Francisco",
        state: "CA",
        country: "USA",
        capital: false,
        population: 860000,
        regions: ["west_coast", "norcal"],
    });

    await setDoc(doc(collectionRef, "notes"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        capital: false,
        population: 3900000,
        regions: ["west_coast", "socal"],
    });

    return;
};

export const fetchData = async () => {
    const docRef = doc(firestore, "cities", "SF");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
};
