// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJFNbGnmWHZ61EDYJDD57q6zRdh3BHteI",
  authDomain: "book-store-9da23.firebaseapp.com",
  projectId: "book-store-9da23",
  storageBucket: "book-store-9da23.appspot.com",
  messagingSenderId: "1003663806778",
  appId: "1:1003663806778:web:78e1d2c60414f2f622c003",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;