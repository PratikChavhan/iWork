// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyD9P28XoRbJQ6HdPnydT9uYy4CvFmh_o",
  authDomain: "iwork-freelance-marketplace.firebaseapp.com",
  projectId: "iwork-freelance-marketplace",
  storageBucket: "iwork-freelance-marketplace.appspot.com",
  messagingSenderId: "702603427717",
  appId: "1:702603427717:web:48a7f38bacab35cc2b8eec",
  measurementId: "G-26TNXN61TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var storage = getStorage(app);

export default storage;
