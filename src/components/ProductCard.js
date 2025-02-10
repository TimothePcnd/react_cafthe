import React from 'react';
import {Link} from "react-router-dom";
import '../styles/ProductCard.css'


function ProductCard({produit}) {
    return (
            <div className={"product-card"}>
                {/*Img*/}
                <h3>{produit.designation_produit}</h3>
                <p>{produit.prix_ht_produit} €</p>
                    <Link to={`/produit/${produit.id_produit}`} className={"details-btn"}>Voir détails</Link>
            </div>
);

}

export default ProductCard;