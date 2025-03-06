import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Footer.css'

function Footer(props) {
    return (
        <footer>
            <div className={"Container"}>
                <div className={"section1"}>
                    <h3>Contact</h3>
                    <p>10 Av de la République, Blois</p>
                    <p>+33 600000000</p>
                </div>
                <div className={"section2"}>
                    <h3>Shop</h3>
                        <p><Link to={`/produits/cafes`}>Café</Link></p>
                        <p><Link to={`/produits/thes`}>Thé</Link></p>
                        <p><Link to={`/produits/accessoires`}>Accessoires</Link></p>
                </div>
                <div className={"section3"}>
                    <h3>Sécurité Confidentialité</h3>
                    <p>Mentions légales</p>
                    <p>Conditions générales de vente</p>
                </div>
            </div>
                <p className={"title-footer"}>cafthé</p>
        </footer>
    );
}

export default Footer;