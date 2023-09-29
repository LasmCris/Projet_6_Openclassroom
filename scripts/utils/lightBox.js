window.onload = () => {
  const lightBox = document.querySelector("#lightBox");
  const liensPhotos = document.querySelectorAll(".lienMedia__media");

  const arrayPhotos = Array.from(liensPhotos);
  const imageDansLightbox = lightBox.querySelector(".lightBoxContent img");
  const videoDansLightbox = lightBox.querySelector(".lightBoxContent video");
  const prevButton = document.querySelector(".lightBoxPrev");
  const nextButton = document.querySelector(".lightBoxNext");
  const close = document.querySelector(".close");

  let currentIndex = 0;

  //fonction d'ouverture de la lightbox avec une image donnée.

  function ouvertureLightbox(index) {
    const media = liensPhotos[index];
    console.log(media);

    if (media.tagName === "IMG") {
      imageDansLightbox.src = arrayPhotos[index].src;
      imageDansLightbox.alt = arrayPhotos[index].alt;
      videoDansLightbox.style.display = "none";
      imageDansLightbox.style.display = "block";
    } else if (media.tagName === "VIDEO") {
      videoDansLightbox.style.display = "block";
      imageDansLightbox.style.display = "none";
      videoDansLightbox.querySelector("source").src =
        arrayPhotos[index].querySelector("source").src;
    }

    currentIndex = index;
    //On ajoute la lightBox
    lightBox.classList.add("show");
  }

  //fonction de fermeture de la lightbox.
  function fermetureLightbox() {
    lightBox.classList.remove("show");
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
      ouvertureLightbox(index);
      return false;
    });
  });

  prevButton.addEventListener("click", imagePrecedente);
  nextButton.addEventListener("click", imageSuivante);
  close.addEventListener("click", fermetureLightbox);

};
