export function encartEtTriTemplate(dataPhotographe) {
	const { name, portrait, country, city, tagline } = dataPhotographe;

	const picture = `assets/photographers/${portrait}`;


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

		// Je Sélectionne la balise section avec la classe sectionTris
		const sectionTris = document.querySelector(".sectionTris");

		// Création du lien "Trier par"
		const trierParLink = document.createElement("a");
		trierParLink.className = "trierPar";
		trierParLink.setAttribute("tabindex", "2");
		trierParLink.textContent = "Trier par:";
		sectionTris.appendChild(trierParLink);

		// Création de la div "menuTri"
		const menuTriDiv = document.createElement("div");
		menuTriDiv.className = "menuTri";

		// Création de la liste non ordonnée (ul)
		const ul = document.createElement("ul");

		// Création des éléments de liste
		const li1 = document.createElement("li");
		li1.classList.add("active");
		const a1 = document.createElement("a");
		a1.className = "btnTriPar";
		a1.classList.add("btnTriParPopularite");
		a1.setAttribute("tabindex", "4");
		a1.setAttribute(
			"aria-label",
			`Appuyez sur Entrée pour trier les medias de ${name} par populatités`
		);
		a1.href = "#";
		a1.textContent = "Popularité";
		li1.appendChild(a1);

		const li2 = document.createElement("li");
		const a2 = document.createElement("a");
		a2.className = "btnTriPar";
		a2.classList.add("btnTrieParDate");
		a2.setAttribute("tabindex", "5");
		a2.setAttribute(
			"aria-label",
			`Appuyez sur Entrée pour trier les medias de ${name} par date de publication`
		);
		a2.href = "#";
		a2.textContent = "Date";
		li2.appendChild(a2);

		const li3 = document.createElement("li");
		const a3 = document.createElement("a");
		a3.className = "btnTriPar";
		a3.classList.add("btnTrieParTitre");
		a3.setAttribute("tabindex", "6");
		a3.setAttribute(
			"aria-label",
			`Appuyez sur Entrée pour trier les medias de ${name} par ordre alphabetique`
		);
		a3.href = "#";
		a3.textContent = "Nom";
		li3.appendChild(a3);

		// Ajout des éléments à la liste non ordonnée
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);

		// Ajout de la liste à la div "menuTri"
		const spanMenuTris = document.createElement("span");
		spanMenuTris.setAttribute("tabindex", "3");
		//J'indique a l'utilisateur d'appuyer sur entrer pour ouvrir le menu Dropdown
		spanMenuTris.setAttribute(
			"aria-label",
			"Appuyez sur Entrée pour ouvrir le menu de tri"
		);

		menuTriDiv.appendChild(spanMenuTris);
		menuTriDiv.appendChild(ul);

		// Ajout de la div "menuTri" à la section
		sectionTris.appendChild(menuTriDiv);

		// Cacher le menu au chargement initial
		menuTriDiv.style.display = "block";

		// Ajouter un événement pour afficher / masquer le menu au clic
		trierParLink.addEventListener("click", function () {
			if (menuTriDiv.style.display === "none") {
				menuTriDiv.style.display = "block";
			} else {
				menuTriDiv.style.display = "none";
			}
		});

		// Ajout de l'attribut ARIA pour décrire la sectionInfosPhotographe
		sectionInfosPhotographe.setAttribute(
			"aria-label",
			`Informations sur le photographe ${name}`
		);

		return sectionInfosPhotographe;
	}
	return { getuserEncartDOM };
}

export function sectionMediaTemplate(dataMedia) {
	const {title, image, video, likes, date } =
    dataMedia;

	// console.log(image, video);

	function getUsersectionMediaDOM() {
		const sectionMedia = document.querySelector(".sectionMedia");

		const articleMedia = document.createElement("article");
		articleMedia.classList.add("sectionMedia__article");
		sectionMedia.appendChild(articleMedia);
		const figureMedia = document.createElement("figure");
		figureMedia.classList.add("article__figure");
		articleMedia.appendChild(figureMedia);

		const lienMedia = document.createElement("a");
		lienMedia.classList.add("figure__lien");

		figureMedia.appendChild(lienMedia);

		let MediaEnQuestion;

		//Structure if-else pour definir si l'objet et un media de type img ou video
		//Pour creer l'element correspondand en consequence.
		if (video === undefined) {
			let pathMedia = `./assets/samplePhotos/${image}`;
			MediaEnQuestion = document.createElement("img");
			MediaEnQuestion.src = pathMedia;
			lienMedia.href = "#";
			lienMedia.setAttribute("tabindex", "-1");

			// Ajout d'un attribut ARIA pour décrire l'image
			MediaEnQuestion.setAttribute("alt", "Description de l'image");
			MediaEnQuestion.setAttribute("tabindex", "7");
		} else {
			let pathMedia = `./assets/samplePhotos/${video}`;
			MediaEnQuestion = document.createElement("video");
			const BaliseSourceVideo = document.createElement("source");
			MediaEnQuestion.appendChild(BaliseSourceVideo);
			lienMedia.href = "#";
			lienMedia.setAttribute("tabindex", "-1");
			BaliseSourceVideo.src = pathMedia;
			BaliseSourceVideo.type = "video/mp4";

			// Ajout d'un attribut ARIA pour décrire la vidéo
			MediaEnQuestion.setAttribute("aria-label", "Description de la vidéo");
			MediaEnQuestion.setAttribute("tabindex", "7");
		}
		lienMedia.appendChild(MediaEnQuestion);
		MediaEnQuestion.classList.add("lienMedia__media");

		const figcaptionMedia = document.createElement("figcaption");
		figcaptionMedia.classList.add("figure__figCaption");
		figureMedia.appendChild(figcaptionMedia);

		const titreMedia = document.createElement("h3");
		titreMedia.classList.add("figcaption__titreMed");
		titreMedia.innerText = title;
		figcaptionMedia.appendChild(titreMedia);

		const divFig = document.createElement("div");
		divFig.classList.add("figcaption__Div");
		figcaptionMedia.appendChild(divFig);

		const paragrapheDate = document.createElement("p");
		paragrapheDate.innerHTML = date;
		paragrapheDate.classList.add("divFigcap__date");
		figcaptionMedia.appendChild(paragrapheDate);

		const paragrapheLikes = document.createElement("p");
		paragrapheLikes.innerText = likes;
		paragrapheLikes.classList.add("divFigcap__likes");
		divFig.appendChild(paragrapheLikes);

		const lienCoeur = document.createElement("a");
		lienCoeur.classList.add("divFigcap__lienCoeur");
		divFig.appendChild(lienCoeur);

		const iconeCoeur = document.createElement("i");
		iconeCoeur.classList.add("fa-solid", "fa-heart");
		lienCoeur.appendChild(iconeCoeur);

		return sectionMedia;
	}

	return { getUsersectionMediaDOM };
}
