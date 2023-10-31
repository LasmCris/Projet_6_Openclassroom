import lightBox from "../utils/lightBox.js";
import {encartEtTriTemplate, sectionMediaTemplate } from "../templates/photographerPage.js";

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
	// Filtrer les médias en fonction de l'ID du photographe
	const media = infosPhotographe.media.filter(
		(p) => p.photographerId == idPhotographer
	);

	// Obtenir les likes de chaque média, sous forme d'array
	const likesArray = media.map((m) => m.likes);

  

	// console.log(media[0]);

	return { photographer: PhotographeElu, media, likesArray };

}




async function displayDataPagePhotographer(photographe, photoMedia) {
	// console.log(photographe, photoMedia);

	const photographerPage = document.querySelector("main");

	const photographerEncartEtTrie = encartEtTriTemplate(photographe);
	const userEncartDOM = photographerEncartEtTrie.getuserEncartDOM();
	photographerPage.appendChild(userEncartDOM);

	photoMedia.forEach((objet) => {
		const photographerSectionMedia = sectionMediaTemplate(objet);
		const usersectionMediaDOM =
      photographerSectionMedia.getUsersectionMediaDOM();
		photographerPage.appendChild(usersectionMediaDOM);
	});
}

async function init2() {
	// Récupère les datas des photographes
	const { photographer, media, likesArray } = await getPhotographer();

	displayDataPagePhotographer(photographer, media);

	//Affichage nom photographe dans modale
	const nomPhotographeModal = document.querySelector(".nomPhotographe");
	nomPhotographeModal.textContent = photographer.name;

	const sectionMedia = document.querySelector(".sectionMedia");

	const asideMedia = document.createElement("aside");
	asideMedia.classList.add("sectionMedia__comptabilité");
	sectionMedia.appendChild(asideMedia);

	const paraSommeDesLikes = document.createElement("div");
	paraSommeDesLikes.classList.add("comptabilité__nbrLikes");
	asideMedia.appendChild(paraSommeDesLikes);

	const sommeNbrLikes = document.createElement("p");
	sommeNbrLikes.classList.add("nbrLikes__somme");
	paraSommeDesLikes.appendChild(sommeNbrLikes);

	const iconeCoeurSommeLike = document.createElement("i");
	iconeCoeurSommeLike.classList.add("fa-solid", "fa-heart");
	paraSommeDesLikes.appendChild(iconeCoeurSommeLike);

	const paragraphePrix = document.createElement("p");
	paragraphePrix.innerText = `${photographer.price}€ / jour`;
	paragraphePrix.classList.add("comptabilité__Prix");
	asideMedia.appendChild(paragraphePrix);

	// Sélection du paragraphe où on va afficher la somme totale
	const paragrapheDesSommesDeLikes = document.querySelector(".nbrLikes__somme");

	// Je Sélectionne tous les éléments a (icônes cœur)
	const boutonLikes = document.querySelectorAll(".divFigcap__lienCoeur");
	const arrayBoutonLikes = Array.from(boutonLikes);

	// Initialisation du tableau de likes, je fais plutot réfférence a l'array
	// Renvoyé par la fonction getPhotographer
	likesArray;

	// Fonction pour calculer la somme totale des likes
	function calculateTotalLikes() {
		let totalLikes = 0;
		likesArray.forEach((likesElement) => {
			totalLikes += likesElement;
		});
		return totalLikes;
	}

	// Mise à jour de la somme totale des likes au chargement de la page
	paragrapheDesSommesDeLikes.textContent = calculateTotalLikes();

	// Je modifie le code pour gérer l'ajout et la suppression de likes
	arrayBoutonLikes.forEach((boutonLike, index) => {
		let isLiked = false; // Variable pour suivre l'état du bouton

		boutonLike.addEventListener("click", (e) => {
			e.preventDefault(); // J'empêche le lien de suivre son URL

			// Je sélectionne le paragraphe "divFigcap__likes" associé à l'icône cœur cliquée
			const paragrapheNbrLikes =
        boutonLike.parentElement.querySelector(".divFigcap__likes");

			// J'obtiens le nombre actuel de likes depuis le paragraphe
			let nbrDeLikesActuel = parseInt(paragrapheNbrLikes.textContent);

			// Si le bouton est déjà liké, je retire le like
			if (isLiked) {
				nbrDeLikesActuel--;
				isLiked = false;
				likesArray[index]--; // Décrémentation du like dans le tableau
			} else {
				// Sinon, j'ajoute un like
				nbrDeLikesActuel++;
				isLiked = true;
				likesArray[index]++; // Incrémentation du like dans le tableau
			}

			// Je mets à jour le contenu du paragraphe avec le nouveau nombre de likes
			paragrapheNbrLikes.textContent = nbrDeLikesActuel;

			// Mise à jour de la somme totale des likes en temps réel
			paragrapheDesSommesDeLikes.textContent = calculateTotalLikes();
		});
	});

	trier();
	lightBox();
}

init2();

//Affichage du message dans la console.
const btnSubmit = document.querySelector(".contact_button");
  
btnSubmit.addEventListener("click", function (event) {
	event.preventDefault(); // Empêche le comportement par défaut du bouton de soumission
	var prenomClient = document.getElementById("prenom").value;
	var nomClient = document.getElementById("nom").value;
	var emailClient = document.getElementById("email").value;
	var contenuMessage = document.getElementById("message").value;


	console.log(`PRENOM du client "${prenomClient}"`);
	console.log(`NOM du client "${nomClient}"`);
	console.log(`EMAIL du client "${emailClient}"`);
	console.log(`message envoyer par le client "${contenuMessage}"`);
});



function trier() {
	//TRIS PAR POPULARITÉ
	//Je Selectionne le boutton de tris par popularités
	const boutonTrisParPop = document.querySelector(".btnTriParPopularite");
	// console.log(boutonTrisParPop);

	// Je Sélectionne les éléments contenant les photos et leurs likes
	const tousMediaGenerer = document.querySelectorAll(".sectionMedia__article");

	function triParPopularite() {
		// Je Convertie la NodeList en tableau pour pouvoir trier les articles
		const arrayMediaGenerer = Array.from(tousMediaGenerer);

		//Ont Trie le tableau en fonction du nombre de likes
		//(j'utilise parseInt pour convertir le texte en nombre)
		arrayMediaGenerer.sort((a, b) => {
			const likesA = parseInt(a.querySelector(".divFigcap__likes").textContent);
			const likesB = parseInt(b.querySelector(".divFigcap__likes").textContent);
			return likesB - likesA; //pour un tri décroissant
		});

		// Je Réorganise les articles dans leur parent
		const parentDesArticlePhotos = document.querySelector(".sectionMedia");
		arrayMediaGenerer.forEach((article) => {
			parentDesArticlePhotos.appendChild(article);
		});
	}

	// Ajout d'un eventListener au lien
	boutonTrisParPop.addEventListener("click", (e) => {
		e.preventDefault;
		triParPopularite();
	});

	// Pour l'accessibilité
	boutonTrisParPop.addEventListener("keypress", (e) => {
		if (e.key === "Enter" || e.code === "Enter") {
			e.preventDefault();
			triParPopularite();
		}
	});

	//TRI PAR DATE DE PUBLICATION
	// Sélection du bouton de tri
	const btnTriParDateDePub = document.querySelector(".btnTrieParDate");
	// console.log(btnTriParDateDePub);

	function triParDate() {
		// Je Convertie la NodeList en tableau pour pouvoir trier les articles
		const arrayMediaGenerer = Array.from(tousMediaGenerer);

		// Trie des articles de media en fonction de la date de publication
		arrayMediaGenerer.sort((a, b) => {
			const dateA = new Date(a.querySelector(".divFigcap__date").textContent);
			const dateB = new Date(b.querySelector(".divFigcap__date").textContent);

			return dateA - dateB; //Tri par ordre croissant de date de publication
		});

		// Je Réorganise les articles dans leur parent
		const parentDesArticlePhotos = document.querySelector(".sectionMedia");
		arrayMediaGenerer.forEach((article) => {
			parentDesArticlePhotos.appendChild(article);
		});
	}

	btnTriParDateDePub.addEventListener("click", (e) => {
		e.preventDefault;
		triParDate();
	});
	// Pour l'accessibilité
	btnTriParDateDePub.addEventListener("keypress", (e) => {
		if (e.key === "Enter" || e.code === "Enter") {
			e.preventDefault();
			triParDate();
		}
	});

	// TRI PAR ORDRE ALPHABETIQUE DE TITRE
	// Je Sélectionne le bouton de tri.
	const btnTriDesTitreDeMedia = document.querySelector(".btnTrieParTitre");
	// console.log(btnTriDesTitreDeMedia);

	function triParNom() {
		// Je Convertie la NodeList en tableau pour pouvoir trier les articles
		const arrayMediaGenerer = Array.from(tousMediaGenerer);

		// Je trie les articles en fonction du nom de la photo
		arrayMediaGenerer.sort((a, b) => {
			const nomA = a
				.querySelector(".figcaption__titreMed")
				.textContent.toLowerCase();
			const nomB = b
				.querySelector(".figcaption__titreMed")
				.textContent.toLowerCase();

			return nomA.localeCompare(nomB); // Tri alphabétique des noms de photo
		});

		// Je Réorganise les articles dans leur parent
		const parentDesArticlePhotos = document.querySelector(".sectionMedia");
		arrayMediaGenerer.forEach((article) => {
			parentDesArticlePhotos.appendChild(article);
		});
	}

	btnTriDesTitreDeMedia.addEventListener("click", (e) => {
		e.preventDefault;
		triParNom();
	});



  
	// Pour l'accessibilité
	btnTriDesTitreDeMedia.addEventListener("keypress", (e) => {
		if (e.key === "Enter" || e.code === "Enter") {
			e.preventDefault();
			triParNom();
		}
	});

	//GESTION DU TOGGLE D'AFFICHAGE DU MENU DE TRI
	const dropdown = document.querySelector(".menuTri");

	const dropdownSpan = dropdown.querySelector(".menuTri span");

	const showDropdownLabel = () => {
		dropdownSpan.innerText = dropdown.querySelector("ul li.active").innerText;
	};

	const swap = (node1, node2) => {
		const afterNode2 = node2.nextElementSibling;
		const parent = node2.parentNode;
		node1.replaceWith(node2);
		parent.insertBefore(node1, afterNode2);
	};

	showDropdownLabel();

	dropdown.addEventListener("click", () => {
		dropdown.classList.toggle("open");
	});

	//Je gere l'ouverture du menu avec le clavier Ainsi
	dropdownSpan.addEventListener("keypress", (e) => {
		if (e.key === "Enter" || e.code === "Enter") {
			dropdown.classList.toggle("open");
		}
	});

	dropdown.querySelectorAll("ul li").forEach((li) => {
		li.addEventListener("click", (e) => {
			e.preventDefault();
			swap(dropdown.querySelector("ul li.active"), li);
			dropdown.querySelector("ul li.active").classList.remove("active");
			li.classList.add("active");
			showDropdownLabel();
		});
	});
}





