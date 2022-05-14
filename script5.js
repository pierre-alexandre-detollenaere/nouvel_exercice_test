/*
1 REFAIRE L EXEMPLE DU COURS AFFICHER DANS UNE DIV LES CHIFFRE DE 0 A 9
2 UN CHAMPS (INPUT) EN HTML QUI CONTIENT UN PASSWORD (internet code html) / creez une div
3 LE JAVASCRIPT IL VA AFFICHE DANS UNE DIV LE TEXTE QUE VOUS AVEZ ECRIT DANS LE INPUT LORSQUE VOUS ECRIVEZ dans le champs  
3.1 LE JAVASCRIPT IL VA AFFICHE DANS LA MEME DIV LE NOMBRE DE CARACTERE / x CARACTERES  
3.2 LE JAVASCRIPT IL VA AFFICHE DANS LA MEME DIV SI VOUS AVEZ MOINS QUE 3 CARACTERES OU PLUS 10 CARACTERES CA 
// AFFICHE MOT DE PASSE NON CONFORME 
4 AU DEMARAGE DU SITE DEPUIS JAVASCRIPT VOUS ALLEZ AFFICHEZ 10 BOUTONS
5 LORSQU ON CLIQUE SUR UN DES 10 BOUTON ON AFFICHE DANS UNE DIV EXTERIEUR LA TABLE DE MULTIPLICATION DE LA DIV
*/

// le JS va se declenche quand je tape dans le champs texte
// J'ai recuperer grace a document la page html
// grace getElementById("pass") : j'ai recupere l'identifiant correspondant au champs texte
// je lui ai rajouté un evenement "keyup" qui se declenche avec la fonction fpwd 
document.getElementById("pass").addEventListener("keyup", fpwd)
function fpwd(){

    // je veux afficher dans la div quelque chose
    // J'ai recuperer grace a document la page html
    // grace getElementById("pwd") : j'ai recupere l'identifiant correspondant à la div
    // je vais mettre à l'interieur la valeur présente dans le texte
    // J'ai recuperer grace a document la page html
    // grace getElementById("pass") : j'ai recupere l'identifiant correspondant au champ texte
    // .value la valeur correspondante

    document.getElementById("pwd").innerHTML=document.getElementById("pass").value;
 
}


// ALERT : CA AFFICHE UNE BOITE DE DIALOGUE
// CONSOLE.LOG  CA AFFICHE DANS LA CONSOLE UN MESSAGE : pour tester tres utiles
// INNERHTML POUR ECRIRE DU HTML (DIV)
// VALUE : une de propriété html qui nous interesse

