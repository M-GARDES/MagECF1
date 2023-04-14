# MagECF1
/**Le site devra être livré le xxx/xx/xxx 
*Les livrables sont : - site web fonctionnel,
                      - rapport de test d'accessibilité, W3C   WCAG 2.0 AODA
                      - une documentation utilisateur.
                      - maquettes


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1 )
Thème et Objectifs du site : theme sur les chats , objectif : utiliser une API en rapport avec mon site
Quel type de site web  ? Blog et images de chats

2 )
 Mes pages:    -html: index ,page1 ,page2 ,contacts ,mentions légales,erreur 404)
               -.css / .js pour API /.js pour le contact form
 Fonctionnalités nécessaires:  
                -contact form
                -API comuniquante et interactive.
                                                          
Identifier pages et les fonctionnalités que je veux sur mon site.
Inclure : 1 page d'accueil, 2 page de contenu, 1 page contact .
Autres pages: 1page mentions légales. 1page erreur 404 .
Identifier les fonctionnalités à inclure sur mon site
Affichage d'info provenant d'une API, 
Formulaire de contact. 


3)
Plan de navigation:
Identifié mes pages et les fonctionnalités de mon site
Plan de navigation pour déterminer comment mes visiteurs se déplaceront sur votre site.
Navigation  intuitive et facile à utiliser pour aider les visiteurs à trouver ce qu'ils cherchent rapidement.

4 ) 
Maquettes
Créer les maquettes du site (apparence et le fonctionnement de chaque page)
Outils :Figma, gimp,photoshop.


5)
Framework:
 Bootstrap 

6 )
Intégrer les maquettes dans code HTML et CSS

Respecter les normes W3C 
Rendre le site  responsive pour tous les appareils.

7)
Utiliser l'API en fonction du thème de votre site pour afficher des informations
Test API console :
    *exemple trouver url de l image :  
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
        console.log(data[0].url);
        });
        
                  -------------------------

    *ex pour obtenir lien image race siamois:
        fetch('https://api.thecatapi.com/v1/images/search?breed_ids=siam', {
        headers: {
'x-api-key':'vivre_Ik5s08ymWRLxwp7qF4v3y0Xqy1wmrLMFVBr4qghPAG5srDRwU2vFxzkxwQslhMKv'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));

                 -------------------------

    *ex obtenir 10 liens de photo de chats marrant:
      fetch('https://api.thecatapi.com/v1/images/search?limit=10&category_ids=5', {
  headers: {
'x-api-key':'vivre_Ik5s08ymWRLxwp7qF4v3y0Xqy1wmrLMFVBr4qghPAG5srDRwU2vFxzkxwQslhMKv'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
   
                  ------------------------------

   *ex pour obtenir info sur des race de chat: (60 liens sur les races de chats )
     fetch('https://api.thecatapi.com/v1/breeds', {
  headers: {
    'x-api-key': 'vivre_Ik5s08ymWRLxwp7qF4v3y0Xqy1wmrLMFVBr4qghPAG5srDRwU2vFxzkxwQslhMKv'
  }
})
  .then(response => response.json())
  .then(data => console.log(data));

                --------------------------------
8) 
Tester et valider le site .
Testez chaque page et chaque fonctionnalité ,ssurer le fonctionnent prévu.
Valider au W3C 
Conforme aux normes WCAG niveau AA pour l'accessibilité du web.
Outils :validateur W3C et  Web Accessibility Checker for WCAG 2.0 AODA Compliance Monitoring (achecks.ca).

9 ) 
Mettre votre site web en ligne : dépot du projet sur GitHub
