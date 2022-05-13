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

/* Les evenements  */
 
// dans la documentation
// dans quel objet je suis ?
// est ce qu on me proposer de manipuler une méthode ou un propriété

function toto(){
    // le prompt permet de demander à l'utilisateur via une boite de dialogue d'entrer un nombre
    // on stocke l'information dans la variable nb_user
  // nb_user=prompt("devinez un nombre entre 1 et 100");
   // On l'affiche 
   // on a implicement l'objet window
   // qui contient l'objet console
   // qui contient la méthode log
  // console.log(nb_user);
  

    // RAM [ EMPLACEMENT a=3 ; EMPLACEMENT a=5   ]
    // EXERCICE
    
    // 1 CREEZ UNE VARIABLE A = 10 
    // 2 CREEZ UNE VARIABLE B = 50
    // 3 AFFICHEZ DANS LA CONSOLE LA VARIABLES A est 10 et la VARIABLE B est 50
    // concatenation : le fait d affiche du text :  "LA VARIABLES A est " suivi d 'une variable
    // on utilise le " " + " "
    // CREATION DE LA VARIABLE A
    a=3; 
    // CREATION DE LA VARIABLE B
    b=5; 
    // CONCATENER DU TEXTE ET DES VALEURS VARIABLES
    // "LE TEXTE " + VARIABLE + "TEXTE A NOUVEAU"
    console.log("LA VARIABLE A CONTIENT " + a )
    console.log(" LA VARIABLES A est " + a + " et la VARIABLE B est "  + b)
    // AFFICHE LA VARIABLE A EST 3 et LA VARIABLE B EST 5
    // ECHANGER LES VARIABLE A ET B

    // CODE A VOUS ALGORITHMIQUE PERMETTANT D ECHANGER LES DEUX VARIABLES A ET B
    //a=b;  on perd la valeur d'origine de a . a =3 b = 5
   // b=a;

    // solution : variable intermediaire : c
    c=a; // c va contenir le 3 . je le garde de cote
    a=b; // a = 5 . mais on a pas perdu a . a est dans c.
    b=c; // on recupere le 3 issue de c.




    // AFFICHE LA VARIABLE A EST 5 et LA VARIABLE B EST 3
    console.log(" LA VARIABLES A est " + a + " et la VARIABLE B est "  + b)

    rsel=10;
    rsucre=5;

    // AFFECTATION DE VALEUR 
    recpinter=rsel;
    resel=rsucre;
    rsucre=recpinter;








}