import React, { useEffect, useState, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth} from "./Firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getDoc(doc(db, "users", user.uid))
                .then(() => {
                    setUser({
                        userName: user.displayName,
                        userId: user.uid,
                    })
                })
            }
            else {
                setUser(null);
            }
        })
    }, [user]);
    const setAsUser = (val) => {
        setUser(val);
    }
    return (
        <AuthContext.Provider value={{ name: user?.userName, userId: user?.userId, setAsUser}}>
            {children}
        </AuthContext.Provider>
    )
}
