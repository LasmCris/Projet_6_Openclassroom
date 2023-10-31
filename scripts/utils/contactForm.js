function formulaire () {
	
	const modal = document.querySelector("#contact_modal");
	const close = document.querySelector(".close2");
	const btnOuvertureModal = document.querySelector(".divFormulaire__button");
	const main = document.querySelector("main");

	const liensPhotos2 = document.querySelectorAll(".lienMedia__media");
	const arrayPhotos2 = Array.from(liensPhotos2);




	function OrdreDeTabulationModale2 () {
	//Modification de l'odre de tabulation a louverture de la Modale

		const btnFormulaire = document.querySelector(".divFormulaire__btn");
		btnFormulaire.setAttribute("tabindex", "-1");

		const trierParLink = document.querySelector(".trierPar");
		trierParLink.setAttribute("tabindex", "-1");

		const spanMenuTris = document.querySelector(".menuTri span");
		spanMenuTris.setAttribute("tabindex", "-1");

		arrayPhotos2.forEach((element) => {
			element.setAttribute("tabindex", "-1");
		});
	}

	function reactivationTabindex2 () {
		const btnFormulaire = document.querySelector(".divFormulaire__btn");
		btnFormulaire.setAttribute("tabindex", "1");

		const trierParLink = document.querySelector(".trierPar");
		trierParLink.setAttribute("tabindex", "2");

		const spanMenuTris = document.querySelector(".menuTri span");
		spanMenuTris.setAttribute("tabindex", "3");

		arrayPhotos2.forEach((element) => {
			element.setAttribute("tabindex", "0");
		});
	}

	btnOuvertureModal.addEventListener("click", function () {
		modal.classList.add("show2");
		//Pour les technologie d'assistance, a l'ouverture de la modale, l'ensemble de la
		//page web doit etre caché, c'est ce que fait le code suivant
		main.ariaHidden = true;
		OrdreDeTabulationModale2 ();

	});


	btnOuvertureModal.addEventListener("keydown", function (event) {
		if (event.key === "Enter" || event.code === "Enter") {
			modal.classList.add("show2");
			//Pour les technologie d'assistance, a l'ouverture de la modale, l'ensemble de la
			//page web doit etre caché, c'est ce que fait le code suivant
			main.ariaHidden = true;
			OrdreDeTabulationModale2 ();
		}
	});

	close.addEventListener("click", function () {
		modal.classList.remove("show2");
		//A la fermuture de la modale, il fut indique aux technologie d'assistance que
		//Que le reste de la page est desormais visible avec le code suivant
		main.ariaHidden = false;
		reactivationTabindex2();
	});

	// Ajout d'un écouteur d'événement pour la touche "Esc"
	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape") {
			modal.classList.remove("show2");
			//pour les technos d'assiastance
			main.ariaHidden = false;
			reactivationTabindex2();
		}
	});

}

export default formulaire;

  