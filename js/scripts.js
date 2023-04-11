window.addEventListener('DOMContentLoaded', () => { /*ajoute 1écouteur d'évnmnts à l'objet window pour détecter le doc HTML chargé .la fonction anonyme suivante sera exécutée*/
    let scrollPos = 0; /*crée une variable "scrollPos" initialisée à 0. sera utilisée pour stocker la position de défilement de l'utilisateur.*/
    const mainNav = document.getElementById('mainNav');/*récupère élmnt HTML avec l'ID mainNav avec 'getElementById' et stocke  élément dans constante mainNav*/
    const headerHeight = mainNav.clientHeight;/*stocke hauteur de l'élmnt HTML mainNav dans constante 'headerHeight'. Utile pour déterminer quand fixer la barre de navigation en haut de la page.*/
    window.addEventListener('scroll', function() {/*ajoute 1écouteur d'évnmnts à l'objet window pour détecter quand l'utilisateur fait défiler la page...la fonction anonyme suivante sera exécutée.*/
        const currentTop = document.body.getBoundingClientRect().top * -1;/*définit 1variable "currentTop" qui stocke la position actue de l'utilisateur sur la page en px. 
        Calcul :position de la partie sup du corps de la page (document.body.getBoundingClientRect().top) x par -1 pour la transformer en un nombre positif.*/
        if ( currentTop < scrollPos) {/*teste si l'utilisateur fait défiler la page vers le haut. Si position actu est inf à position précéd (stockée dans variable scrollPos), l'utilisateur a fait défiler vers le haut.*/
            // Scrolling Up

            /*Si utilisateur fait défiler vers haut, code est exécuté. Si position actue sup à 0 et que classe "is-fixed" est présente sur élément 'HTML' avec la classe "mainNav",
             signifie que la barre de navgtn doit rester fixe en haut de la page.
             La classe "is-visible" est alors ajoutée à élément 'HTML' avec classe "mainNav". Sinon, les classes is-visible et is-fixed sont suppr de élément HTML avec la classe 'mainNav'.*/
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            /*Si l'utilisateur fait défiler vers le bas,code est exécuté. 
            La classe 'is-visible' est suppr de l'élmnt HTML avec la classe 'mainNav'. 
            Si la position actue est sup à hauteur de l'en-tête (headerHeight) et que classe 'is-fixed n'est pas présente sur l'élmnt HTML avec la classe 'mainNav',
            signifie que la barre de navigation doit être fixée en haut de la page. et classe is-fixed s'ajoute à l'élmnt HTML avec la classe 'mainNav'.*/
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;/* met à jour la valeur de variable 'scrollPos' avec la position actuelle de l'utilisateur, pour etre utilisée pour comparer la position actue avec position précd pendant la prochaine vérification.*/
    });
})
