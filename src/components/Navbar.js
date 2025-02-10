import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';

function Navbar(props) {
    return (
        <div className={"nav"}>


            <ul className={"left-ul"}>
                <li><Link to={`/produits/cafes`}>CAFÉ</Link></li>
                <li><Link to={`/produits/thes`}>THÉ</Link></li>
                <li><Link to={`/produits/accessoires`}>ACCESSOIRE</Link></li>
                <li><Link to={`/produits/accessoires`}>A PROPOS</Link></li>
            </ul>

            <a className={"title-nav"} href={"/"}>[ CAFTHÉ ]</a>

            <ul className={"right-ul"}>
                <li>LATEAM</li>
                <li>BOGOSSE</li>
                <li className={"login-nav"}><Link to={`/produits/accessoires`}>LOGIN</Link></li>
            </ul>

        </div>
    );
}

export default Navbar;