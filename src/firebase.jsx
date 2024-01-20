import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAubwVo8EG_vkHhwqARNeOS2wH2mfw4hs",
  authDomain: "voting-app-e042e.firebaseapp.com",
  projectId: "voting-app-e042e",
  storageBucket: "voting-app-e042e.appspot.com",
  messagingSenderId: "485546850661",
  appId: "1:485546850661:web:0716a9d1913f992202898c",
  measurementId: "G-EDFFGQ6GEN",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchData = async (collectionName) => {
  try {
    const data = [];
    const querySnapshot = await onSnapshot(collection(db, collectionName), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        data.push(doc.data());
      });
    });

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getCricketVotes = async () => {
  try {
    return await fetchData('cricketVotes');
  } catch (error) {
    console.error("Error getting cricket votes:", error);
    throw error;
  }
};

export const getFootballVotes = async () => {
  try {
    return await fetchData('footballVotes');
  } catch (error) {
    console.error("Error getting football votes:", error);
    throw error;
  }
};

export default db;
