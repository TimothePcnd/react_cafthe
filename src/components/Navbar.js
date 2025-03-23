import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import {AuthContext} from "../context/AuthContext";
import {CartContext} from "../context/CartContext";


function Navbar(props) {
    const {user, isAuthenticated, logout} = useContext(AuthContext);
    const {items} = useContext(CartContext)
    const handleLogout = () => {
        logout();
    }

    return (
            <nav className="navbar">

                <ul className="produit">
                    <li className={"li-navbar"}><Link to={`/produits/cafes`}>Café</Link></li>
                    <li className={"li-navbar"}><Link to={`/produits/thes`}>Thé</Link></li>
                    <li className={"li-navbar"}><Link to={`/produits/accessoires`}>Accessoires</Link></li>
                </ul>

                <div className={"title-nav"}>
                    <Link to={`/`}><img src={"cafthe-title.png"} height={"35px"}></img></Link>
                </div>

                <ul className="right-ul">
                    <li className={"li-navbar"}><Link to="/Panier" className="link-nav">Panier ({items.length})</Link></li>
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
