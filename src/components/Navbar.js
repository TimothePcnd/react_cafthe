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
            <header className="navbar">

                <ul className="produit">
                    <li className={"li-navbar"}><Link to={`/produits/cafes`}><p className={"name-PageNav"}>Café</p></Link></li>
                    <li className={"li-navbar"}><Link to={`/produits/thes`}><p className={"name-PageNav"}>Thé</p></Link></li>
                    <li className={"li-navbar"}><Link to={`/produits/accessoires`}><p className={"name-PageNav"}>Accessoire</p></Link></li>
                </ul>

                <div className={"title-nav"}>
                    <Link to={`/`}><img src={"../../cafthe-title.png"} height={"35px"}></img></Link>
                </div>

                <ul className="right-ul">
                    <li className={"li-navbar"}><Link to="/Panier"><p className={"name-PageNav"}>Panier</p></Link></li>
                    {isAuthenticated ? (
                        <>
                            <button className="btn-logout"><Link to={"/account"}>Mon compte</Link></button>
                            <button className="btn-logout" onClick={handleLogout}>Se déconnecter</button>
                            </>
                    ): (
                        <Link to={`/login`}><button className="btn-login-nav">Se connecter</button></Link>
                    )}
                </ul>


            </header>



    );
}

export default Navbar;
