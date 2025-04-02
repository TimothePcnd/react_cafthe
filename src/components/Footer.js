import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Footer.css'

function Footer(props) {
    return (
        <footer>
            <div className={"container-footer"}>
                <div className={"section-footer"}>
                    <h3>Contact</h3>
                    <ul className={"list-section"}>
                        <li><p>10 Av de la République, Blois</p></li>
                        <li><p>+33 600000000</p></li>
                    </ul>


                </div>

                <div className={"section-footer"}>
                    <h3>Page du site</h3>
                    <ul className={"list-section"}>
                        <li><p><Link to={`/produits/cafes`}>Café</Link></p></li>
                        <li><p><Link to={`/produits/thes`}>Thé</Link></p></li>
                        <li><p><Link to={`/produits/accessoires`}>Accessoire</Link></p></li>
                    </ul>

                </div>

                <div className={"section-footer"}>
                    <h3>Sécurité Confidentialité</h3>
                    <ul className={"list-section"}>
                        <li><p><Link to={`/cgv`}>Conditions générales de vente</Link></p></li>
                        <li><p><Link to={`/cgu`}>Conditions générales d'utilisation</Link></p></li>
                        <li><p><Link to={`/politique`}>Politique de Confidentialité</Link></p></li>

                    </ul>


                </div>

            </div>

            <div className={"img-footer"}>
                <img src={"../../cafthe-footer.png"} alt={"Nom du site en grand"}></img>
            </div>
        </footer>
    );
}

export default Footer;