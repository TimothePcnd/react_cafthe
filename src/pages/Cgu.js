import React from 'react';
import '../styles/Confidentiality.css'

function Cgu(props) {
    return (
        <div className={"container-confidentiality"}>
            <div className={"top-confidentiality"}>
                <h1>Conditions Générales d'Utilisation</h1>
                <p>Dernière mise à jour : 31 mars 2025</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Objet</h2>
                <p>Les présentes Conditions Générales d’Utilisation (CGU) ont pour objet de définir les conditions d’accès et d’utilisation du site Cafthé (ci-après « le Site »), édité par Cafthé, spécialisé dans la vente de café, thé et accessoires.
                    En accédant au Site et en utilisant ses services, l’Utilisateur accepte sans réserve les présentes CGU.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Accès au site</h2>
                <p>Le Site est accessible à toute personne majeure ou disposant de l’autorisation d’un représentant légal. L’accès aux services d’achat et de gestion des commandes nécessite la création d’un compte client.</p>

            </div>

            <div className={"content-confidentiality"}>
                <h2>Création d’un Compte Client</h2>
                <ul>
                    <li><p>Fournir des informations exactes et complètes lors de l’inscription ;</p></li>
                    <li><p>Définir un identifiant et un mot de passe personnels ;</p></li>
                    <li><p>Accepter la collecte et le traitement de ses données personnelles conformément à la Politique de Confidentialité du Site.</p></li>
                </ul>
                <p>L’Utilisateur est responsable de la confidentialité de ses identifiants et s’engage à informer Cafthé en cas d’utilisation frauduleuse de son compte.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Services Proposés</h2>
                <p>Le Site permet aux Utilisateurs de :</p>
                <ul>
                    <li><p>Acheter des produits de café, thé et accessoires.</p></li>
                    <li><p>Gérer leurs commandes et leur historique d’achats via l’espace client.</p></li>
                    <li><p>Recevoir des offres personnalisées et des newsletters (avec consentement préalable).</p></li>
                </ul>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Responsabilités</h2>
                <p>L’Utilisateur s’engage à :</p>
                <ul>
                    <li><p>Ne pas utiliser le Site à des fins frauduleuses ou illicites.</p></li>
                    <li><p>Respecter les droits de propriété intellectuelle des contenus du Site.</p></li>
                    <li><p>Ne pas publier de contenu inapproprié (avis diffamatoires, contenus offensants, etc.).
                        Cafthé ne saurait être tenu responsable d’éventuelles interruptions du Site dues à des causes techniques indépendantes de sa volonté.</p></li>
                </ul>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Protection des Données Personnelles</h2>
                <p>Cafthé collecte et traite les données personnelles des Utilisateurs conformément à sa Politique de Confidentialité. Ces données sont utilisées pour la gestion des commandes,
                    l’amélioration des services et, si l’Utilisateur y consent, l’envoi d’offres commerciales.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Propriété Intellectuelle</h2>
                <p>Tous les éléments du Site (textes, images, logos, charte graphique) sont protégés par le droit d’auteur et appartiennent à Cafthé ou à ses partenaires. Toute reproduction ou utilisation sans autorisation est interdite.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Modification des CGU</h2>
                <p>Cafthé se réserve le droit de modifier les présentes CGU à tout moment. L’Utilisateur sera informé des mises à jour et devra accepter les nouvelles conditions pour continuer à utiliser les services du Site.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Droit Applicable et Litiges</h2>
                <p>Les présentes CGU sont soumises au droit français. En cas de litige, une tentative de résolution à l’amiable sera privilégiée avant toute action judiciaire.</p>
            </div>
        </div>
    );
}

export default Cgu;