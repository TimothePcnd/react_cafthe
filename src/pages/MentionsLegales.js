import React from 'react';
import '../styles/Confidentiality.css';

function MentionsLegales(props) {
    return (
        <div className={"container-confidentiality"}>
            <div className={"top-confidentiality"}>
                <h1>Mentions Légales</h1>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Informations Générales</h2>
                <p>Nom du site : Cafthé</p>
                <p>URL : https://cafthe.timothe.pecnard.dev-campus.fr/#/</p>
                <p>Propriétaire : Timothé PECNARD</p>
                <p>Siège social : 10 Av de la République, Blois</p>
                <p>Contact : cafthe@mail.com</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Identification de l'Entreprise</h2>
                <p>Statut juridique : SARL</p>
                <p>Capital social : 30 000 €</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Hébergeur du Site</h2>
                <p>Nom : CCI CAMPUS</p>
                <p>Adresse : 6 Rue Anne de Bretagne, 41000 Blois</p>
                <p>Contact : cafthe.contact@mail.com</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Propriété Intellectuelle</h2>
                <p>Tous les contenus présents sur le site Cafthé (textes, images, vidéos, logos, etc.) sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou distribution sans autorisation est interdite.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Protection des Données Personnelles</h2>
                <p>Les données collectées sont destinées à améliorer l'expérience utilisateur et traiter les commandes. Conformément au RGPD, vous pouvez exercer vos droits en contactant cafthe@mail.com.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Cookies</h2>
                <p>Le site Cafthé utilise des cookies pour optimiser votre navigation. Vous pouvez configurer votre navigateur pour les refuser.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Responsabilité</h2>
                <p>Cafthé s'efforce de fournir des informations exactes mais ne saurait être tenu responsable en cas d'erreurs ou d'indisponibilité.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Droit Applicable</h2>
                <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux du siège social de Cafthé.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Contact</h2>
                <p>Email : cafthe@mail.com</p>
            </div>
        </div>
    );
}

export default MentionsLegales;

