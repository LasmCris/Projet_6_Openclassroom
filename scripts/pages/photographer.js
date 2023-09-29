//Mettre le code JavaScript lié à la page photographer.html
 async function getPhotographer() {
  const reponse = await fetch("./data/photographers.json");
  const infosPhotographe = await reponse.json();

  //Casse tete
  const urlParams = new URLSearchParams(window.location.search);
  const idPhotographer = urlParams.get("id");

  //la Constante photographeElu contient le Premier elements (objet) du tableau
  //photographers qui respect la condition definit par find()
  const PhotographeElu = infosPhotographe.photographers.find(
    (p) => p.id == idPhotographer
  );

  //la Constante media contient un nouveau tableau, contitué d'élements objets
  //qui respectent chacun la condition fixé par la filter()
  const media = infosPhotographe.media.filter(
    (p) => p.photographerId == idPhotographer
  );

  console.log(media[0])

  return { photographer: PhotographeElu, media };
}


async function displayDataPagePhotographer(photographe, photoMedia) {
  // console.log(photographe, photoMedia);
  
  const photographerPage = document.querySelector("main");

  const photographerEncartEtTrie = encartEtTriTemplate(photographe);
  const userEncartDOM = photographerEncartEtTrie.getuserEncartDOM();
  photographerPage.appendChild(userEncartDOM);

  // const sectionTri = sectionTriTemplate();
  // photographerPage.appendChild(sectionTri);

  photoMedia.forEach((objet) => {
    const photographerSectionMedia = sectionMediaTemplate(objet);
    const usersectionMediaDOM =
      photographerSectionMedia.getUsersectionMediaDOM();
    photographerPage.appendChild(usersectionMediaDOM);
  });
}


async function init2() {
  // Récupère les datas des photographes
  const { photographer, media } = await getPhotographer();
  displayDataPagePhotographer(photographer, media);
}

init2();


//Je m'assure que le code s'exécute après que la page HTML complète a été chargée. 
document.addEventListener("DOMContentLoaded", function () {
  //TRIS PAR POPULARITÉ
  //Selectionner le boutton de tris par popularités
  const boutonTrisParPop = document.querySelector(".btnTriParPopularite");
  console.log(boutonTrisParPop);

  // Sélectionnez les éléments contenant les photos et leurs likes
  const tousMediaGenerer = document.querySelectorAll(".sectionMedia__article");

  // Ajout d'un eventListener au lien
  boutonTrisParPop.addEventListener("click", (e) => {
    e.preventDefault;

    // Je Convertie la NodeList en tableau pour pouvoir trier les articles
    const arrayMediaGenerer = Array.from(tousMediaGenerer);

    //Ont Trie le tableau en fonction du nombre de likes
    //(j'utilise parseInt pour convertir le texte en nombre)
    arrayMediaGenerer.sort((a, b) => {
      const likesA = parseInt(a.querySelector(".divFigcap__likes").textContent);
      const likesB = parseInt(b.querySelector(".divFigcap__likes").textContent);
      return likesB - likesA; //pour un tri décroissant
    });

    // Réorganisez les articles dans leur parent
    const parentDesArticlePhotos = document.querySelector(".sectionMedia");
    arrayMediaGenerer.forEach((article) => {
      parentDesArticlePhotos.appendChild(article);
    });
  });

  //TRI PAR DATE DE PUBLICATION
  // Sélection du bouton de tri
  const btnTriParDateDePub = document.querySelector(".btnTrieParDate");
  console.log(btnTriParDateDePub);

  btnTriParDateDePub.addEventListener("click", (e) => {
    e.preventDefault;

    // Je Convertie la NodeList en tableau pour pouvoir trier les articles
    const arrayMediaGenerer = Array.from(tousMediaGenerer);

    // Trie des articles de media en fonction de la date de publication
    arrayMediaGenerer.sort((a, b) => {
      const dateA = new Date(a.querySelector(".divFigcap__date").textContent);
      const dateB = new Date(b.querySelector(".divFigcap__date").textContent);

      return dateA - dateB; //Tri par ordre croissant de date de publication
    });

    // Réorganisez les articles dans leur parent
    const parentDesArticlePhotos = document.querySelector(".sectionMedia");
    arrayMediaGenerer.forEach((article) => {
      parentDesArticlePhotos.appendChild(article);
    });
  });

  // TRI PAR ORDRE ALPHABETIQUE DE TITRE
  // Sélectionnez le bouton de tri.
  const btnTriDesTitreDeMedia = document.querySelector(".btnTrieParTitre");
  console.log(btnTriDesTitreDeMedia);

  btnTriDesTitreDeMedia.addEventListener("click", (e) => {
    e.preventDefault;

    // Je Convertie la NodeList en tableau pour pouvoir trier les articles
    const arrayMediaGenerer = Array.from(tousMediaGenerer);

    // Triez les articles en fonction du nom de la photo
    arrayMediaGenerer.sort((a, b) => {
      const nomA = a
        .querySelector(".figcaption__titreMed")
        .textContent.toLowerCase();
      const nomB = b
        .querySelector(".figcaption__titreMed")
        .textContent.toLowerCase();

      return nomA.localeCompare(nomB); // Tri alphabétique des noms de photo
    });

    // Réorganisez les articles dans leur parent
    const parentDesArticlePhotos = document.querySelector(".sectionMedia");
    arrayMediaGenerer.forEach((article) => {
      parentDesArticlePhotos.appendChild(article);
    });
  });

  //INCREMENTATION DES LIKES
  //Je Sélectionne tous les éléments a (icônes cœur)
  const boutonLikes = document.querySelectorAll(".divFigcap__lienCoeur");
  const arrayBoutonLikes = Array.from(boutonLikes);
  console.log(arrayBoutonLikes);

  //Je selectionne tous les éléments "<p class="divFigcap__likes">" (paragraphes likes)
  const paragrapheNbrLikes = document.querySelectorAll(".divFigcap__likes");
  const arrayParagrapheNbrLikes = array.from(paragrapheNbrLikes);

  //J'Ajoute un gestionnaire d'événements de clic à chaque icône cœur
  arrayBoutonLikes.forEach((boutonLike, index) => {
    boutonLike.addEventListener("click", (e) => {
      e.preventDefault(); // J'empêche le lien de suivre son URL

      //Je sélectionne le paragraphe "divFigcap__likes" associé à l'icône cœur cliquée
      const paragrapheNbrLikes =
        boutonLike.parentElement.querySelector(".divFigcap__likes");

      //J'obtient le nombre actuel de likes ainsi
      let nbrDeLikesActuel = parseInt(
        arrayParagrapheNbrLikes[index].textContent
      );

      //Incrementation du nombre de likes
      nbrDeLikesActuel++;

      //Je mets à jour le contenu du paragraphe avec le nouveau nombre de likes
      arrayParagrapheNbrLikes[index].textContent = nbrDeLikesActuel;
    });
  });

  //SOMME TOTALE DE LIKES
  //Je reutilise la constante arrayParagrapheNbrLikes qui un array de toutes les balises <p> qui
  //contiennent les nbre de likes

  arrayParagrapheNbrLikes;

  // Calculez la somme totale des likes
  let totalLikes = 0;

  arrayParagrapheNbrLikes.forEach((likesElement) => {
    const likes = parseInt(likesElement.textContent);
    totalLikes += likes;
  });

  // Sélection du paragraphe où on va afficher la somme totale
  const paragrapheDesSommesDeLikes = document.querySelector(".nbrLikes__somme");

  //Mise à jour du contenu du paragraphe avec la somme totale
  paragrapheDesSommesDeLikes.textContent = totalLikes;



});





