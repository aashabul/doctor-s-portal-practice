import { useEffect, useState } from "react";
import initializeFirebase from "../../Pages/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();

    // for registration
    const registerUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // for login/signin
    const loginUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));

    }
    return {
        user,
        loading,
        authError,
        registerUser,
        loginUser,
        logOut
    }
}

export default useFirebase;