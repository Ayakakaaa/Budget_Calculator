import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const app = initializeApp({
    apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
    authDomain: "yardzen-demo.firebaseapp.com",
    databaseURL: "https://yardzen-demo.firebaseio.com",
    projectId: "yardzen-demo",
    storageBucket: "yardzen-demo.appspot.com",
    messagingSenderId: "509183652730",
    appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
});

const db = getFirestore(app);
      
export async function getItems() {
        const itemsCol = collection(db, 'items');
        const itemSnapshot = await getDocs(itemsCol);
        const items = itemSnapshot.docs.map(doc => doc.data());
        console.log(items);
        return items;
};

  