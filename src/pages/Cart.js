import React, { useEffect, useState } from "react";
import "../styles/Cart.css";
import { useCart } from "../context/CartContext";

function Cart(produit) {
    const [panier, setPanier] = useState([]);
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Calculer le total en tenant compte de la quantité
        const calculerTotal = () => {
            const total = cartItems.reduce((sum, item) => {
                const itemPrice = typeof item.prix_ttc_produit === 'number'
                    ? item.prix_ttc_produit
                    : Number(item.prix_ttc_produit);
                const quantite = item.Quantite_produit_ligne_panier || 1;
                return sum + (itemPrice * quantite);
            }, 0);
            setTotal(total);
        };

        const cart = localStorage.getItem('cartItems');
        if (cart) {
            setPanier(JSON.parse(cart));
            calculerTotal();
        }
    }, [cartItems]); // Ajout de cartItems comme dépendance pour recalculer quand le panier change

    const handleRemoveToCart = (produitID) => {
        removeFromCart(produitID);
    };

    const handleQuantityChange = (produitID, newQuantity) => {
        updateQuantity(produitID, newQuantity);
    };

    return (
        <div className={"cart-container"}>
            <h2 className={"cart-title"}>Panier</h2>

            {cartItems.length === 0 ? (
                <p>Votre panier est vide</p>
            ) : (
                <div>
                    {cartItems.map((panier) => (
                        <div className="cart-item" style={{ marginBottom: "5px" }} key={panier.id_produit}>
                            <div className="Colonne">
                                <h3>Désignation</h3>
                                <p>{panier.designation_produit}</p>
                            </div>
                            <div className="Colonne">
                                <h3>Prix</h3>
                                <p>{panier.prix_ttc_produit} €</p>
                            </div>
                            <div className="Colonne">
                                <h3>Quantité</h3>
                                <div className="quantity-controls">
                                    <button
                                        onClick={() => handleQuantityChange(
                                            panier.id_produit,
                                            (panier.Quantite_produit_ligne_panier || 1) - 1
                                        )}
                                        disabled={(panier.Quantite_produit_ligne_panier || 1) <= 1}
                                    >
                                        -
                                    </button>
                                    {panier.Quantite_produit_ligne_panier || 1}
                                    <button
                                        onClick={() => handleQuantityChange(
                                            panier.id_produit,
                                            (panier.Quantite_produit_ligne_panier || 1) + 1
                                        )}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="Colonne">
                                <h3>Action</h3>
                                <button className={"cart-btnDelete"} onClick={() => handleRemoveToCart(panier.id_produit)}>Supprimer</button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: {total.toFixed(2)} €</h3>
                    <button className={"cart-button"}>Passer la commande</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
