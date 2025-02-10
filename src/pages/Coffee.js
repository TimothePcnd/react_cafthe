import React, {useEffect, useState} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ProductCard from "../components/ProductCard";

function Coffee(props) {
    const [coffees, setCoffees] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/produits/cafes");
                setCoffees(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false); /* On arrête d'afficher le chargement (squelette) */
            }
        };

        void fetchCoffees();
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
    //console.log(coffees)

    return (
        <div>
            <h3>Liste des cafés</h3>
            <div className={"product-list"}>
                {coffees.map((produit) => (
                    <div>
                    <ProductCard key={produit.id_produit} produit={produit} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Coffee;