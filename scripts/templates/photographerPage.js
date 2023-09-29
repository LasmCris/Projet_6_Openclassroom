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

    // Créez les éléments HTML nécessaires
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const liDeroulant = document.createElement("li");
    const aDeroulant = document.createElement("a");
    const ulSous = document.createElement("ul");
    const liPopularite = document.createElement("li");
    const liDate = document.createElement("li");
    const liTitre = document.createElement("li");
    const aPopularite = document.createElement("a");
    const aDate = document.createElement("a");
    const aTitre = document.createElement("a");

    // Ajoutez des classes aux éléments
    sectionTris.classList.add("sectionTris");
    liDeroulant.classList.add("deroulant");
    ulSous.classList.add("sous");
    aPopularite.classList.add("btnTriParPopularite");
    aDate.classList.add("btnTrieParDate");
    aTitre.classList.add("btnTrieParTitre");

    // Ajoutez du texte aux éléments a
    aDeroulant.textContent = "Trier par \u00A0 :";
    aPopularite.textContent = "Popularité";
    aDate.textContent = "Date";
    aTitre.textContent = "Titre";

    // Ajoutez les éléments HTML dans la structure appropriée
    ul.appendChild(liDeroulant);
    liDeroulant.appendChild(aDeroulant);
    liDeroulant.appendChild(ulSous);
    ulSous.appendChild(liPopularite);
    ulSous.appendChild(liDate);
    ulSous.appendChild(liTitre);
    liPopularite.appendChild(aPopularite);
    liDate.appendChild(aDate);
    liTitre.appendChild(aTitre);
    nav.appendChild(ul);
    sectionTris.appendChild(nav);

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

    const asideMedia = document.createElement ("aside");
    asideMedia.classList.add ("sectionMedia__comptabilité");
    sectionMedia.appendChild (asideMedia);

    const paraSommeDesLikes = document.createElement ("div");
    paraSommeDesLikes.classList.add ("comptabilité__nbrLikes");
    asideMedia.appendChild (paraSommeDesLikes);


        const sommeNbrLikes = document.createElement("p");
        sommeNbrLikes.classList.add("nbrLikes__somme");
        paraSommeDesLikes.appendChild(sommeNbrLikes);

        const iconeCoeurSommeLike = document.createElement("i");
        iconeCoeurSommeLike.classList.add("fa-solid", "fa-heart");
        paraSommeDesLikes.appendChild(iconeCoeurSommeLike);


        

    const paragraphePrix = document.createElement ("p");
    paragraphePrix.innerText = `${price}€ / jour`;
    paragraphePrix.classList.add("comptabilité__Prix");
    asideMedia.appendChild (paragraphePrix);
     
      return sectionMedia;
        
    }

    return { getUsersectionMediaDOM };
}



