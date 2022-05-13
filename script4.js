// Declare une variable age
/*age=34;
alert(age);
nom="Melki";
alert(nom);
 // on dit qu on demmare à 0  i=0
 // on s arrete avant 10 condition i<10
 // on incrémente de 1 : i++ => i=i+1
for (i=0;i<10;i=i++) {
    alert("Je suis heureux !");
}

// CORP DE LA FONCTION / DEFINITION DE LA FONCTION
function afficher_alert(){
    // DEBUT DE CODE
    alert("je suis dans la fonction VOILA CE QU IL SE PASSE! ");
}


/*
1 CREER UN NOUVEAU DOSSIER 
2 CREEZ UNE PAGE page.html
3 METTRE SUR GIT
4 CREEZ LE LIEN AVEC LE CSS 
5 CREEZ LE LIEN AVEC LE JS
6 AU CHARGEMENT DE LA PAGE : Dans la console on affiche bienvenue sur la page html
7 CREEZ UN BOUTTON DANS LA PAGE
8 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT BIENVENUE SUR LE BOUTTON
9 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI ECRIT SUR LE BOUTON
10 Ajouter dans la page html un champs texte
11 Ajouter dans la page html une div reserver à afficher des choses en JS : VIDE PAR DEFAUT
12 Lorsqu on clique sur le bouton on affiche dans la div le contenue du champs texte
13 on affiche dans la div le contenue du "Le texte contient : " champs texte
13.1 Pareil que la question 13 ce n'est pas que le clique mais lorsque j'écris sur le champs texte
14 on affiche dans la div le contenue du "Le prix est  : " champs texte La TVA est champs texte*1.2
*/

function fboutton(){
    
    // affiche dans la div le contenue du champs texte
    val_texte=document.getElementById("name").value // EX 100


    console.log(val_texte); // affiche la valeur présente dans le champs texte
    console.log(typeof(val_texte)); // typeof est une fonction qui affiche le type de ma variable
    val_texte_tva=val_texte*1.2 // 120
    console.log(val_texte_tva); // Si cest du texte : NaN
    /**
     * isNaN("test")
     *   true
    */
     console.log(isNaN(val_texte)); // 12 => FALSE | "hello" => true


     // si le texte entré est un nombre alors on affiche la TVA

     // isNaN => verifier si le texte est un nombre : renvoie false
     if (   isNaN(val_texte) == false    )   {

        // AFFichage de la TVA dans la DIV
        document.getElementById("div_texte").innerHTML= "Le prix TTC est  :  " +   val_texte_tva;

     }

     // si non : si le texte n est pas un nombre
     else {
        document.getElementById("div_texte").innerHTML= "Veuillez entré un nombre";

     }



    // code qui s'execute lorque je clique

    //ALERT AFFICHANT BIENVENUE SUR LE BOUTTON
    //alert("bienvenue sur le bouton !");

    // ALERT AFFICHANT "Le bouton affiche "CE QUI ECRIT SUR LE BOUTON
    //alert("Le bouton affiche : " + document.getElementById("monboutton").innerHTML);
}


/*
function toto(){
    // le prompt permet de demander à l'utilisateur via une boite de dialogue d'entrer un nombre
    // on stocke l'information dans la variable nb_user
   nb_user=prompt("devinez un nombre entre 1 et 100");
   // On l'affiche
   alert(nb_user);
   console.log(nb_user);
}*/


/*
EXERCICE
 1 CREEZ UNE VARIABLE A = 10 
 2 CREEZ UNE VARIABLE B = 50
 3 AFFICHEZ DANS LA CONSOLE LA VARIABLES A est 10 et la VARIABLE B est 50
console.log(" LA VARIABLES A est " + a + "et la VARIABLE B " + b)*/


// SEL = 100
// SUCRE = 50
// INVERSON LES 2

sel=100
sucre=50

//affichage 
console.log(" le sel contient : " + sel )
console.log(" le sucre contient : " + sucre )

console.log(" --------------" )
// 1 ETAPE : On sauvegarde dans une variable intermediaire il a reçu la variable sucre
intermediaire_save_sucre = sucre;
//affichage 
console.log(" l'intermediaire ' contient : " + intermediaire_save_sucre ) // sel = sucre afficher 50
console.log(" le sel contient : " + sel ) //   afficher 100
console.log(" le sucre contient : " + sucre ) //   sucre afficher 50
console.log(" --------------" )
console.log(" -----on va remplacer le contenue de la variable sucre avec la variable sel---------" )
sucre=sel; // sucre = 100
//affichage 
console.log(" l'intermediaire ' contient : " + intermediaire_save_sucre ) // sel = sucre afficher 50
console.log(" le sel contient : " + sel ) //   afficher 100
console.log(" le sucre contient : " + sucre ) //   sucre afficher 50
console.log(" -----on va remplacer le contenue de la variable sel avec l'intermedaire sauv sel---------" )
sel=intermediaire_save_sucre;
//affichage 
console.log(" l'intermediaire ' contient : " + intermediaire_save_sucre ) // sel = sucre afficher 50
console.log(" le sel contient : " + sel ) //   afficher 100
console.log(" le sucre contient : " + sucre ) //   sucre afficher 50


console.log("Bienvenue sur la page d'accueil");
