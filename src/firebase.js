// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeKpjUqtMcbKa7tFJKkcLlpXE7skFYjJk",
  authDomain: "fir-storage-ec8f7.firebaseapp.com",
  projectId: "fir-storage-ec8f7",
  storageBucket: "fir-storage-ec8f7.appspot.com",
  messagingSenderId: "742116277085",
  appId: "1:742116277085:web:edc4f36f1b6a48ff5dc6b4",
  measurementId: "G-7P7KKQ0T7P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
