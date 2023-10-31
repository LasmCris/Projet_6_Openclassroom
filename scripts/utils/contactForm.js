const modal = document.querySelector("#contact_modal");
const close = document.querySelector(".close2");
const btnOuvertureModal = document.querySelector(".divFormulaire__button");
const main = document.querySelector("main");

btnOuvertureModal.addEventListener("click", function () {
	modal.classList.add("show2");
	//Pour les technologie d'assistance, a l'ouverture de la modale, l'ensemble de la
	//page web doit etre caché, c'est ce que fait le code suivant
	main.ariaHidden = true;

});

close.addEventListener("click", function () {
	modal.classList.remove("show2");
	//A la fermuture de la modale, il fut indique aux technologie d'assistance que
	//Que le reste de la page est desormais visible avec le code suivant
	main.ariaHidden = false;
});

// Ajout d'un écouteur d'événement pour la touche "Esc"
document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		modal.classList.remove("show2");
		//pour les technos d'assiastance
		main.ariaHidden = false;
	}
});




  