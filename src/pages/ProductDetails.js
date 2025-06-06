import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import '../styles/ProductDetails.css';
import '../styles/Responsive.css';
import {useCart} from "../context/CartContext";

function ProductDetails() {
        const {id} = useParams();
        const [produit, setProduit] = useState([]);
        const [popUpMessage, setPopUpMessage] = useState(false);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(produit);

        setPopUpMessage(true);
        setTimeout(() => setPopUpMessage(false), 3000);
    };


    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produit/${id}`);
                setProduit(response.data);
            } catch (error) {
                console.error("Erreur de chargement du produit", error);
            }
        };

        void fetchProduits();
    }, [id]);

    return (
        <div className={"product-details"}>

        <div className={"container-topProduit"}>
            <div className={"wrapper-productDetails"}>
                <div className={"detail-section1"}>

                    <div className={"img-produitMini"}>
                        <img src={`/${produit.image_url}`} alt={"image du produit"}/>
                        <img src={`/${produit.image_url}`} alt={"image du produit"}/>
                        <img src={`/${produit.image_url}`} alt={"image du produit"}/>

                    </div>

                    <div className={"description-produit"}>
                        <h4>Description</h4>
                        <p>{produit.description_produit}</p>
                    </div>
                </div>

                <div className={"detail-section2"}>
                    <img className={"img-productDetail"} src={`/${produit.image_url}`} alt={"image du produit"}/>

                </div>

                <div className={"detail-section3"}>
                    <h3>{produit.designation_produit}</h3>
                    <p>Prix : {produit.prix_ttc_produit} €</p>
                    <p>Conditionnement : {produit.Type_conditionnement}</p>
                    <button className="addProduct" onClick={handleAddToCart}>Ajouter au panier</button>
                    {popUpMessage && (
                        <div className="pop-up">
                            <p>Votre article {produit.designation_produit} a été ajouté au panier</p>
                        </div>
                    )}
                </div>
            </div>

        </div>


        </div>
    );
}


export default ProductDetails;