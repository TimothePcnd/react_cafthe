import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContext";

function ProductCard({ produit }) {
    const { addItemToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={"cafeSachet.png"} alt={"image produit"}/>
            <h3>{produit.designation_produit}</h3>
            <p>{produit.prix_ht_produit} €</p>
            <Link to={`/produit/${produit.id_produit}`} className="details-btn">
                Voir détails
            </Link>
            <button onClick={() => addItemToCart(produit.id_produit)}>Ajouter au panier</button>
        </div>
    );
}

export default ProductCard;
