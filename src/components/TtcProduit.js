import React from 'react';

function TtcProduit(produit) {
    return (
        <>
            Prix TTC :{(produit.prix_ht_produit*(1+(produit.type_tva/100))).toFixed(2)} €
        </>

    );
}

export default TtcProduit;