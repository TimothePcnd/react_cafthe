import { Link } from "react-router-dom";
import "../styles/Product.css";
import { useCart } from "../context/CartContext";
import {useState} from "react";

function ProductCard({ produit }) {
    const { addToCart } = useCart();
    const [popUpMessage, setPopUpMessage] = useState(false);

    const handleAddToCart = () => {
        addToCart(produit);

        setPopUpMessage(true);
        setTimeout(() => setPopUpMessage(false), 3000);
    };

    return (
        <div className="product-card">
            <Link to={`/produit/${produit.id_produit}`}>
                <img src={`/${produit.image_url}`} alt="image du produit" />
                <h3 className="title-product">{produit.designation_produit}</h3>
                <p className="price-product">{produit.prix_ttc_produit} €</p>
            </Link>
            <button className="addProduct" onClick={handleAddToCart}>Ajouter au panier</button>
            {popUpMessage && (
                <div className="pop-up">
                    <p>Votre article {produit.designation_produit} a été ajouté au panier</p>
                </div>
            )}
        </div>
    );
}

export default ProductCard;



