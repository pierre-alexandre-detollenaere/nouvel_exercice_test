
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

/*1 Creez un champs texte avec l'identifiant  age
 2 CReez une div avec l'id dage
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte qui va declencher la fonction fage
 5 la fonction fage elle va verifier si il est >0 et <120 alors cela pourra 
 l'age est conforme sinon cela ecrira  l'age doit être 0 et 120
*/

document.getElementById("age").addEventListener("keyup", fage)

function fage(){
    v_age=document.getElementById("age").value
    if (v_age>0 && v_age<120){
    document.getElementById("dage").innerHTML= "l'âge est conforme"
    }
    else{
        document.getElementById("dage").innerHTML="l'âge n'est pas conforme"
    }
}

/* 1 Creez un champs password avec l'identifiant  pwd1 et pwd2
 2 CReez une div avec l'id dpwd
 3 Creez un evenement qui va se produire lorsque je vais presser (keyup) les touches sur 
 le champs texte pwd1 et pwd2 qui va declencher la fonction fpwd
 5 la fonction fpwd elle va verifier si le champs pwd1 et pwd2 sont identiques si 
 c'est le cas cela affiche les mot de passes sont OK si non
 Attention : les mots de passes ne sont pas identiques
*/

document.getElementById("pwd1").addEventListener("keyup", fpwd)
document.getElementById("pwd2").addEventListener("keyup", fpwd)

function fpwd(){
    mdp1=document.getElementById("pwd1").value
    mdp2=document.getElementById("pwd2").value
    if (mdp1==mdp2){
        document.getElementById("dpwd").innerHTML="les mots de passe sont OK"
    }
    else{
    document.getElementById("dpwd").innerHTML="les mots de passe ne sont pas identiques"
    }
}

/* Exercice 11
1 creer un champs texte avec l'id "mult". Creer une div avec l'id dmult
2 Creer un evenement qui va se produire lorsque je vais passer (keyup) les touches sur 
ce champs texte declenchant la fonction fmult
3 la fonction fmult affiche les nombres dans la div de 1 à 10
4 la fonction fmult affiche les nombres dans la div de 1 à 10 au nombre entré dans le champs
texte
*/

document.getElementById("mult").addEventListener("keyup", fmult)

function fmult(){
    val_num=document.getElementById("mult").value
    for(i=0;i<val_num;i++) {
    document.getElementById("dmult").innerHTML=document.getElementById("dmult").innerHTML + " " + i
    }
}

// lorsque je vais ecrire un nombre dans le champs tva
document.getElementById("tva").addEventListener("keyup", ftva)

function ftva(){
    //val_tva=document.getElementById("TTC").value*1.2
    val_tva=calcul_TTC(document.getElementById("tva").value)
    // dans la div dtva j'écris la valeur du PRIX TTC
    document.getElementById("dtva").innerHTML=val_tva
}

// fonction qui ne renvoie rien
function test2(){
    console.log("j affiche des choses")
}
test2()
// fonction qui renvoie une valeur elle doit être récupérée par une variable

function test(){
    // la fonction test renvoie la valeur 1
    return "Bonjour"
}
// test() va executer la fonction => 1
// a va recevoir ce 1
a=test();
console.log(a)

// fonction calcul_TTC qui va renvoyer le priix * 1.2 pour renvoyer le prix TTC
// fonction calcul_TVA qui va renvoyer le priix * 0.2 pour renvoyer le prix de la taxe
// fonction calcul_reduc qui va renvoyer le priix * 0.9 pour renvoyer le prix réduit de 10%


// fonction calcul de reduc qui va multiplier le prix * la reduction qui va etre demandée
function calcul_reduc(param_prix , param_reduc){
    result=param_prix*param_reduc
    return result
}
// la fonction calcul_reduc est appelée
le_prix=calcul_reduc(300,1.50)
console.log("300*1.50=" + le_prix)

// fonction addition qui renvoie le resultat de l'addition de deux nombres
function addition(param_nb1, param_nb2){
    somme=param_nb1+param_nb2
    return somme
}

total=addition(50,25)
console.log(total)


// déclarer un prix à 100

function calcul_TTC(param_prix){
    // elle créée une variable prix_ttc qui contient le prix(100) * 1.2 et elle renvoie (120)
    prix_ttc= param_prix*1.2;
    return prix_ttc
}
// la fonction calcul_ttc est appelée
le_prix=calcul_TTC(300)
console.log(le_prix)

// la fonction calcul_ttc est appelée
le_prix=calcul_TTC(100)
console.log(le_prix)

// la fonction calcul_ttc est appelée
le_prix=calcul_TTC(50)
console.log(le_prix)

// la fonction calcul_ttc est appelée
le_prix=calcul_TTC(500)
console.log(le_prix)


// dans les parenthèses on a les paramètres : des input : qu est ce qu on a besoin : il me faut le prix
// dans le return c'est le résultat à votre question
function calcul_tva(param_prix){
    montant_tva=param_prix*0.9
    return montant_tva
}
la_tva=calcul_tva(300)
console.log(la_tva)

//fonction calcul_reduc_10 qui va renvoyé le prix * 0.9 pour renvoye le Prix reduit de 10%
function calcul_reduc_10(param_prix){
    reduc_10=param_prix*0.9
    return reduc_10
}
reduc=calcul_reduc_10(100)
console.log(reduc)

//la réduction de 20% *0.8
function calcul_20(param_prix){
    remise_20=param_prix*0.8
    return remise_20
}
remise=calcul_20(100)
console.log(remise)


// LES BOOLEENS
// LA FONCTION VA RENVOYER VRAI OU FAUX

// check_majeur // vrai la personne est majeur soit c'est faux
info=true;
info2=false;

console.log(info)
console.log(info2)

// fonction qui vérifie si on est majeur ou pas : revoie true si on est majeur

function check_age(age){
    if(age>17){
        return true;
    }
    else{
        return false;
    }
}

a=check_age(50)
console.log("check_age=50"+a)

// fonction de verifier si un nombre est superieur à 0
function positif(nb){
    if (nb > 0){
        return true
    }
    if (nb < 0) {
        return false
    }
}
a=positif(15)
console.log("positif:"+a)



// fonction de verifier si un nombre est superieur est pair
function check_pair( nb ) {
    if (nb % 2 == 0){
        true
    }
    else {
        return false;
    }
}
a=check_pair(15)
console.log("pair:"+a)



function verif(nb){
    if(nb>0){
        return true;
    }
    else{
        return false;
    }
}
b=verif(-5)
console.log(b)

function check_pair(nb){
    if(nb%2==0){
        return true;
    }
    else{
        return false;
    }
}

c=check_pair(6)
console.log(c)

// portée des variables
// const : à utiliser pour les variables qui ne doivent pas changer (constante ça empêche toute modification possible)
// let : Let est à utiliser en priorité, A utiliser mais on protège nos blocs de fonction, de if, de boucle 
// la portée est limitée au bloc, 1 let n'est défini que dans son bloc
// let autorise la modification de la variable
// var : priorité 3, modifie la variable, valeur par défaut, en général on ne l'utilise pas

const mavariable="ce que je veux" // variable qui ne peut plus être modifiée
//mavariable="autre chose"
console.log(mavariable)

const variable2="nouvelle variable"
//variable2="c'est nouveau!"; Assignment to constant variable at script6.js:575:10
console.log(variable2)

// age à 45 ans
// avec let on ne peut pas redeclarer une variable
let age=45;
//let age=46; Identifier 'age' has already been declared (at script6.js:581:5)
console.log(age);

function test20(){
    console.log(" l age est : " + age);
}
test20()





