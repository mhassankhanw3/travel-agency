import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOR82oxaU7nw2S7WJDAEjSnba9NoNBx4g",
  authDomain: "travel-agency-fb716.firebaseapp.com",
  projectId: "travel-agency-fb716",
  storageBucket: "travel-agency-fb716.appspot.com",
  messagingSenderId: "816373481942",
  appId: "1:816373481942:web:d9e8c683e07924d9146477",
  measurementId: "G-5M2HL9KLDD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
