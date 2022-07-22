// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtlaB-XyZHXLlDmu0jUIQQREJTu5SHm-k",
    authDomain: "contact-kepper-dev.firebaseapp.com",
    projectId: "contact-kepper-dev",
    storageBucket: "contact-kepper-dev.appspot.com",
    messagingSenderId: "578257422472",
    appId: "1:578257422472:web:5bc84df8f7e1de86f0f73d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app
