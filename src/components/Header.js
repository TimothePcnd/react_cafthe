import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Header.css';

function Header(props) {
    return (
        <div className={"line-header"}>

                <ul className={"ul-header"}>
                    <li className={"offres"}><Link to={`/produits/cafes`}>OFFRES SPÉCIALES</Link></li>
                    <li className={"news"}><Link to={`/produits/thes`}>INSCRIVEZ-VOUS À LA NEWSLETTER </Link></li>
                </ul>

        </div>
    );
}

export default Header;