import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyComfSlaqz2_8V7F_Zwi4uYHcSe8xXoSKY",
  authDomain: "image-uploader-325f3.firebaseapp.com",
  projectId: "image-uploader-325f3",
  storageBucket: "image-uploader-325f3.appspot.com",
  messagingSenderId: "184149962789",
  appId: "1:184149962789:web:705706b5292367ce4e4fcc",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
