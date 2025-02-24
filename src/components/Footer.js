import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Footer.css'

function Footer(props) {
    return (
        <footer>
                <div className={"section1"}>
                    <h3>Contact</h3>
                    <h4>Adresse</h4>
                    <p>10 Av de la République, Blois</p>
                    <h4>Téléphone</h4>
                    <p>+33 600000000</p>
                </div>
                <div className={"section1"}>
                    <h3>Shop</h3>
                        <p><Link to={`/produits/cafes`}>Café</Link></p>
                        <p><Link to={`/produits/thes`}>Thé</Link></p>
                        <p><Link to={`/produits/accessoires`}>Accessoire</Link></p>
                </div>
                <div className={"section1"}>
                    <h3>Securité <br/> Confidentialité</h3>
                    <p>Mentions légales</p>
                    <p>Conditions générales de vente</p>
                </div>
                <h2>cafthé</h2>
        </footer>
    );
}

export default Footer;