import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/auth/me", { withCredentials: true });
                setUser(res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user)); 
            } catch (error) {
                setUser(null);
                localStorage.removeItem("user"); 
            }
        };

        if (!user) {
            fetchUser();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
