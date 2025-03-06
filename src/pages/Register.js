import React, {useContext, useState} from 'react';
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Register(props) {

    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [mdp_one, setMdp_one] = useState("")
    const [mdp_two, setMdp_two] = useState("")
    const [adresse, setAdresse] = useState("")

    if (mdp_one !== mdp_two) {
        alert("Erreur de confirmation")
    } else {
        setMdp_one("")
        setMdp_two("")
    }

        try {
            const response = await axios.post("http://localhost:3001/api/client/register",
                {
                    nom,
                    "nom_prenom_client": nom,
                    "Mail_client": email,
                    "mdp_client": mdp_one,
                    "adresse_client": adresse,
                },
            );

        }




    return (
            <div className={"container"}>
                <div className={"form-bg"}>
                    <h2>CONNEXION</h2>
                    <form onSubmit={handleSubmit}>
                        <ul>

                            <li>
                                <label htmlFor="name">Nom Prénom</label>
                                <input type="password"
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
                                <input type="password"
                                       value={adresse}
                                       onChange={(e) => setAdresse(e.target.value)}
                                />
                            </li>

                            {errorMsg && (<div>{errorMsg}</div>)} {/*Structure conditionnel*/}
                            <button type="submit">Créer son compte</button>

                        </ul>
                    </form>
                </div>
            </div>
    );
}

export default Register;