import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-mx9_jcwH_f4gYKjknlTx0KFT6R_p4hI",
    authDomain: "crwn-clothing-db-5c8ea.firebaseapp.com",
    projectId: "crwn-clothing-db-5c8ea",
    storageBucket: "crwn-clothing-db-5c8ea.appspot.com",
    messagingSenderId: "1064796196438",
    appId: "1:1064796196438:web:90a792ba3864e9857875f7",
    measurementId: "G-QZ5RMXN4RQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    console.log(snapshot);

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('Error creating user', error.message);
        }
    }
    
    return userRef;
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
