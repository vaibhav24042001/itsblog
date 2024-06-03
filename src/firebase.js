import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // firebase
  apiKey: "AIzaSyC2QxjgRelZHdEmn5Boe9ed2Bgo08p7iSE",
  authDomain: "blogproject-2da94.firebaseapp.com",
  projectId: "blogproject-2da94",
  storageBucket: "blogproject-2da94.appspot.com",
  messagingSenderId: "1019677219216",
  appId: "1:1019677219216:web:ddea49db9b3c5659057b15",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
