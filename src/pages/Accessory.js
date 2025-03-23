import React, {useEffect, useState} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/ProductCard";
import '../styles/Accessory.css'


function Accessory(props) {
    const [accessories, setAccessories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produits/accessoires`);
                setAccessories(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false); /* On arrête d'afficher le chargement (squelette) */
            }
        };

        void fetchAccessories();
    }, []);

    if (isLoading){
        return (
            <div className={"product-list"}>
                {Array.from({length : 6}).map((_,i) => (
                    <div key={i} className={"product-skeleton"}>
                        {/*Image*/}
                        <Skeleton height={200} width={300}/>

                        <div style={{marginTop: "5px"}}>
                            <Skeleton height={20} width={"70%"}/>
                        </div>

                        <div style={{marginTop: "5px"}}>
                            <Skeleton height={20} width={"40%"}/>
                        </div>

                    </div>

                ))}
            </div>
        )
    }
    //console.log(accessories)

    return (
        <div>
            <div className={"top-pageAccessories"}>
                <div className={"white"}><p>NOS ACCESSOIRES</p></div>
                <div className={"orange"}><p>NOS ACCESSOIRES</p></div>
                <div className={"black"}><p>NOS ACCESSOIRES</p></div>

            </div>

            <div className={"middle-page"}>
                <div className={"filtre-content"}>
                    <h3>Trier par</h3>
                </div>

                <div className={"product-list"}>
                    {accessories.map((produit) => (
                        <div>
                            <ProductCard key={produit.id_produit} produit={produit}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Accessory;