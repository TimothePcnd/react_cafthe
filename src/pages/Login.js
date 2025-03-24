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

    const handleSubmit = async (e) => { //fonction asynchrone
        e.preventDefault();
        setErrorMsg("")

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
                <h2 className={"title-form"}>CONNEXION</h2>
                    <form onSubmit={handleSubmit}>
                        <ul>

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
                                       value={mdp}
                                       onChange={(e) => setMdp(e.target.value)}
                                       />
                            </li>
                                {errorMsg && (<div>{errorMsg}</div>)} {/*Structure conditionnel*/}
                                <button  className={"cart-button"} type="submit">Connexion</button>
                        </ul>

                        <div className={"addAccount"}>
                            <Link to={`/client/register`} className={"details-btn"}>Crée un compte</Link>
                        </div>
                    </form>
            </div>
        </div>
    );
}

export default Login;