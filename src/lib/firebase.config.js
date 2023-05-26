// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Api_Key,
  authDomain: process.env.Domain,
  projectId: process.env.Id,
  storageBucket: process.env.Bucket,
  messagingSenderId: process.env.Sender_id,
  appId: process.env.App_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;