// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

let preventR = true;
let arr = []

const firebaseConfig = {
    apiKey: "AIzaSyBlLFFUbucs-HzimfYOgNRhog-7OeLGNyY",
    authDomain: "ontrackproductions-8a007.firebaseapp.com",
    projectId: "ontrackproductions-8a007",
    storageBucket: "ontrackproductions-8a007.appspot.com",
    messagingSenderId: "565345601183",
    appId: "1:565345601183:web:7e5f945f8133006ae384aa"
};

// Initialize Firebase

/*
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 8, 23);
    }
  }
}
 */
const app = initializeApp(firebaseConfig);
const storage = getStorage();

// Create a reference under which you want to list
export const listRef = ref(storage, 'HomeImages/');

// Find all the prefixes and items.
export const lista = () => {
    if (preventR == true) {
        console.log("si jala")
        listAll(listRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                    // All the prefixes under listRef.
                    // You may call listAll() recursively on them.
                });
                res.items.forEach((itemRef) => {
                    // All the items under listRef.
                    const a = itemRef.toString()
                    //console.log(a)
                    arr.push(
                    <div className='contenedor'>
                        <img src={a} />
                    </div>)
                });
            }).catch((error) => {
                // Uh-oh, an error occurred!
            });
        preventR = false;
    }
}