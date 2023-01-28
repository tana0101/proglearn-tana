import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyD7Ea5goO6hUqe_VGVC7M3ic-qDYrvKAiU",
  authDomain: "proglearn-a47e5.firebaseapp.com",
  projectId: "proglearn-a47e5",
  storageBucket: "proglearn-a47e5.appspot.com",
  messagingSenderId: "791884764936",
  appId: "1:791884764936:web:68b18d28ebf57eb24f7ebd",
  measurementId: "G-XQ2BQXGBZ2"
})

export const firebaseAuth = getAuth(firebaseApp);
