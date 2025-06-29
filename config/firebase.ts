// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9M418jsiNYgGG9Q8ZpE7z0ZDGJWuGmhU",
  authDomain: "finora-ae720.firebaseapp.com",
  projectId: "finora-ae720",
  storageBucket: "finora-ae720.firebasestorage.app",
  messagingSenderId: "461344762265",
  appId: "1:461344762265:web:f4a3a7f9e66e65875b4b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Use the default persistence
});

// db
export const firestore = getFirestore(app);