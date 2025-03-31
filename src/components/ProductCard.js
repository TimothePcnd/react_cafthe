import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css";

function ProductCard({ produit }) {

    return (
        <div className="product-card">
            <Link to={`/produit/${produit.id_produit}`}>
                <img src={`/${produit.image_url}`} alt="image produit" />
                <h3 className="title-product">{produit.designation_produit}</h3>
                <p className="price-product">{produit.prix_ttc_produit} €</p>
            </Link>
            <button className="addProduct">Ajouter au panier</button>
        </div>
    );
}

export default ProductCard;



