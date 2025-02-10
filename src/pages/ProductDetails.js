import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

function ProductDetails() {
        const {id} = useParams();
        const [produit, setProduit] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/produit/${id}`);
                setProduit(response.data);
            } catch (error) {
                console.error("Erreur de chargement du produit", error);
            }
        };

        void fetchProduits();
    }, [id]);

    return (
        <div className={"product-details"}>
            {/*Img*/}
            <h3>Désignation: {produit.designation_produit}</h3>
            <p>Prix: {produit.prix_ht_produit} €</p>
            <p>Description: {produit.description_produit}</p>
            <p>Conditionnement: {produit.Type_conditionnement}</p>
            <Link to={`/`} className={"details-btn"}>Retour dans le passé</Link>
        </div>
    );
}


export default ProductDetails;