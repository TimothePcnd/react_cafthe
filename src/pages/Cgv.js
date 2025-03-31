import React from 'react';
import '../styles/Confidentiality.css';

function Cgv(props) {
    return (
        <div className={"container-confidentiality"}>
            <div className={"top-confidentiality"}>
                <h1>Conditions Générales de Vente</h1>
                <p>Dernière mise à jour : 31 mars 2025</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Objet</h2>
                <p>Les présentes CGV ont pour objet de définir les droits et obligations du Vendeur
                    et du Client dans le cadre de la vente en ligne des produits ou services proposés sur le site Cafthé.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Produits et Services</h2>
                <p>Le site Cafthé propose à la vente les produits et services suivants : Café, thé, accessoires.</p>
                <p>Les caractéristiques essentielles des produits sont détaillées sur les fiches produits.
                    Les photographies sont fournies à titre indicatif et n’ont pas de valeur contractuelle.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Commande</h2>
                <ul>
                    <li><p>Sélection des produits et ajout au panier</p></li>
                    <li><p>Validation du panier et choix du mode de livraison</p></li>
                    <li><p>Identification ou création d’un compte client</p></li>
                    <li><p>Vérification et validation de la commande</p></li>
                    <li><p>Paiement sécurisé de la commande</p></li>
                    <li><p>Réception d’un e-mail de confirmation de commande</p></li>
                </ul>
                <p>Le Vendeur se réserve le droit d’annuler ou de refuser toute commande en cas de litige avec le Client.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Prix et Paiement</h2>
                <h3>Prix</h3>
                <p>Les prix affichés sur le site sont en euros et incluent la TVA. Les frais de livraison sont indiqués lors de la validation de la commande.</p>

                <h3>Modalités de paiement</h3>
                <p>Le Client peut régler sa commande par :</p>
                <ul>
                    <li>PayPal</li>
                </ul>
                <p>Le paiement est sécurisé via notre solution de paiement partenaire. La commande est expédiée uniquement après réception du paiement.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Disponibilité des produits</h2>
                <p>Les offres de produits sont valables tant qu’elles sont visibles sur le site et dans la limite des stocks disponibles.</p>
                <p>En cas d’indisponibilité après la commande, le Client sera informé et pourra annuler ou modifier sa commande.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Livraison</h2>
                <h3>Délais et modes de livraison</h3>
                <p>Les produits sont livrés par Colissimo sous un délai estimé de 5 jours ouvrés.</p>

                <h3>Frais de livraison</h3>
                <p>Les frais de livraison sont indiqués lors de la commande et varient selon la destination et le poids du colis.</p>

                <h3>Problèmes de livraison</h3>
                <p>En cas de retard ou de perte du colis, le Client doit contacter le transporteur ou le Vendeur.
                    Si le colis arrive endommagé, le Client doit refuser la livraison ou formuler une réclamation auprès du transporteur sous 48 heures.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Droit de Rétractation</h2>
                <p>Conformément à l’article L.221-18 du Code de la consommation, le Client dispose d’un délai de 14 jours à compter de la réception du produit pour exercer son droit de rétractation.</p>
                <p>Le Client doit notifier sa rétractation par email à cafthe@mail.com. Les produits doivent être retournés dans leur emballage d’origine, en parfait état.</p>
                <p>Les frais de retour sont à la charge du Client, sauf en cas de produit défectueux. Le remboursement sera effectué sous 14 jours après réception du retour.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Garanties et Responsabilité</h2>
                <h3>Garantie légale</h3>
                <p>Le Client bénéficie des garanties légales de conformité et des vices cachés.</p>

                <h3>Limitation de responsabilité</h3>
                <p>Le Vendeur ne peut être tenu responsable en cas de mauvaise utilisation des produits, d’usure normale ou de force majeure (grèves, catastrophes naturelles, etc.).</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Données Personnelles</h2>
                <p>Les données personnelles collectées sont utilisées uniquement pour le traitement des commandes.
                    Elles ne seront jamais revendues. Conformément au RGPD, le Client dispose d’un droit d’accès, de rectification et de suppression de ses données.</p>
                <p>Pour toute demande, le Client peut contacter cafthe@mail.com.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Propriété Intellectuelle</h2>
                <p>Tous les éléments du site Cafthé (textes, images, logo, etc.) sont protégés par les droits de propriété intellectuelle
                    et ne peuvent être utilisés sans autorisation préalable.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Litiges et Droit Applicable</h2>
                <p>En cas de litige, une solution amiable sera privilégiée. À défaut d’accord, les tribunaux compétents seront ceux du lieu de domicile du Vendeur ou du Client selon les règles de droit applicables.</p>
            </div>

            <div className={"content-confidentiality"}>
                <h2>Contact</h2>
                <p><strong>Cafthé</strong></p>
                <p>Adresse : 10 Av de la République, Blois</p>
                <p>Email : cafthe@mail.com</p>
                <p>Téléphone : +33 600000000</p>
            </div>
        </div>
    );
}

export default Cgv;