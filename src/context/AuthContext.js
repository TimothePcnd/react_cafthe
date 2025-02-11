import React, {createContext, useState, useEffect} from 'react';

/* On exporte le contexte pour y avoir accès*/
export const AuthContext = createContext(null);

/* Création du provider pour la connexion et la déco*/
export function AuthProvider({children}) {
    const [user, setUser] = useState(null); //client
    const [token, setToken] = useState(null); //token JWT

    // Stockage dans le LocalStorage pour la persistance des données
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedUser && storedToken) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser));
        }
    }, []);

    //Si le token ou l'user changent, on met à jour le LocalStorage
    useEffect(() => {
        if (token && user) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }, [token, user]); //si le token change, on relance useEffect

    // Connexion (on reçoit les données envoyées par l'API : token + infos user)
    const login = (jwt, userData) => {
        setToken(jwt);
        setUser(userData);
    }
    // Déconnexion
    const logout = () => {
        setToken(null);
        setUser(null);
    };

    const value = {
        token,
        user,
        login,
        logout,
        isAuthenticated : !!token, //si il y a un token c'est "vrai" sinon "faux"
    };

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}
