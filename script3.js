/*
EXO

1 CREER UN NOUVEAU DOSSIER 
2 CREEZ UNE PAGE page.html
3 METTRE SUR GIT
4 CREEZ LE LIEN AVEC LE CSS 
5 CREEZ LE LIEN AVEC LE JS
6 AU CHARGEMENT DE LA PAGE : Dans la console on affiche bienvenue sur la page html
7 CREEZ UN BOUTTON DANS LA PAGE
8 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT BIENVENUE SUR LE BOUTTON
9 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI ECRIT SUR LE BOUTON

*/




/* 
1 . CREEZ UN CHAMPS TEXTE DANS LA PAGE HTML ( COURS HTML )
1 . CREEZ UN CHAMPS BOUTON DANS LA PAGE HTML ( COURS HTML )
2 . AJOUTEZ DANS LE CHAMPS BOUTON UN EVENEMENT QUI VA SE DECLENCHER AU CLIQUE
3 . L EVENEMENT VA DECLENCHER UNE FONCTION QUI VA FAIRE LA CHOSE SUIVANTE : 
5 . AFFICHE DANS UNE DIV CE QU ON A ECRIS DEPUIS LE CHAMPS TEXTE 
6 . RECUPERER LA VALEUR ECRIS DANS LE TEXTE DE LE TRANSFORMER EN NUMERIQUE
7 . DE LE COMPARER A UN NOMBRE ALEATOIRE QUI SERAIT STOCKE DANS UNE VARIABLE
8 . SI ON EST = ON ECRIS DANS LA DIV GAGNE LE JEU
9 . SI ON EST > ON ECRIS DANS LA DIV CEST MOINS 
10 . SI ON EST < ON ECRIS DANS LA DIV CEST PLUS 
*/

//2 . AJOUTEZ DANS LE CHAMPS BOUTON UN EVENEMENT QUI VA SE DECLENCHER AU CLIQUE
function fonction_texte(){

    // obj : recuperer ce qu il y a dans le champs texte et le mettre dans la DIV

    // JE RECUPERER AVEC DOCUMENT CA RECUPERE LE CODE HTML DE LA PAGE
    // getElementById("div_texte") : Methode dans l'objet document me permettant de recuperer la div_text
    // innerHTML : propriété présente dans la méthode "getElementById" permettant d'avoir le HTML présent dans la div
    // AFFECTER UNE VALEUR à la propriété en question
    // JE RECUPERER AVEC DOCUMENT CA RECUPERE LE CODE HTML DE LA PAGE
    // getElementById("name") : Methode dans l'objet document me permettant de recuperer la div_text
    // Value me permettant  de recuperer la valeur exact

     //document.getElementById("div_texte").innerHTML=document.getElementById("name").value ;


     
    console.log("j'ai bien cliqué sur le bouton");
    // LA JE VAIS ECRIRE DU CODE POUR ECRIRE CE QU IL Y A DANS LE CHAMPS TEXTE
    // 1 . Comment recuperer la valeur presente dans le champs texte
    // document me permet de recuperer des choses issue de la page html 
    
    // 2 . optionnel : Je peux la stocké dans une variable

    // Valeur du champs texte : document.getElementById("name").value 
    var_texte= document.getElementById("name").value ; 

    
    // console.log(var_texte)  

    // 3 . Comment je peux modifier le HTML DE LA DIV RESERVE POUR RECEVOIR LE TEXTE
    // 4 . Je modifie le HTML Correspondant
    document.getElementById("div_texte").innerHTML=var_texte;

    // OBJ 2 : le bouton du texte va affiche ce qui est ecris dans le texte
    document.getElementById("bouton_text").innerHTML=var_texte

}

