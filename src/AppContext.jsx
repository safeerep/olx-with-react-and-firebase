import { createContext, useState } from "react";
// export const AppContext = createContext();

export const AuthContext = createContext(null);
export default function AppContext ({ children }) {
    const [userr, setUserr] = useState('eppppppppppppp')

    return (
        <AuthContext.Provider value={userr}>
            { children }
        </AuthContext.Provider>
    )
}
