import React from 'react';
import '../styles/Home.css';


function Home(props) {
    return (

        <div className={"home"}>


                <img className={"grain1"} src={"grainDeCafe.png"}/>
                <img className={"grain2"} src={"grainDeCafe.png"}/>
                <img className={"tasse-header"} src={"tasseHeader.png"}/>

                <div className={"title-header"}>
                    <h2>yémonite</h2>
                </div>

                <img className={"grain3"} src={"grainDeCafe.png"}/>
                <img className={"grain4"} src={"grainDeCafe.png"}/>



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
                            <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
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
                            <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                        </svg>
                    </div>
                </div>

                <div className="ten">
                    <div className={"title-accessoire"}>
                        <h2>nos accessoires</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="6" viewBox="0 0 40 6" fill="none">
                            <path d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5H35.5V2.5H0V3.5Z" fill="black"/>
                        </svg>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Home;