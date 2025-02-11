import React, {useState} from 'react';
import '../styles/Login.css'
import axios from "axios";

function Login(props) {
    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const handleSubmit = async (e) => { //fonction asynchrone
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/api/login",
                {
                    email,
                    mdp,
                },
            );

            const {token, client} = response.data;
        } catch (error) {}
    }

    return (
        <div className={"form-bg"}>
            <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <ul>

                        <li>

                            <label htmlFor="mail">Email&nbsp;:</label>
                            <input type="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required style={{width: "100%"}} />
                        </li>

                        <li>
                            <label htmlFor="name">Password&nbsp;:</label>
                            <input type="password"
                                   value={mdp}
                                   onChange={(e) => setMdp(e.target.value)}
                                   required style={{width: "100%"}} />
                        </li>

                        <li>
                            <button type="submit">Connexion</button>
                        </li>

                    </ul>
                </form>
        </div>
    );
}

export default Login;