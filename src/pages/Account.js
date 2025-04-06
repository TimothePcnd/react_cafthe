import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import '../styles/Account.css'

function Account(props) {
    const user = JSON.parse(localStorage.getItem("user"));

    const [account, setAccount] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [inputChangeMail, setInputChangeMail] = useState(account.Mail_client);
    const [inputChangeTelephone, setInputChangeTelephone] = useState("");
    const [inputChangeAdresse, setInputChangeAdresse] = useState("");
    const [inputChangeOldMdp, setInputChangeOldMdp] = useState(account.mdp_client);
    const [inputChangeNewMdp, setInputChangeNewMdp] = useState(account.mdp_client)

    useEffect(() => {

        if (!user) {
            setError("Utilisateur non authentifié");
            setLoading(false);
            return;
        }
        const fetchAccount = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/client/${user.id}`);
                setAccount(response.data);
                setInputChangeMail (response.data.Mail_client)
                setInputChangeTelephone (response.data.Telephone_client)
                setInputChangeAdresse (response.data.adresse_client)

            } catch (error) {
                console.error("Erreur de chargement du profil", error);
            } finally {
                setLoading(false);
            }
        };
        void fetchAccount();
    }, [user?.id]);


    const handleChangeInfo = async (e) => {
        e.preventDefault();
        try {
            const handleChangeInfo = await axios.put(`${process.env.REACT_APP_API_URL}/api/client/${user.id}`, {
                "Mail_client": inputChangeMail,
                "Telephone_client": inputChangeTelephone,
                "adresse_client": inputChangeAdresse,
            });

        } catch (error) {
            console.error("Erreur lors de la connexion", error);
            setError(error.response?.data?.message || "Erreur");
        }
    };


    const handleChangeMdp = async (e) => {
        e.preventDefault();
        try {
            const handleChangeMdp = await axios.put(`${process.env.REACT_APP_API_URL}/api/client/${user.id}`, {
                "oldMdp": setInputChangeOldMdp,
                "newMdp": setInputChangeNewMdp,
            });

        } catch (error) {
            console.error("Erreur lors de la connexion", error);
            setError(error.response?.data?.message || "Erreur");
        }
    };



    return (

        <div className={"container-account"}>

            <div className={"account-form"}>
                <h3>Mon Compte</h3>
                <form onSubmit={handleChangeInfo}>
                    <div>
                        <h4>Email</h4>
                        <input type="email" value={inputChangeMail} onChange={(e) => {setInputChangeMail(e.target.value)}} />
                    </div>
                    <div>
                        <h4>Téléphone</h4>
                        <input type="text" value={inputChangeTelephone} onChange={(e) => setInputChangeTelephone(e.target.value)} />
                    </div>
                    <div>
                        <h4>Adresse postale</h4>
                        <input type="text" value={inputChangeAdresse} onChange={(e) => setInputChangeAdresse(e.target.value)} />
                    </div>

                    <button type="submit" className={"btn-profil"}>Modifier</button>
                </form>

                <form onSubmit={handleChangeMdp}>
                    <h4>Mon mot de passe</h4>
                    <input type="text" placeholder={"Nouveau mot de passe"} onChange={(e) => setInputChangeAdresse(e.target.value)} />
                    <button type="submit" className="btn-profil">Modifier</button>
                </form>
            </div>

            <div className={"order-summary"}>
                <h4>Récapitulatif</h4>
                <Link to={"/commande/client/:id"} className={"btn-detailCommande"}>Voir les commandes</Link>
            </div>
        </div>
    );
}

export default Account;
