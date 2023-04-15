document.addEventListener("DOMContentLoaded", () => {      /* requête envoyée*/
    const apiKey = "vivre_Ik5s08ymWRLxwp7qF4v3y0Xqy1wmrLMFVBr4qghPAG5srDRwU2vFxzkxwQslhMKv";
  
    function getRandomCatImage() {  /* envoie requête à API et obtient img aléatoire de chat en utilisant l'API key fourni*/
      fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&width=400&height=300", {/*réponse est convertie en .json et URL de l'img est extraite. Un élément d'img html est créé et configuré avec l'url de l'img, puis ajouté au conteneur d'image html dans le document.*/
        headers: {
          "x-api-key": apiKey
        }
      })
      .then(response => response.json()) //Après récup réponse de l'API, converti la réponse en un objet JS */
      .then(data => {           /*récupère URL de l'image à partir de l'objet data et crée un nouvel élémnt <img> avec la source ('URL de l'image)*/
        const catImageURL = data[0].url;  /*stocke l'url de l'img de chat générée aléatrmnt à partir de l'API.*/
        const catImageContainer = document.getElementById("cat-image-container");/*sélection l'élémnt html avec l'id "cat-image-container" à l'aide de la méthode "getElementById" et on le stocke dans la constante "catImageContainer"*/
        const catImage = document.createElement("img");/*crée 1nouvel élémnt html img à l'aide de méthode "createElement", puis lui assigne l'url de l'img (propriété src)*/
        catImage.src = catImageURL;
        catImageContainer.appendChild(catImage);  /*la fonction ajoute l'élémnt <img> "enfant de élémnt + l'ID cat-image-container dans DOM de la pg. permet afficher l'img aléatoire récupérée à l'écran.*/
      })
      .catch(error => console.log(error)); /*gére erreurs de la requête "fetch". Si erreur ,elle sera affichée dans la console "console.log()".*/
    }
  
    getRandomCatImage();  /*récupérer image aléatr de chat format JPG ou PNG. Puis ajoute l'image au conteneur "cat-image-container" dans le html.*/
  
    const newCatButton = document.getElementById("catbutton"); /*ajoute 1 événement clic sur bouton "newCatButton" pour exécuter la fonction "getRandomCatImage()" qui récupère 1nouvelle image de chat aléat à partir de l'API et remplace dans conteneur*/
    newCatButton.addEventListener("click", () => {  /*ajoute 1événement de click sur bouton identifiant "catbutton". Lorsque bouton cliqué, fonction anonyme est exécutée.*/
        fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg,png&width=400&height=300", { /* écoute le clic*/
          headers: {     /*envoie nouvelle demande à l'API pour obtenir une image de chat aléatoire.*/
            "x-api-key": apiKey
          }
        })
        .then(response => response.json())    //traite réponse de requête "fetch"  convertis les données récupérées en format json.
        .then(data => {                      //exécute 1fonction avec ls données json récupérées en tant qu'argument.
          const catImageURL = data[0].url;   /*contient l'URL de l'img de chat aléatoire retournée par l'API */
          const catImageContainer = document.getElementById("cat-image-container");/*référence à élément html dans lequel l'image de chat sera affichée. La fonction "getElementById" pour sélectionner l'élément html en utilisant son ID.*/
          const catImage = document.createElement("img");  /*crée nouvel élmnt html 'img' utilise méthode 'createElement' et stocke l'élmnt dans variable nommée "catImage". l'élmnt sera utilisé pour afficher l'image du chat récupérée à partir de l'API.*/
          catImage.src = catImageURL; /*définit source de l'img à afficher en utilisant l'url récupérée depuis l'API des images de chat. Permet de créer nouv img html qui sera affichée sur la page.*/
          catImage.alt = "Random cat image";
          catImage.style.maxWidth = "100%";
          catImage.style.height = "auto";
          catImageContainer.innerHTML = ""; /* pour supprimer img précédente avant de placer nouvelle img.*/
          catImageContainer.appendChild(catImage);  /*insère l'image du chat dans le document html*/
        })
        .catch(error => console.log(error));     /*récupére nouvel img de chat en appelant l'API chaque fois que l'utlsteur clique sur bouton "catbutton". Si succès de  requête, la nouvelle image est affichée dans "cat-image-container". Si erreur, elle est affichée dans la console "console.log".*/
      });
  });