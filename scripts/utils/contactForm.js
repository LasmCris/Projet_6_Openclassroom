const modal = document.querySelector("#contact_modal");
const close = document.querySelector(".close2");
const btnOuvertureModal = document.querySelector(".divFormulaire__button");

btnOuvertureModal.addEventListener("click", function () {
  modal.classList.add("show2");
});

close.addEventListener("click", function () {
  modal.classList.remove("show2");
});
