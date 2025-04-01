import { createContext, useContext, useEffect, useState } from "react";

// Exportation contexte pour y avoir accès
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Chargement des produits du panier depuis localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            try {
                setCartItems(JSON.parse(storedCart));
            } catch (error) {
                console.error("Erreur lors du chargement du panier:", error);
                setCartItems([]);
            }
        }
    }, []);

    // Mise à jour du localStorage chaque fois que cartItems change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id_produit !== itemId));
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity < 1) return;

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id_produit === itemId
                    ? { ...item, Quantite_produit_ligne_panier: quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
