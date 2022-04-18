// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA39C4d0w72M5EBuYsxV8UdnPPox2AYitw",
    authDomain: "genius-car-services-6e7f9.firebaseapp.com",
    projectId: "genius-car-services-6e7f9",
    storageBucket: "genius-car-services-6e7f9.appspot.com",
    messagingSenderId: "853972429120",
    appId: "1:853972429120:web:84d06fe1d2f63bd99372a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;