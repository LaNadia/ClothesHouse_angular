// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore/lite';
import { FIREBASE_ENVIRONMENT } from "./firebaseEnvironment";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD-mdA3EvfI1ADzQIMCC7KGnJkDJjqc3_M",
//   authDomain: "auth-forproject.firebaseapp.com",
//   projectId: "auth-forproject",
//   storageBucket: "auth-forproject.appspot.com",
//   messagingSenderId: "989630725800",
//   appId: "1:989630725800:web:544f2f0cfcfcbc3b024c9d"
// };

// Initialize Firebase
const app = initializeApp(FIREBASE_ENVIRONMENT);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db: Firestore) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }