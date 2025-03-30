import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContext";

function ProductCard({ produit }) {
    const { addItemToCart } = useContext(CartContext);

    return (

        <Link to={`/produit/${produit.id_produit}`}><div className="product-card">
            <img src={`/${produit.image_url}`} alt={"image produit"}/>
            <h3 className={"title-product"}>{produit.designation_produit}</h3>
            <p className={"price-product"}>{produit.prix_ht_produit} €</p>

            <button className={"addProduct"} onClick={() => addItemToCart(produit.id_produit)}>Ajouter au panier</button>
        </div></Link>
    );
}

export default ProductCard;
