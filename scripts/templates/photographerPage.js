function encartEtTriTemplate(dataPhotographe) {
  const { name, portrait, country, city, tagline, price, id } = dataPhotographe;

  const picture = `assets/photographers/${portrait}`;
  const idPhotographer = id;

  function getuserEncartDOM() {
    const sectionInfosPhotographe =
      document.querySelector(".encartPhotographe");

    const divInfo = document.querySelector(".divInfo");
    const nomPhotographe = document.createElement("h2");
    nomPhotographe.classList.add("divInfo__nom");
    divInfo.appendChild(nomPhotographe);
    nomPhotographe.textContent = name;

    const cityCountry = document.createElement("h3");
    cityCountry.classList.add("divInfo__cityCountry");
    divInfo.appendChild(cityCountry);

    cityCountry.textContent = `${city}, ${country}`;

    const tagLine = document.createElement("p");
    tagLine.classList.add("divInfo__tagline");
    divInfo.appendChild(tagLine);

    tagLine.textContent = tagline;

    const divFormulaire = document.querySelector(".divFormulaire");
    const btnFormulaire = document.querySelector(".encartPhotographe button ");
    btnFormulaire.classList.add("divFormulaire__btn");
    divFormulaire.appendChild(btnFormulaire);

    const divPhoto = document.querySelector(".divPhoto");
    const photoPhotographe = document.createElement("img");
    photoPhotographe.classList.add("divPhoto__photo");
    divPhoto.appendChild(photoPhotographe);
    photoPhotographe.setAttribute("src", picture);

    // Sélectionnez la balise section avec la classe sectionTris
    const sectionTris = document.querySelector(".sectionTris");

    // Création du lien "Trier par"
    const trierParLink = document.createElement("a");
    trierParLink.className = "trierPar";
    trierParLink.textContent = "Trier par:";
    sectionTris.appendChild(trierParLink);

    // Création de la div "menuTri"
    const menuTriDiv = document.createElement("div");
    menuTriDiv.className = "menuTri";

    // Création de la liste non ordonnée (ul)
    const ul = document.createElement("ul");

    // Création du premier élément de liste
    const liPopularite = document.createElement("li");
    const aPopularite = document.createElement("a");
    aPopularite.className = "btnTriParPopularite";
    aPopularite.href = "#";
    aPopularite.textContent = "Popularité ";
    const span1 = document.createElement("span");
    span1.className = "triSymbol";
    span1.textContent = "▲";
    aPopularite.appendChild(span1);
    liPopularite.appendChild(aPopularite);

    // Création du deuxième élément de liste
    const liDate = document.createElement("li");
    const aDate = document.createElement("a");
    aDate.className = "btnTrieParDate";
    aDate.href = "#";
    aDate.textContent = "Date ";
    const span2 = document.createElement("span");
    span2.className = "triSymbol";
    span2.textContent = "▲";
    aDate.appendChild(span2);
    liDate.appendChild(aDate);

    // Création du troisième élément de liste
    const liTitre = document.createElement("li");
    const aTitre = document.createElement("a");
    aTitre.className = "btnTrieParTitre";
    aTitre.href = "#";
    aTitre.textContent = "Titre ";
    const span3 = document.createElement("span");
    span3.className = "triSymbol";
    span3.textContent = "▲";
    aTitre.appendChild(span3);
    liTitre.appendChild(aTitre);

    // Ajout des éléments à la liste non ordonnée
    ul.appendChild(liPopularite);
    ul.appendChild(liDate);
    ul.appendChild(liTitre);

    // Ajout de la liste à la div "menuTri"
    menuTriDiv.appendChild(ul);

    // Ajout de la div "menuTri" à la section
    sectionTris.appendChild(menuTriDiv);

    return sectionInfosPhotographe;
  }
  return {getuserEncartDOM };
}






function sectionMediaTemplate (dataMedia) {
    const {id, photographerId, title, image, video, likes, date, price} = dataMedia;

    console.log(image, video);

    function getUsersectionMediaDOM() {
    const sectionMedia = document.querySelector (".sectionMedia");

    const articleMedia = document.createElement ("article");
    articleMedia.classList.add ("sectionMedia__article");
    sectionMedia.appendChild (articleMedia);
    const figureMedia = document.createElement ("figure");
    figureMedia.classList.add ("article__figure");
    articleMedia.appendChild (figureMedia);

    const lienMedia = document.createElement ("a");
    lienMedia.classList.add ("figure__lien");
    
    figureMedia.appendChild (lienMedia);

    let MediaEnQuestion;

    //Structure if-else pour definir si l'objet et un media de type img ou video
    //Pour creer l'element correspondand en consequence.
    if (video === undefined) {
      let pathMedia = `./assets/samplePhotos/${image}`;
        MediaEnQuestion = document.createElement("img");
        MediaEnQuestion.src = pathMedia;
        lienMedia.href = pathMedia;
    } 
    else {
      let pathMedia = `./assets/samplePhotos/${video}`;
      MediaEnQuestion = document.createElement("video");
      MediaEnQuestion.setAttribute("controls", "true");
          BaliseSourceVideo = document.createElement("source");
          MediaEnQuestion.appendChild(BaliseSourceVideo);
          lienMedia.href = pathMedia;
          BaliseSourceVideo.src = pathMedia;
          BaliseSourceVideo.type = "video/mp4";
    }
        lienMedia.appendChild(MediaEnQuestion);
        MediaEnQuestion.classList.add ("lienMedia__media");

    const figcaptionMedia = document.createElement ("figcaption");
    figcaptionMedia.classList.add ("figure__figCaption");
    figureMedia.appendChild (figcaptionMedia)

    const titreMedia = document.createElement ("h3");
    titreMedia.classList.add ("figcaption__titreMed");
    titreMedia.innerText = title;
    figcaptionMedia.appendChild (titreMedia);

    const divFig = document.createElement ("div");
    divFig.classList.add ("figcaption__Div");
    figcaptionMedia.appendChild(divFig);

    const paragrapheDate = document.createElement ("p");
    paragrapheDate.innerHTML = date;
    paragrapheDate.classList.add ("divFigcap__date");
    figcaptionMedia.appendChild(paragrapheDate);

    const paragrapheLikes = document.createElement("p");
    paragrapheLikes.innerText = likes;
    paragrapheLikes.classList.add ("divFigcap__likes");
    divFig.appendChild (paragrapheLikes);

    const lienCoeur = document.createElement ("a");
    lienCoeur.classList.add("divFigcap__lienCoeur");
    divFig.appendChild (lienCoeur);

    const iconeCoeur = document.createElement("i");
    iconeCoeur.classList.add("fa-solid", "fa-heart");
    lienCoeur.appendChild(iconeCoeur);

    
     
      return sectionMedia;
        
    }


    return { getUsersectionMediaDOM };
}



