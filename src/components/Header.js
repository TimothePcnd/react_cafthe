import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import '../styles/Header.css';
import {AuthContext} from "../context/AuthContext";
import {  useCart } from "../context/CartContext";


function Header(props) {
    const {user, isAuthenticated, logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }
    // Permet de voir le nombre d'articles dans le panier
    const { cartItems } = useCart();

    // Déclaration des constantes pour la version mobile
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleChangeMobile = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener("resize", handleChangeMobile);
        return () => window.removeEventListener("resize", handleChangeMobile);
    }, []);



    return (
            <header className="container-navbar">
                <nav className={"navbar"}>

                            {/* Mobile Menu */}
                            {isMobile ? (
                                <>
                                    <Link to={`/`}><img src={"../../cafthe-title.png"} height={"35px"} alt={"Logo du site"}></img></Link>
                                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                                        <img src={"../../bars-solid.svg"}/>
                                    </button>
                                    {menuOpen && (
                                        <ul className="mobile-menu">
                                            <li><Link to="/produits/cafes">Cafés</Link></li>
                                            <li><Link to="/produits/thes">Thés</Link></li>
                                            <li><Link to="/produits/accessoires">Accessoires</Link></li>
                                            <li><Link to="/Panier">Panier ({cartItems.length})</Link></li>
                                            {isAuthenticated ? (
                                                <>
                                                    <li><Link to="/account">Mon compte</Link></li>
                                                    <li><button className="btn-logout" onClick={handleLogout}>Se déconnecter</button></li>
                                                </>
                                            ) : (
                                                <li><Link to="/login"><button className="btn-login-nav">Se connecter</button></Link></li>
                                            )}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                // Desktop Menu
                                <>
                            <ul className="produit">
                                <li className={"li-navbar"}><Link to={`/produits/cafes`}><p className={"name-PageNav"}>Cafés</p></Link></li>
                                <li className={"li-navbar"}><Link to={`/produits/thes`}><p className={"name-PageNav"}>Thés</p></Link></li>
                                <li className={"li-navbar"}><Link to={`/produits/accessoires`}><p className={"name-PageNav"}>Accessoires</p></Link></li>
                            </ul>

                            <div className={"title-nav"}>
                                <Link to={`/`}><img src={"../../cafthe-title.png"} height={"35px"} alt={"Logo du site"}></img></Link>
                            </div>

                            <ul className="right-ul">
                                <li className={"li-navbar"}><Link to="/Panier"><p className={"name-PageNav"}>Panier ({cartItems.length})</p></Link></li>
                                {isAuthenticated ? (
                                    <>
                                        <button className="btn-logout"><Link to={"/account"}>Mon compte</Link></button>
                                        <button className="btn-logout" onClick={handleLogout}>Se déconnecter</button>
                                        </>
                                ): (
                                    <Link to={`/login`}><button className="btn-login-nav">Se connecter</button></Link>
                                )}
                            </ul>
                            </>
                        )}
                </nav>
        </header>



    );
}

export default Header;
