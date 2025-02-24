import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import {AuthContext} from "../context/AuthContext";


function Navbar(props) {
    const {user, isAuthenticated, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }

    return (
            <nav className="nav-bar">

                <ul className="produit">
                    <li><Link to={`/produits/cafes`}>Café</Link></li>
                    <li><Link to={`/produits/thes`}>Thé</Link></li>
                    <li><Link to={`/produits/accessoires`}>Accessoires</Link></li>
                </ul>

                <div className={"title-nav"}><Link to={`/`}>[ CAFTHÉ ]</Link></div>

                <ul className="right-ul">
                    <li>Search</li>
                    <li><Link to="/Panier" className="link-nav">Panier</Link></li>
                    {isAuthenticated ? (
                        <>
                            <button className="btn-logout"><Link to={"/account"}>Mon compte</Link></button>
                            <button className="btn-logout" onClick={handleLogout}>Se déconnecter</button>
                            </>
                    ): (
                        <Link className="btn-login-nav" to='/login'>Se connecter</Link>
                    )}
                </ul>


            </nav>



    );
}

export default Navbar;
