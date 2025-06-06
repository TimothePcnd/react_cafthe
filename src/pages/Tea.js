import React, {useEffect, useState} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/ProductCard";
import '../styles/Product.css'

function Tea(props) {
    const [teas, setTeas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeas = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/produits/thes`);
                setTeas(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false); /* On arrête d'afficher le chargement (squelette) */
            }
        };

        void fetchTeas();
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


    return (
        <div>
            <div className={"top-pageTea"}>
                    <div className={"white"}><h1>THÉ</h1></div>
                    <div className={"grey"}><h2>THÉ VERT</h2></div>
                    <div className={"black"}><h2>THÉ NOIR</h2></div>

            </div>

            <div className={"middle-page"}>

                        <div className={"product-list"}>
                            {teas.map((produit) => (
                                <div>
                                    <ProductCard key={produit.id_produit} produit={produit}/>
                                </div>
                            ))}
                        </div>
            </div>

        </div>
    );
}

export default Tea;