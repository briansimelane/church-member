// Imports from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, query, where, orderBy } from 'firebase/firestore'
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"
import { ref } from 'vue'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIMesfMOMsokgi0uXRYnWKd19LR5BEiv4",
    authDomain: "methodist-member.firebaseapp.com",
    projectId: "methodist-member",
    storageBucket: "methodist-member.appspot.com",
    messagingSenderId: "547441020682",
    appId: "1:547441020682:web:af828d51bc7d0fdfc974f3"
}

// initialise firebase app
const firebaseApp = initializeApp(firebaseConfig)


// initialise services
const db = getFirestore()
const auth = getAuth()
const storage = getStorage(firebaseApp);


// collection ref
const colRef = collection(db, 'methodist_members') //'members'

//queries
const q = query(colRef ) //, where("society", "==", "Moroka"), orderBy('surname', 'asc') 

// realtime collection data
// const to be used in application
const membersData = ref('')

onSnapshot(q, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersData.value = members
                //console.log('from Firebase config - data: ', members)
})

export {
    db, colRef, membersData, storage, auth
}