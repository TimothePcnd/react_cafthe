import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Footer.css'

function Footer(props) {
    return (
        <footer>

                <div className={"section1"}>
                    <h3>Inscrivez vous à la newsletter</h3>
                    <form action="" method="get" class="form-example">
                        <div class="newsletter">
                            <label for="email">Entrer votre email: </label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div class="form-example">
                            <input type="submit" value="Subscribe" />
                        </div>
                    </form>
                </div>

                <div className={"section2"}>
                    <h3>Contact</h3>
                    <h4>Adresse</h4>
                    <p>10 Av de la République, Blois</p>
                    <h4>Téléphone</h4>
                    <p>+33 600000000</p>
                </div>
                <div className={"section3"}>
                    <h3>Shop</h3>
                    <ul>
                        <li><Link to={`/produits/cafes`}>Café</Link></li>
                        <li><Link to={`/produits/thes`}>Thé</Link></li>
                        <li><Link to={`/produits/accessoires`}>Accessoire</Link></li>
                    </ul>
                </div>
                <div className={"section4"}>
                    <h3>Securité <br/> Confidentialité</h3>
                    <p>Mentions légales</p>
                    <p>Conditions générales de vente</p>
                </div>
        </footer>
    );
}

export default Footer;