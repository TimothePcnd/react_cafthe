import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function DetailCommand() {
    const {id} = useParams();

    const [detail, setDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/commande/${id}`);
                setDetail(response.data);
            } catch (error) {
                console.error("Erreur de chargement de la commande", error);
            } finally {
                setIsLoading(false); /* On arrête d'afficher le chargement (squelette) */
            }
        };

        void fetchProduits();
    }, [id]);

    if (!detail || detail.length === 0) {
        return <p>La commande est vide ou inexistante.</p>;
    }

    return (
        <div>
            <h3>Détail de la commande n°{id}</h3>
            <div className={"list-command"}>
                {detail.map((value) => (
                    <div className={"command"}>
                        <p>Désignation : {value.designation_produit}</p>
                        <p>Quantité : {value.Quantite_produit_ligne_panier}</p>
                        <p>Conditionnement : {value.designation_produit}</p>
                        <p>Prix Total TTC: {value.Prix_unitaire_produit_ligne * value.Quantite_produit_ligne_panier} €</p>
                    </div>)
                )}
            </div>

        </div>
        )



}

export default DetailCommand;