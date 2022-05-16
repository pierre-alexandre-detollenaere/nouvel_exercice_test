
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
    document.getElementById("madiv").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value
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
    document.getElementById("madiv2").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value
}


/*Exercice 8
 1 Creez une div en html avec l identifiant madiv3
 2 Creez un evenemement issue du dernier bouton au click lancant la fonction fdiv3
 3 la fonction fdiv3 affiche dans la console vous avez bien cliqué sur le bouton
 4 la fonction fdiv3 affiche dans la div vous avez bien cliqué sur le bouton
 5 la fonction fdiv3 dans la div affiche le contenu du champs texte
*/

document.getElementById("btest7").addEventListener("click",fdiv3)

function fdiv3(){
    console.log("vous avez bien cliqué sur le bouton")
    document.getElementById("madiv3").innerHTML="vous avez bien cliqué sur le bouton"
    document.getElementById("madiv3").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value
}

/*Exercice 8
 1 Creez une div en html avec l identifiant madiv4
 2 Creez un evenement issue du dernier bouton au click lancant la fonction fdiv4
 3 la fonction fdiv4 affiche dans la console vous avez bien cliqué sur le bouton
 4 la fonction fdiv4 affiche dans la div vous avez bien cliqué sur le bouton
 5 la fonction fdiv4 dans la div affiche "vous avez bien cliqué sur le bouton" puis le contenue du champs texte
 */

 document.getElementById("btest8").addEventListener("click", fdiv4)

 function fdiv4(){
     console.log("vous avez bien cliqué sur le bouton")
     // document.getElementById("madiv4").innerHTML="vous avez bien cliqué sur le bouton"
     // Vous avez concaténé "vous avez bien clicke sur le bouton suivi du texte"
     //document.getElementById("madiv4").innerHTML="vous avez bien cliqué sur le bouton  " + document.getElementById("test").value

          // affichez ce qui a dans le champs texte. A chaque fois on affiche ce qui avant et le nouveau texte
          // "oiseau" => "" + oiseau
          // "tel" => oiseau tel

    document.getElementById("madiv4").innerHTML=document.getElementById("madiv4").innerHTML+ " " +  document.getElementById("test").value
 }


document.getElementById("btest8").addEventListener("click", fdiv4)

function fdiv4(){
    document.getElementById("madiv4").innerHTML=document.getElementById("madiv4") + "  " + document.getElementById("test").value
}

/* Exercice 9
1 CREER UN CHAMPS DE TYPE NUMBER AVEC VALEUR PAR DEFAUT A 0 AVEC L ID TEXTID1
2 CREEZ UN BOUTTON AVEC L ID B10
3 CREER UN BOUTON AVEC L ID ID10 LORSQUON CLIQUE QUI VA LANCER LA FONCTION FB10
4 LA FONCTION VA AJOUTER 1 A LA VALEUR DU CHAMP TYPE NUMBER

 EXemple:
 Champ number : 0
 click =>  1, 2, 3 ...
*/

document.getElementById("B10").addEventListener("click", FB10)

function FB10(){
    console.log("test")
    document.getElementById("TEXTID1").value = parseInt(document.getElementById("TEXTID1").value) + 1
    document.getElementById("TEXTID1").value = parseInt(document.getElementById("TEXTID1").value) + parseInt(document.getElementById("TEXTID2").value)
}
 /* Exercice 10
 1 Creer un champs texte avec l'identifiant prenom
 2 Creer un bouton s'inscrire
 2.1 Creer une div avec l'id dprenom
 3 Creer un evenement qui va se produire lorsque je vais presser (keyup) les touches sur
le champs texte qui va déclencher la fonction fprenom
 4 la fonction fprenom elle va afficher dans la div dprenom le nom de la personne
 5 la fonction fprenom elle va afficher dans la div fprenom le nombre de caractere du
 nom de la personne (length)
 6 Si le nombre de caractere est inferieur à 3 afficher dans la div "Attention :
 votre prenom doit faire plus de 3 caracteres"
 7 Si le nombre de caractere est superieur à 10  afficher dans la div "Attention :
 votre prenom doit faire moins de 10 caracteres"
 */

/*document.getElementById("prenom").addEventListener("keyup", fprenom)

function fprenom(){
    document.getElementById("dprenom").innerHTML=document.getElementById("prenom").value
    taille_prenom=document.getElementById("dprenom").innerHTML=document.getElementById("prenom").value.length
    // on stocke dans la variable taille_prenom le nombre de caractères
    if (taille_prenom<3){
        document.getElementById("dprenom").innerHTML="Attention : votre prénom doit faire plus de 3 caractères"
    }
    if (taille_prenom>10){
        document.getElementById("dprenom").innerHTML="Attention : votre prénom doit faire moins de 10 caractères"
    }
    if (taille_prenom>3 && taille_prenom<10) {
        document.getElementById("dprenom").innerHTML="Votre prénom est conforme"
    }
}*/

/* 1 Creez un champs texte avec l'identifiant nom
 2 CReez une div avec l'id dnom
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte qui va declencher la fonction fnom 
 5 la fonction fnom elle va afficher dans la div dnom le nombre de caractere du
 nom de la personne (length)
 6 Si le nombre de caractere est inferieur à 3 afficher dans la div "Attention :
 votre prenom doit faire plus de 3 caracteres"
 7 Si le nombre de caractere est superieur à 10  afficher dans la div "Attention :
 votre prenom doit faire moins de 10 caracteres"
*/

document.getElementById("prenom").addEventListener("keyup", fnom)

function fnom(){
    taille_nom=document.getElementById("dnom").innerHTML=document.getElementById("prenom").value.length
    if (taille_nom<3){
        document.getElementById("dnom").innerHTML="Attention : votre prenom doit faire plus de 3 caracteres"
    }
        if (taille_nom>10){
        document.getElementById("dnom").innerHTML="Attention : votre prenom doit faire moins de 10 caracteres"
    }
        if (taille_nom>3 && taille_nom<10) {
            document.getElementById("dnom").innerHTML="Votre prénom est conforme"
        }
}




