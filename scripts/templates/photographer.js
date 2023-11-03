export default function photographerTemplate (data) {
	const { name, portrait, country, city, tagline, price, id } = data;

	const picture = `assets/photographers/${portrait}`;

	//Cette fonction a pour but de retourner le parent (1er parent) de tous les enfants creér
	function getUserCardDOM() {
		const article = document.createElement("article");
		const figure = document.createElement("figure");
		figure.classList.add("figurePhotographe");
		article.appendChild(figure);
		const lienPhoto = document.createElement("a");


		lienPhoto.setAttribute("href", `./photographer.html?id=${id}`);
		lienPhoto.classList.add("lienPhotoProfil");
		const figcaption = document.createElement("figcaption");


		figcaption.classList.add("figcaptionPhotographe");
		figure.appendChild(lienPhoto);
		figure.appendChild(figcaption);

		const img = document.createElement("img");
		img.classList.add("photoProfil");
		img.setAttribute("src", picture);
		// Ajout d'un attribut ARIA pour donner une description de l'image
		img.setAttribute("alt", `Photo de profil de ${name}`);

		lienPhoto.appendChild(img);
		// Ajout d'un attribut ARIA pour indiquer que c'est un lien
		lienPhoto.setAttribute("role", "link");
		// Ajout d'un attribut ARIA pour donner un nom au lien
		lienPhoto.setAttribute("aria-label", `Voir le profil de ${name}`);






		
		const h2Name = document.createElement("h2");
		h2Name.textContent = name;
		h2Name.classList.add("nomPhotographe");

		const divCountryCity = document.createElement("div");
		divCountryCity.classList.add("countryCityDiv");

		const h3Country = document.createElement("h3");
		h3Country.textContent = country;
		h3Country.classList.add("country");

		const h3City = document.createElement("h3");
		h3City.textContent = city;
		h3City.classList.add("city");

		const pTagLine = document.createElement("p");
		pTagLine.textContent = tagline;
		pTagLine.classList.add("tagLine");

		const pPrice = document.createElement("p");
		pPrice.textContent = `${price} / jours`;
		pPrice.classList.add("prix");

		figcaption.appendChild(h2Name);
		figcaption.appendChild(divCountryCity);
		divCountryCity.appendChild(h3Country);
		divCountryCity.appendChild(h3City);
		figcaption.appendChild(pTagLine);
		figcaption.appendChild(pPrice);

		return article;
	}

	return { getUserCardDOM }; 
	//Cela signifie que la fonction photographerTemplate()
	//retourne le resultat de la fonction getUserCardDOM
}
