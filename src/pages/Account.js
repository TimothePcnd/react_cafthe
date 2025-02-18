import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";


function Account(props) {
    const user = JSON.parse(localStorage.getItem('user'));

    const [account, setAccount] = useState({});
    const [loading, setLoading] = useState(true); // Pour savoir si les données sont en cours de chargement
    const [error, setError] = useState(null);


    useEffect(() => {
        console.log(user)

        if (!user) {
            setError("Utilisateur non authentifié");
            setLoading(false);
            return; // Si user est null, on arrête l'exécution
        }

        const fetchAccount = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/client/${user.id}`);
                setAccount(response.data);
            } catch (error) {
                console.error("Erreur de chargement du profil", error);
            } finally {
                setLoading(false); /* On arrête d'afficher le chargement (squelette) */
            }
        };

        void fetchAccount();
    }, [user.id]);

    console.log(account)

    return (
        <div className={""}>
            <h3>Hello {account.nom_prenom_client}</h3>
        </div>
    );
}

export default Account;