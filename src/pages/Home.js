import React from 'react';
import '../styles/Home.css';





function Home(props) {
    return (

            <div className={"home"}>

                <div className={"top-home"}>
                    <div className={"title-header"}>
                            <span>y</span>
                            <span>é</span>
                            <span>m</span>
                            <img src={"tasseHeader.png"} />
                            <span>n</span>
                            <span>i</span>
                            <span>t</span>
                            <span>e</span>
                    </div>
                </div>

            <div className={"bottom-home"}>
                <div className="wrapper">
                    <div className="one">
                        <img className={"img-affiche"} src={"cafe1.jpg"}/>
                    </div>

                    <div className="two">
                        <img className={"img-product"} src={"cafeSachet.png"}/>
                        <div className={"text-product"}>
                            <h3>Voir le produit en détails </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                            </svg>
                        </div>

                    </div>

                    <div className="three">
                        <div className={"title-the"}>
                            <h2>nos thés</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                            </svg>
                        </div>
                    </div>

                    <div className="four">
                        <img className={"img-affiche"} src={"tasseTea.jpg"}/>
                    </div>

                    <div className="five">
                        <img className={"img-product"} src={"cafeSachet.png"}/>
                        <div className={"text-product"}>
                            <h3>Voir le produit en détails</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="white"/>
                            </svg>
                        </div>
                    </div>

                    <div className="six">
                        <div className={"title-cafe"}>
                            <h2>nos cafés</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                            </svg>
                        </div>

                    </div>

                    <div className="seven">
                        <img className={"img-affiche"} src={"bocalcafe.jpg"}/>
                    </div>

                    <div className="height">
                        <img className={"img-affiche"} src={"filtrecafe.jpg"}/>
                    </div>

                    <div className="nine">
                        <img className={"img-accessoire"} src={"caftiere.png"}/>
                        <div className={"text-product"}>
                            <h3>Voir le produit en détails</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="white"/>
                            </svg>
                        </div>
                    </div>

                    <div className="ten">
                        <div className={"title-accessoire"}>
                            <svg  className={"arrow-rota"} xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                                <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                            </svg>
                            <h2 className={"accessoire"}>nos <br/> accessoires</h2>
                        </div>
                    </div>
                </div>
            </div>


    </div>)

}

export default Home;