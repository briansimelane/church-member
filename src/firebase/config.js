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
const qAll = query(colRef) //, where("society", "==", "Moroka"), orderBy('surname', 'asc') 
const qDube = query(colRef, where("society", "==", "Dube"), orderBy('surname', 'asc'))
const qIkwezi = query(colRef, where("society", "==", "Ikwezi"), orderBy('surname', 'asc'))
const qJabavu7am = query(colRef, where("society", "==", "Jabavu 7am"), orderBy('surname', 'asc'))
const qJabavu11am = query(colRef, where("society", "==", "Jabavu 11am"), orderBy('surname', 'asc'))
const qJabulani = query(colRef, where("society", "==", "Jabulani"), orderBy('surname', 'asc'))
const qMoroka = query(colRef, where("society", "==", "Moroka"), orderBy('surname', 'asc'))
const qZondi = query(colRef, where("society", "==", "Zondi"), orderBy('surname', 'asc'))

// realtime collection data
// const to be used in application
const membersData = ref('')
const membersDube = ref('')
const membersIkwezi = ref('')
const membersJabavu7am = ref('')
const membersJabavu11am = ref('')
const membersJabulani = ref('')
const membersMoroka = ref('')
const membersZondi = ref('')

// update receipt tracker from database
const membersDataReceived = ref(false)
const membersDubeReceived = ref(false)
const membersIkweziReceived = ref(false)
const membersJabavu7amReceived = ref(false)
const membersJabavu11amReceived = ref(false)
const membersJabulaniReceived = ref(false)
const membersMorokaReceived = ref(false)
const membersZondiReceived = ref(false)

onSnapshot(qAll, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersData.value = members
                console.log('from Firebase config - data: ', members)
        //update receipt tag
        membersDataReceived.value = true
})

onSnapshot(qDube, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersDube.value = members
         // update receipt tag
               
})

onSnapshot(qIkwezi, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersIkwezi.value = members
                console.log('from Firebase config - data (Ikwezi): ', members)
})

onSnapshot(qJabavu7am, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersJabavu7am.value = members
                console.log('from Firebase config - data (Jabavu 7am): ', members)
})

onSnapshot(qJabavu11am, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersJabavu11am.value = members
                console.log('from Firebase config - data (Jabavu 11am): ', members)
})

onSnapshot(qJabulani, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersJabulani.value = members
                console.log('from Firebase config - data (Jabulani): ', members)
})

onSnapshot(qMoroka, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersMoroka.value = members
                console.log('from Firebase config - data (Moroka): ', members)
})

onSnapshot(qZondi, (snapshot) => {
    let members = []
                snapshot.docs.forEach((doc) => {
                    members.push({ ...doc.data(), id: doc.id })
                })
        membersZondi.value = members
                console.log('from Firebase config - data (Zondi): ', members)
})

export {
    db, colRef, storage, auth, membersData, 
    membersDube, membersIkwezi, membersJabavu7am, membersJabavu11am, membersJabulani, membersMoroka, membersZondi,
    membersDataReceived
}