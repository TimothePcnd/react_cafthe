import React, {useState, useContext} from 'react';
import '../styles/Login.css'
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

function Login(props) {
    const { login } = useContext(AuthContext); // fonction login venant du contexte
    const navigate = useNavigate(); //La navigation

    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const validateForm = () => {
        // Validation de l'email avec une expression régulière simple
        const emailVerification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVerification.test(email)) {
            setErrorMsg("Veuillez entrer une adresse email valide.");
            return false;
        }

        // Vérification que le champ mdp doit contenir minimum 6 caractères
        if (mdp.length < 6) {
            setErrorMsg("Le mot de passe doit contenir au moins 6 caractères.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => { //fonction asynchrone
        e.preventDefault();
        setErrorMsg("")

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`,
                {
                    "Mail_client": email,
                    "mdp_client": mdp,
                },

            );

            const {token, client} = response.data;

            //On met à jour le contexte d'authentification
            login(token, client);

            // Redirection d'un client vers une page
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de la connexion", error);
            if (error.response.data.message){
                setErrorMsg(error.response.data.message);
            } else {
                setErrorMsg("Erreur");
            }

        }

    };

    return (

        <div className={"container"}>
            <div className={"form-bg"}>
                <h2 className={"title-form"}>CONNEXION.</h2>
                    <form onSubmit={handleSubmit}>
                        <p className={"message-obligatory"}><span className={"obligatory"}>*</span> champs obligatoires</p>
                        <ul>

                            <li>

                                <label htmlFor="mail">Email <span className={"obligatory"}>*</span></label>
                                <input type="email"
                                       value={email}
                                       placeholder={"Votre adresse mail"}
                                       onChange={(e) => setEmail(e.target.value)}
                                        />
                            </li>

                            <li>
                                <label htmlFor="name">Password <span className={"obligatory"}>*</span></label>
                                <input type="password"
                                       value={mdp}
                                       placeholder={"Votre mot de passe"}
                                       onChange={(e) => setMdp(e.target.value)}
                                       />
                            </li>
                                {errorMsg && (<div>{errorMsg}</div>)} {/*Structure conditionnel*/}
                                <button  className={"cart-button"} type="submit">Connexion</button>
                        </ul>

                        <div className={"addAccount"}>
                            <Link to={`/client/register`} className={"details-btn"}>Créer un compte</Link>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default Login;