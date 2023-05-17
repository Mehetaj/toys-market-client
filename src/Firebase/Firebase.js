// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain ,
  projectId: import.meta.env.projectId ,
  storageBucket: import.meta.env.storageBucket ,
  messagingSenderId: import.meta.env.messagingSenderId ,
  appId: import.meta.env.appId ,
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