import React from 'react';
import '../styles/Confidentiality.css'

function Politique(props) {
    return (
        <div className={"container-confidentiality"}>
            <div className={"top-confidentiality"}>
                <h1>Politique de Confidentialité</h1>
                <p>Dernière mise à jour : 31 mars 2025</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Introduction</h2>
                <p>Bienvenue sur le site Cafthé, spécialisé dans la vente de cafés, thés et accessoires. La protection de vos données personnelles est primordiale pour nous. Cette politique de confidentialité
                    a pour objectif de vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre plateforme.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Responsable du Traitement</h2>
                <p>Le responsable du traitement des données collectées sur ce site est Cafthé, société dont le siège social est situé à l'adresse indiquée dans les mentions légales du Site.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Données Collectées</h2>
                <ul>
                    <li><p>Données d'identification : nom, prénom, adresse email, numéro de téléphone</p></li>
                    <li><p>Données de livraison : adresse postale, instructions de livraison</p></li>
                    <li><p>Données de paiement : nous ne stockons pas vos informations de carte bancaire complètes</p></li>
                    <li><p>Données de navigation : adresse IP, cookies, historique de navigation</p></li>
                    <li><p>Préférences d'achat : historique des commandes, produits consultés, liste de souhaits</p></li>
                </ul>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Finalités du Traitement</h2>
                <p>Nous utilisons vos données personnelles pour les finalités suivantes :</p>
                <ul>
                    <li><p>Gestion de votre compte client</p></li>
                    <li><p>Traitement et suivi de vos commandes</p></li>
                    <li><p>Livraison des produits commandés</p></li>
                    <li><p>Service après-vente et gestion des réclamations</p></li>
                    <li><p>Amélioration de notre site et de nos produits</p></li>
                    <li><p>Envoi de communications marketing (avec votre consentement)</p></li>
                </ul>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Base Légale du Traitement</h2>
                <ul>
                    <li><p>L'exécution du contrat qui nous lie lorsque vous effectuez un achat</p></li>
                    <li><p>Votre consentement pour l'envoi de communications marketing</p></li>
                    <li><p>Notre intérêt légitime pour l'amélioration de nos services</p></li>
                    <li><p>Le respect de nos obligations légales</p></li>
                </ul>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Durée de Conservation</h2>
                <p>Nous conservons vos données personnelles pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, notamment :</p>
                <ul>
                    <li><p>Données de compte client : pendant toute la durée de votre inscription à notre site</p></li>
                    <li><p>Données de commande : 10 ans à compter de la commande (obligations comptables)</p></li>
                    <li><p>Données de carte bancaire : jamais conservées après la transaction</p></li>
                    <li><p>Données de navigation : 13 mois maximum pour les cookies</p></li>
                </ul>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Destinataires de vos Données</h2>
                <p>Vos données personnelles peuvent être transmises aux catégories de destinataires suivantes :</p>
                <ul>
                    <li><p>Notre personnel habilité à traiter vos commandes</p></li>
                    <li><p>Nos sous-traitants (prestataires de paiement, transporteurs, hébergeurs)</p></li>
                    <li><p>Nos partenaires commerciaux (avec votre consentement)</p></li>
                    <li><p>Les autorités administratives ou judiciaires lorsque la loi l'exige</p></li>
                </ul>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Vos Droits</h2>
                <p>Conformément à la législation applicable en matière de protection des données personnelles, vous disposez des droits suivants :</p>
                <ul>
                    <li><p>Droit d'accès à vos données</p></li>
                    <li><p>Droit de rectification de vos données</p></li>
                    <li><p>Droit à l'effacement de vos données</p></li>
                    <li><p>Droit à la limitation du traitement</p></li>
                    <li><p>Droit à la portabilité de vos données</p></li>
                    <li><p>Droit d'opposition au traitement</p></li>
                </ul>
                <p>Pour exercer ces droits, vous pouvez nous contacter par email via le formulaire de contact du Site ou par courrier à l'adresse du siège social.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Sécurité</h2>
                <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, l'accès ou la divulgation non autorisés.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Cookies</h2>
                <p>Notre site utilise des cookies pour améliorer votre expérience de navigation. Pour en savoir plus sur l'utilisation des cookies, veuillez consulter notre Politique de Cookies accessible sur notre site.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Modification de la Politique de Confidentialité</h2>
                <p>Cafthé se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page et, si nécessaire, vous sera notifiée par email.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Contact</h2>
                <p>Pour toute question relative à la présente politique de confidentialité ou pour toute demande concernant vos données personnelles, vous pouvez nous contacter via cette adresse mail cafthe@mail.com.</p>
            </div>
        </div>
    );
}

export default Politique;