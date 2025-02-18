import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "../components/ProductCard";

function Command() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [command, setCommand] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCommand = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/commande/client/${user.id}`);
                setCommand(response.data);
            } catch (error) {
                console.error("Erreur de chargement des produits", error);
            } finally {
                setIsLoading(false); /* On arrête d'afficher le chargement (squelette) */
            }
        };

        void fetchCommand();
    }, []);

    return (
        <div>
            <h3>Historique des commandes</h3>
            <div>
                {command.map((commande) => (
                    <div>
                        <ProductCard key={commande.id_commande} produit={commande} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Command;