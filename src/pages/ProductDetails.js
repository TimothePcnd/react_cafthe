import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import '../styles/ProductDetails.css'
import ProductCard from "../components/ProductCard";

function ProductDetails() {
        const {id} = useParams();
        const [produit, setProduit] = useState([]);


    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/${id}`);
                setProduit(response.data);
            } catch (error) {
                console.error("Erreur de chargement du produit", error);
            }
        };

        void fetchProduits();
    }, [id]);

    return (
        <div className={"product-details"}>
            <Link to={`/`} className={"details-btn"}>Retour</Link>

        <div className={"container-topProduit"}>
            <div className={"wrapper"}>
                <div className={"detail-section1"}>

                    <div className={"img-produitMini"}>
                        <img src={"cafeSachet.png"} alt={"photo du produit"}></img>
                        <img src={"cafeSachet.png"} alt={"photo du produit"}></img>
                        <img src={"cafeSachet.png"} alt={"photo du produit"}></img>
                    </div>

                    <div className={"description-produit"}>
                        <h4>Description</h4>
                        <p>{produit.description_produit}</p>
                    </div>
                </div>

                <div className={"detail-section2"}>
                    <img className={"img-product"} src={"cafeSachet.png"} alt={"photo du produit"}/>
                </div>

                <div className={"detail-section3"}>
                    <h3>{produit.designation_produit}</h3>
                    <p>Prix : {produit.prix_ht_produit} €</p>
                    <p>Conditionnement : {produit.Type_conditionnement}</p>
                    <button>Ajouter au panier</button>
                </div>
            </div>

        </div>


        </div>
    );
}


export default ProductDetails;