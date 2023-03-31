import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdu-cE7lRn6sxRR9evH-h-s_Jx9ynS5kA",
  authDomain: "quiz-application-59407.firebaseapp.com",
  projectId: "quiz-application-59407",
  storageBucket: "quiz-application-59407.appspot.com",
  messagingSenderId: "307676253667",
  appId: "1:307676253667:web:3c3ee5b957753c77fce4d6",
  measurementId: "G-S181JZKCBK"
};

const app = initializeApp(firebaseConfig);

export {app};