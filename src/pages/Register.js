import React, {useState} from 'react';
import axios from "axios";
import '../styles/Register.css';
import {Link} from "react-router-dom";

 function Register(props) {

    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [mdp_one, setMdp_one] = useState("")
    const [mdp_two, setMdp_two] = useState("")
    const [adresse, setAdresse] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const date = new Date();



    const handleSubmit = async (e) => { //fonction asynchrone
        e.preventDefault();

        if (mdp_one !== mdp_two) {
            alert("Erreur de confirmation")
        } else {
            setMdp_one("")
            setMdp_two("")
        }

        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/register`,
                {
                    "nom_prenom_client": nom,
                    "Mail_client": email,
                    "mdp_client": mdp_one,
                    "Telephone_client": telephone,
                    "adresse_client": adresse,
                    "Dte_inscription_client": date
                },
            );
        } catch (error) {
            setErrorMsg("Une erreur est survenue lors de la création de votre compte.");
        }
    };


    return (
        <div className={"container"}>
            <div className={"form-bg"}>
                <h2 className={"title-form"}>Crée un compte.</h2>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="name">Nom Prénom</label>
                            <input type="text"
                                   value={nom}
                                   onChange={(e) => setNom(e.target.value)}
                            />
                        </li>
                        <li>
                            <label htmlFor="mail">Email</label>
                            <input type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                        </li>
                        <li>
                            <label htmlFor="name">Password</label>
                            <input type="password"
                                   value={mdp_one}
                                   onChange={(e) => setMdp_one(e.target.value)}
                            />
                        </li>
                        <li>
                            <label htmlFor="name">Adresse</label>
                            <input type="text"
                                   value={adresse}
                                   onChange={(e) => setAdresse(e.target.value)}
                            />
                        </li>
                        <li>
                            <label htmlFor="name">N° de téléphone</label>
                            <input type="tel"
                                   value={telephone}
                                   onChange={(e) => setAdresse(e.target.value)}
                            />
                        </li>
                        {errorMsg && (<div>{errorMsg}</div>)} {/*Structure conditionnel*/}
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