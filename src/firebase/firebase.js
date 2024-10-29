// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    addDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAK3FnOqfdVbDB-Xl7zkURwYXVSL3jFRLo",
    authDomain: "ecommerce-comprapc.firebaseapp.com",
    projectId: "ecommerce-comprapc",
    storageBucket: "ecommerce-comprapc.appspot.com",
    messagingSenderId: "824482831754",
    appId: "1:824482831754:web:bad925adb86db9522bfc73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

//obtener toda una coleccion
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(database, 'products'));
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return productsList;
        } else {
            console.log('Coleccion vacía !');
        }
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
}

//obtener un producto
export async function getSingleProduct(id) {
    const documentRef = doc(database, 'products', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log('El documento no existe!');
        }
    } catch (error) {
        console.error('Error al obtener el documento: ', error);
    }
}

export async function sendOrder(order) {
    const ordersCollection = collection(database, 'orders');
    try {
        const docRef = await addDoc(ordersCollection, order);
        console.log('Nueva orden generada: ' + docRef.id);
        return docRef.id;
    } catch (error) {
        console.log('Error al agregar el documento: ' + error);
    }
}
