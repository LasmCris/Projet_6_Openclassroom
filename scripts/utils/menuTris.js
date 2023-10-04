const divMenuTri = document.querySelector(".menuTri");
const btnTrierPar = document.querySelector(".trierPar");

console.log(btnTrierPar);

btnTrierPar.addEventListener("click", function () {
  divMenuTri.classList.toggle("show3");
});
