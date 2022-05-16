
/** RECAPITULATIF
 * 1 Faire un lien entre un fichier html et JS
 * => Dans le fichier html on aura le script après body
 * <script type="texte/javascript" src="script6.js"></script>
 * 
 * 2 L'objet parent de tout JS
 * window
 * 
 * 3 Objet à l'intérieur de window
 * document : la page html
 * location :
 * navigator
 * ...
 * console
 * 
 * 3 afficher des informations dans la console
 * console.log("mes informations")
 * 
 * 4 Créer une variable numérique
 * var=12
 * 
 * 5 Créer une variable string
 * var="Melki"
 * 
 * 6 Concatener du texte avec une variable
 * new_var="je m'apelle " + var // si on a une string ça renvoie NaN
 * console.log("je m'appelle " + var)
 * 
 * 7 Additionner deux variables
 * a=4
 * b=8
 * c = a+b c=a*b c=a/b console.log(a+b)
 * 
 * 8 Afficher le nombre de 1 à 100
 * for (i=0; i < 100; i++ ) {
 *  console.log(i) // ecriture dans la log du nombre i
 * }
 * 
 * 9 si j'ai une variable age=50, afficher OK si c'est > 15 et KO si c'est < 18
 * if ( age>18 ) {
 *  console.log("OK")
 * }
 * else {
 *  console.log("KO")
 * }
 * 
 * 10 la methode permettant de récupérer une partie ID du code HTML
 *  HTML <input type="text" id="name" name="name" value="valeur par defaut"> 
 *  JS document.getElementById("name")
 * 
 * 11 Déclencher du JS sur un click sur un element HTML
 * document.getElementById("name").addEventListener("click", notre_fonction)
 * document.getElementById("name").addEventListener("keyup", notre_fonction)
 * document.getElementById("name").addEventListener("mouseover", notre_fonction)
 * 
 * 12 Modifier la propriété soit la valeur du champs
 *  HTML <input type="text" id="name" name="name" value="valeur par defaut">
 * document.getElementById("name").value="ce que je veux ! ");
 * 
 * 
 * 13 Modifier le html d'un composant
 * <div id="div_texte"> POTENTIELLEMENT DU HTML </div>
 * document.getElementById("div_texte").innerHTML="ce que je veux"
 * 
 * 14 Retrouver la propriété de la taille d'un champs
 * document.getElementById("name").length
 * 
 * 15 Modifier un css par ex : la couleur d'un composant html
 * document.getElementById("name").style.color="blue"
 * 
 * 16 Créer une variable issue d'une variable
 * a=10
 * b=20
 * c=a // Affecte dans c la variable a.
 * 
 * 
 */

/*
Exercice :
1 creer une variable nom contenant votre nom
creer une variable prenom contentant votre prenom
creer une variable age contenant votre age
Afficher dans la console.log "Bienvenue je m'appelle " suivi de votre prenom et nom
et j'ai suivi de votre age
Creer une variable prix_article1 = 50
Creer une variable prix_article2 = 80
Creer une variable prix_article3 = prix_article1 + prix_article2
Afficher dans la console.log "Le prix de l'article 1 est " prix_article1"
Afficher dans la console.log "Le prix de l'article 2 est " prix_article2"
Afficher dans la console.log "La somme des articles sera de : prix_article3"
Mettre tout ce code dans une fonction ("debut") qui sera declenchee suite au clique sur un bouton
que vous créerez qui aura l'identifiant "deb"

*/
// appel de la fonction debut lors du click sur le bouton "deb"
 document.getElementById("deb").addEventListener("click", debut)

 // appel de la fonction debut lors du load de la page
window.addEventListener("load",debut)

function debut(){
    nom="deto"
    prenom="pierre"
    age=31
    console.log("Bienvenue je m'apelle " + prenom + nom + age)
    prix_article1 = 50
    prix_article2 = 80
    prix_article3 = prix_article1 + prix_article2
    console.log("Le prix de l'article 1 est " + prix_article1)
    console.log("Le prix de l'article 2 est " + prix_article2)
    console.log("La somme des articles sera de " + prix_article3)
    document.getElementById("deb").addEventListener("click", ftest)
}

/** Exercice 2

Ajouter un champs texte comprenant un identifiant "test"
Lorsqu on clique sur le bouton précdemment créé on affiche dans le texte
ayant l'identifiant "test" l'information
"ce que je veux"

*/
 // 1 CREER UN EVENEMENT SUR LE BOUTON AU CLIQUE : ADDEVENTLISTENER
 // 2 UI VA AFFICHER SUR LE CHAMPS TEXTE "ce que je veux" : FONCTION A CODER

document.getElementById("deb").addEventListener("click", ftest)

function ftest(){
    document.getElementById("test").value="ce que je veux"
}

/** 
 * EXERCICE 3
 * 1 CREER UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest
 * 2 CREER UN EVENEMENT SUR LE BOUTON AU CLIC QUI VA DECLENCHER LA FONCTION ftest2
 * 3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" 
 * recoivent en valeur le texte "nouveau texte !"
*/

document.getElementById("btest").addEventListener("click",ftest2)

function ftest2(){
    document.getElementById("test").value="nouveau texte !"
}

/*Exercice 4
1 CREEZ UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest3
2 CREEZ UN EVENEMENT SUR LE BOUTTON AU CLIC QUI VA DECLENCHER LA FONCTION ftest3
3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" recoivent en valeur
le texte "le texte nouveau !"
*/

document.getElementById("btest3").addEventListener("click", ftest3)

function ftest3(){
    document.getElementById("test").value="le texte nouveau !"
}

/*Exercice 5
1 CREEZ UN NOUVEAU BOUTON AVEC L IDENTIFIANT btest4
2 CREEZ UN EVENEMENT SUR LE BOUTTON AU CLIC QUI VA DECLENCHER LA FONCTION ftest4
3 LA FONCTION VA FAIRE EN SORTE QUE LE TEXTE avec l'identifiant "test" recoivent en valeur
le texte "le DERNIER texte nouveau !"
*/

document.getElementById("btest4").addEventListener("click", ftest4)

function ftest4(){
    document.getElementById("test").value="le DERNIER texte nouveau"
}

/**Exercice 6
 * Creer une div en html avec l identifiant madiv
 * creer un evenement issu du dernier bouton au clic lançant la fonction fdiv
 * la fonction fdiv affiche dans la console "vous avez bien cliqué sur le bouton"
 * la fonction fdiv affiche dans la div "vous avez bien cliqué sur le bouton"
 * la fonction fdiv affiche le contenu du champs texte
 * 
 */

document.getElementById("btest5").addEventListener("click", fdiv)

function fdiv(){
    console.log("vous avez bien cliqué sur le bouton")
    document.getElementById("madiv").innerHTML="vous avez bien cliqué sur le bouton"
    document.getElementById("madiv").innerHTML=document.getElementById("test").value
}

/*Exercice 7
 1 Creez une div en html avec l identifiant madiv2
 2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv2
 3 la fonction fdiv affiche dans la console vous avez bien cliqué sur le bouton
 4 la fonction fdiv affiche dans la div vous avez bien cliqué sur le bouton
 5 la fonction fdiv dans la div affiche le contenu du champs texte
*/

document.getElementById("btest6").addEventListener("click",fdiv2)

function fdiv2(){
    console.log("vous avez bien cliqué sur le bouton")
    document.getElementById("madiv2").innerHTML="vous avez bien cliqué sur le bouton"
    document.getElementById("madiv2").innerHTML=document.getElementById("test").value
}


