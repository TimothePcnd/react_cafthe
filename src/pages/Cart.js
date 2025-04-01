
import React, {useEffect, useState} from "react";
import "../styles/Cart.css";

function Cart() {
    const [panier, setPanier] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem('cartItems')
        if (cart) {
            setPanier(JSON.parse(cart))
        }
    }, [])

    return (
        <div>
            <h2>Panier</h2>
                <div>{panier.map((panier) => (
                    <div className="ligneDiv" style={{ marginBottom: "5px" }} key={panier.id_produit}>
                        <div className="Colonne">
                            <h3>Désignation</h3>
                            <p>{panier.designation_produit}</p>
                        </div>
                        <div className="Colonne">
                            <h3>Prix</h3>
                            <p>{panier.prix_ttc_produit}</p>
                        </div>
                        <div className="Colonne">
                            <h3>Prix total</h3>
                        </div>
                        <div className="Colonne">
                            <h3>Action</h3>
                        </div>
                    </div>
                ))}
                    <h3>Total: €</h3>
            </div>


        </div>
    );
}
export default Cart;




