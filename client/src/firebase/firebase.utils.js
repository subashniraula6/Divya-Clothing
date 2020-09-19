import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAXkoxReoGl7CflgLsGfgW8UKxKbPrJRmE",
    authDomain: "crwn-db-70532.firebaseapp.com",
    databaseURL: "https://crwn-db-70532.firebaseio.com",
    projectId: "crwn-db-70532",
    storageBucket: "crwn-db-70532.appspot.com",
    messagingSenderId: "255884729822",
    appId: "1:255884729822:web:7946fe1591ac003333514f",
    measurementId: "G-RFGGVPB961"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    //console.log("UserRef", userRef)
    //const collectionRef = firestore.collection('users')
    const snapShot = await userRef.get()
    //console.log("userSnapshot", snapShot)
    //const collectionSnapshot = await collectionRef.get()
    //console.log(collectionSnapshot)
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user", error.message)
        }
        console.log({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }
    return userRef;
}

export const convertCollectionsSnapshotToMap = async (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return (transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {})
    );
}

export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
}

/*
////AddCollectionItems programatically to Firebase from existing Object-Collections in our Redux store
export const AddCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    });

    return await batch.commit()
}
*/

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Sign In
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
