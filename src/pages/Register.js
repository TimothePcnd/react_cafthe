import React, {useState} from 'react';
import axios from "axios";
import '../styles/Register.css';
import {Link, useNavigate} from "react-router-dom";

function Register(props) {

    // Déclaration des différentes constantes
    const navigate = useNavigate();

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [mdp_one, setMdp_one] = useState("");
    const [mdp_two, setMdp_two] = useState("");
    const [adresse, setAdresse] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const date = new Date().toISOString().split('T')[0];


    const validateForm = () => {
        // Validation de l'email avec une expression régulière simple
        const emailVerification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVerification.test(email)) {
            setErrorMsg("Veuillez entrer une adresse email valide.");
            return false;
        }

        // Vérification que les deux mots de passe identiques
        if (mdp_one !== mdp_two) {
            setErrorMsg("Les mots de passe ne correspondent pas.");
            return false;
        }

        // Vérification que le champ mdp doit contenir minimum 6 caractères
        if (mdp_one.length < 6) {
            setErrorMsg("Le mot de passe doit contenir au moins 6 caractères.");
            return false;
        }

        // Vérification du numéro de téléphone
        const phoneVerification = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
        if (!phoneVerification.test(telephone)) {
            setErrorMsg("Veuillez entrer un numéro de téléphone valide.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/register`,
                {
                    "nom_prenom_client": nom,
                    "Mail_client": email,
                    "mdp_client": mdp_one,
                    "Telephone_client": telephone,
                    "adresse_client": adresse,
                    "Date_inscription_client": date
                }
            );

            // Réinitialisation des différents champs après la validation de l'inscription
            setNom("");
            setEmail("");
            setTelephone("");
            setMdp_one("");
            setMdp_two("");
            setAdresse("");

            setSuccessMsg("Votre compte a été créé avec succès!");

            // Redirection vers la page de connexion après la validation du formulaire d'inscription
            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("Une erreur est survenue lors de la création de votre compte.");
            }
        }
    };

    return (
        <div className={"container"}>
            <div className={"form-bg"}>
                <h2 className={"title-form"}>Créer un compte</h2>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="name">Nom Prénom</label>
                            <input type="text"
                                   id="name"
                                   value={nom}
                                   onChange={(e) => setNom(e.target.value)}
                                   required
                            />
                        </li>
                        <li>
                            <label htmlFor="mail">Email</label>
                            <input type="email"
                                   id="mail"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                            />
                        </li>
                        <li>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password"
                                   id="password"
                                   value={mdp_one}
                                   onChange={(e) => setMdp_one(e.target.value)}
                                   required
                            />
                        </li>
                        <li>
                            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
                            <input type="password"
                                   id="confirm-password"
                                   value={mdp_two}
                                   onChange={(e) => setMdp_two(e.target.value)}
                                   required
                            />
                        </li>
                        <li>
                            <label htmlFor="address">Adresse</label>
                            <input type="text"
                                   id="address"
                                   value={adresse}
                                   onChange={(e) => setAdresse(e.target.value)}
                                   required
                            />
                        </li>
                        <li>
                            <label htmlFor="telephone">N° de téléphone</label>
                            <input type="tel"
                                   id="telephone"
                                   value={telephone}
                                   onChange={(e) => setTelephone(e.target.value)}
                                   required
                            />
                        </li>
                        {errorMsg && (<div className="error-message">{errorMsg}</div>)}
                        {successMsg && (<div className="success-message">{successMsg}</div>)}
                        <button className={"cart-button"} type="submit">Créer son compte</button>
                    </ul>
                    <div className={"SeConnecter"}>
                        <Link to={`/login`} className={"details-btn"}>Se connecter</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
