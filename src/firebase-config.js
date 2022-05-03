import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdd7GqN7JTG2KRmbgeU3C9120ccMhdi38",
    authDomain: "restaurentsearchtesark.firebaseapp.com",
    projectId: "restaurentsearchtesark",
    storageBucket: "restaurentsearchtesark.appspot.com",
    messagingSenderId: "879004501389",
    appId: "1:879004501389:web:5b3b294f9b0a139375a9c4",
    measurementId: "G-56H5G32FKM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);