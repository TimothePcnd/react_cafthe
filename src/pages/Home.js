import React from 'react';
import '../styles/Home.css';
import '../styles/Responsive.css';
import {Link} from "react-router-dom";





function Home(produit) {
    return (

            <main className={"home"}>

                <div className={"top-home"}>
                    <div className={"title-header"}>
                            <h1 className={"name-ProductHome"}>Yémonite</h1>
                                <img className={"tasseCafe-img"} src={"tasseHeader.png"} alt={"Image de  tasse de café"} />
                    </div>
                </div>

                <div className={"bottom-home"}>
                    <div className="wrapper">
                        <div className="one">
                            <img className={"img-affiche"} src={"cafe1.jpg"} alt={"Image de tasse de café"} />
                        </div>

                        <Link to={`/produit/2`}><div className="two">
                            <img className={"img-product"} src={"JardinEdenSansBG.png"} alt={"image de café Jardin d'Edin"}/>
                            <div className={"text-product"}>
                                <h3 className={"detail-product"}>Voir le produit en détails </h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                        <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                                    </svg>
                            </div>

                        </div>
                        </Link>

                        <div className="three">
                            <Link to={`/produits/thes`}>
                                <div className={"title-the"}>
                                    <h2 className={"name-categorie"}>nos thés</h2>
                                        <svg className={"arrow-the"} xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                            <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                                        </svg>
                                </div>
                            </Link>
                        </div>

                        <div className="four">
                            <img className={"img-affiche"} src={"tasseTea.jpg"} alt={"Image de tasse de thé"} />
                        </div>

                        <Link to={`/produit/1`}><div className="five">
                            <img className={"img-product"} src={"GyokuroKyotoSansBG.png"} alt={"image de thé Gyokuro Kyoto"}/>
                                <div className={"text-product"}>
                                    <h3 className={"detail-product"}>Voir le produit en détails</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                            <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="white"/>
                                        </svg>
                                </div>
                        </div>
                        </Link>

                        <div className="six">
                            <Link to={`/produits/cafes`}>
                                <div className={"title-cafe"}>
                                    <h2 className={"name-categorie"}>nos cafés</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                            <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                                        </svg>
                                </div>
                            </Link>

                        </div>

                        <div className="seven">
                            <img className={"img-affiche"} src={"bocalcafe.jpg"} alt={"Image de grain de café"} />
                        </div>

                        <div className="height">
                            <img className={"img-affiche"} src={"filtrecafe.jpg"} alt={"Image d'un café filtré"} />
                        </div>

                        <Link to={`/produit/4`}><div className="nine">
                            <img className={"img-accessoire"} src={"Theiere.png"} alt={"image du produit Theire"}/>
                            <div className={"text-product"}>
                                <h3 className={"detail-product"}>Voir le produit en détails</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                        <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="white"/>
                                    </svg>
                            </div>
                        </div>
                        </Link>

                        <div className="ten">
                            <Link to={`/produits/accessoires`}>
                                <div className={"title-accessoire"}>
                                    <h2 className={"name-categorie"}>nos <br/> accessoires</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                        <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                                        </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

    </main>)

}

export default Home;