/** 
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