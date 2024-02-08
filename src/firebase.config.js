import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPbZLkK7fZoGc87IIm0UjvYhPUQF2pMn4',
  authDomain: 'house-marketplace-app-5041d.firebaseapp.com',
  projectId: 'house-marketplace-app-5041d',
  storageBucket: 'house-marketplace-app-5041d.appspot.com',
  messagingSenderId: '567948767893',
  appId: '1:567948767893:web:ae930c51a15d9f0150a19c',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
