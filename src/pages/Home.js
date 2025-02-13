import React from 'react';
import ProductList from "./ProductList";
import '../styles/Home.css';


function Home(props) {
    return (

        <div className={"header"}>

            <div className={"line-header"}>
                <img/>
                    <div className={"card-header"}>
                        <img/>
                        <h3>Voir le produit</h3>
                    </div>
            </div>


            <div className={"section"}>

                <div className={"produit"}>
                    <div className={"coffee"}>
                        <img/>
                        <h2>Les Cafés</h2>
                    </div>

                    <div className={"tea"}>
                        <h2>Les Thés</h2>
                        <img/>
                    </div>
                </div>

                <div className={"accessory"}>
                    <img/>
                    <h2>Les accessoires</h2>
                </div>

            </div>
        </div>
    );
}

export default Home;