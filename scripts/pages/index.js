//DECLARATION de la fonction qui permettra d'aller chercher le fichier json.
//CETTE FONCTION sera appelé, dans la fonction d'initialisation de la page.
import photographerTemplate from "../templates/photographer.json";
async function getPhotographers() {
	const reponse = await fetch("./data/photographers.json");
	const infosPhotographe = await reponse.json();


	console.log(infosPhotographe);

	return infosPhotographe;
}




async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");

	photographers.forEach((photographer) => {
		const photographerModel = photographerTemplate(photographer); //Cette constant stocke ce que retourne
		//la fonction photographerTemplate(), c'est a dire le papa des élements creer
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}



async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}


init();





