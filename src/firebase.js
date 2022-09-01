// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANtEbB53tFWOeejkO-Mm6Wt-ckvNpNGl0",
    authDomain: "todoapplication-etp.firebaseapp.com",
    projectId: "todoapplication-etp",
    storageBucket: "todoapplication-etp.appspot.com",
    messagingSenderId: "497001238119",
    appId: "1:497001238119:web:0c612c0d9f1473a5450ec2",
    measurementId: "G-3R23QW3PTM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);