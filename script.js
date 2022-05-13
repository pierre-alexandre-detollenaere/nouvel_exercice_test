// LA PARTIE DU DOM : POUR MODIFIER LA PARTIE HTML LORS D EVENEMENTS 

// on a appris à modifier une div
// document.getElementById("madiv") : qui va recuperer l'emplacement de la div
// innerHTML="le nouveau text"; qui modifier le HTML de la div
document.getElementById("madiv").innerHTML="le nouveau text";

// PROPRIETE ET DES METHODES
// LES METHODES => parenthèses : dans les parenthèses il y avait des parametres
// LES PROPRIETE : Math.PI => il n y a pas de parentheses
madiv=document.getElementById("madiv").innerHTML;

/* une variable : 
1 nom de variable par ex: age
2 une valeur : 34
=> age = 34
la nom de variable age reçoit la valeur 34
----------------
PROPRIETE PAR PROPOSER PAR JS  : Math.PI=3.1453453
PI : nom de variable
3.1453453 : valeur
PI=3.1453453

MAPROPRIETEM=4543;
*/

/**
 * ORDINATEUR : 
 * CHAQUE LANCEMENT DANS L ORDINATEUR DOIT ETRE PRESENT DANS LA RAM (MEMOIRE VIVE)
 * PROCESSEUR : COPIER VOS PROGRAMME EN RAM PROCESSEUR : LANCER CE QUI EST DANS LA RAM
 * RAM : ETEINT : VIDE LA RAM DEMARRAGE : VIDE RAM : SE REMPLIT AU DEMARAGE
 * 
 */
a=3; 
b=5;

// RAM [ EMPLACEMENT a=3 ; EMPLACEMENT a=5   ]
// EXERCICE
 
// 1 CREEZ UNE VARIABLE A = 10 
// 2 CREEZ UNE VARIABLE B = 50
// 3 AFFICHEZ DANS LA CONSOLE LA VARIABLES A est 10 et la VARIABLE B est 50
// concatenation : le fait d affiche du text :  "LA VARIABLES A est " suivi d 'une variable
// on utilise le " " + " "
console.log(" LA VARIABLES A est " + a + "et la VARIABLE B " + b)




age=34
Math.PI=3.1453453

/* ALGORITHMIQUE

1 VARIABLES
Lorsque on va stocke 
ou manipulé on va avoir besoin de données on va mettre dans une variables

2 CONDITIONS

3 BOUCLES

4 FONCTION

*/

/* 1 LES VARIALES */
// VARIABLES NUMERIQUE SANS GUILLEMENT
// CREATION DE LA VARIABLE NUMERIQUE AGE CONTENANT 34
age=15;
alert(age);

// VARIABLES CHAINE DE CARACTERE AVEC GUILLEMENT
// CREATION DE LA VARIABLE CHAINE DE CARACTERE NOM CONTENANT MELKI
nom="Melki";
alert(nom);


/* 2 LES CONDITIONS */
if (age > 17 ) {
    alert("Vous êtes majeur ! ");
}
if (age < 18 ) {
    alert("Vous êtes mineur ! ");
}

/* 3 LES BOUCLES */
// objectif : affiche 10 fois l'alerte : je suis heureux X fois !
// ON DEMMARE la variable I A 0;ON S ARRETTE A 10;A CHAQUE FOIS ON INCREMENT DE 1
for (i=0;i<2;i++) {
    alert("Je suis heureux !");
}

/* Les fonctions */
// SEGMENTER SON CODE
// ON VA AVOIR DU CODE QUI VA ETRE DANS UNE FONCTION

// 1. CREATION DU CORP DE LA FONCTION
function blabla(){
    // DEBUT DE CODE  300 LIGNES
    alert("je suis dans la fonction VOILA CE QU IL SE PASSE! ");
}

// 2. l appel de la fonction
blabla()