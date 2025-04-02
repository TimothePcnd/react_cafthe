import { Link } from "react-router-dom";
import "../styles/Product.css";
import { useCart } from "../context/CartContext";

function ProductCard({ produit }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(produit);
    };

    return (
        <div className="product-card">
            <Link to={`/produit/${produit.id_produit}`}>
                <img src={`/${produit.image_url}`} alt="image du produit" />
                <h3 className="title-product">{produit.designation_produit}</h3>
                <p className="price-product">{produit.prix_ttc_produit} €</p>
            </Link>
            <button className="addProduct" onClick={handleAddToCart}>Ajouter au panier</button>
        </div>
    );
}

export default ProductCard;



