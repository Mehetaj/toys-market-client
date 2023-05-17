// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
  };

// const firebaseConfig = {
//   apiKey: "AIzaSyC5Nkjn8silimqm5REfKRp8FHT-lwPGiBE",
//   authDomain: "toy-market-23c9c.firebaseapp.com",
//   projectId: "toy-market-23c9c",
//   storageBucket: "toy-market-23c9c.appspot.com",
//   messagingSenderId: "949289131193",
//   appId: "1:949289131193:web:35bbfb02296bc9fc7a8f68"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;