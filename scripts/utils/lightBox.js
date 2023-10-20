window.onload = () => {
  const lightBox = document.querySelector("#lightBox");
  const liensPhotos = document.querySelectorAll(".lienMedia__media");
  const main1 = document.querySelector("main");

  const arrayPhotos = Array.from(liensPhotos);
  console.log(arrayPhotos);
  const imageDansLightbox = lightBox.querySelector(".lightBoxContent img");
  const videoDansLightbox = lightBox.querySelector(".lightBoxContent video");
  const prevButton = document.querySelector(".lightBoxPrev");
  const nextButton = document.querySelector(".lightBoxNext");
  const close1 = document.querySelector(".close");

  let currentIndex = 0;

  //fonction d'ouverture de la lightbox avec une image donnée.

  function ouvertureLightbox(index) {
    const media = arrayPhotos[index];

    if (media.tagName === "IMG") {
      imageDansLightbox.src = arrayPhotos[index].src;
      imageDansLightbox.alt = arrayPhotos[index].alt;
      videoDansLightbox.style.display = "none";
      imageDansLightbox.style.display = "block";
    } else if (media.tagName === "VIDEO") {
      videoDansLightbox.style.display = "block";
      imageDansLightbox.style.display = "none";
      videoDansLightbox.setAttribute("controls", "true");
      videoDansLightbox.querySelector("source").src =
        arrayPhotos[index].querySelector("source").src;

      // Charge la vidéo et lance la lecture automatique
      videoDansLightbox.load();
      videoDansLightbox.play();
    }

    currentIndex = index;
    lightBox.classList.add("show");
    //Pour les technologie d'assistance, a l'ouverture de la lightBox, l'ensemble de la
    //page web doit etre caché, c'est ce que fait le code suivant
    main1.ariaHidden = true;
  }

  function fermetureLightbox() {
    lightBox.classList.remove("show");
    //A la fermuture de la lightbox, il fut indique aux technologie d'assistance que
    //Que le reste de la page est desormais visible avec le code suivant
    main1.ariaHidden = false;
  }

  //gerer la navigation vers l'image precedente
  function imagePrecedente() {
    currentIndex = (currentIndex - 1 + arrayPhotos.length) % arrayPhotos.length;
    ouvertureLightbox(currentIndex);
  }

  //gerer la navigation vers l'image suivante
  function imageSuivante() {
    currentIndex = (currentIndex + 1) % arrayPhotos.length;
    ouvertureLightbox(currentIndex);
  }

  //placer les ecouteurs d'evements click
  arrayPhotos.forEach((lien, index) => {
    lien.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      ouvertureLightbox(index);
      return false;
    });
  });

  prevButton.addEventListener("click", imagePrecedente);
  nextButton.addEventListener("click", imageSuivante);
  close1.addEventListener("click", fermetureLightbox);

  // Ajout d'un écouteur d'événement pour la touche "Esc"
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      fermetureLightbox();
    }
  });
};
