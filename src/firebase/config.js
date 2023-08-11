import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

import { serverTimestamp } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAF0_yGJdNXZpCA2KJ7wijkmUkiFWQ6buM",
  authDomain: "live-chat-21e35.firebaseapp.com",
  projectId: "live-chat-21e35",
  storageBucket: "live-chat-21e35.appspot.com",
  messagingSenderId: "925328324370",
  appId: "1:925328324370:web:19cb6859ccf7111f6a65cb"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const timestamp = serverTimestamp();

export {db,auth,timestamp}