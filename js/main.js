//Variaveis
var btnContact = document.querySelector(".ln-btn-contact");
var toggleModal = document.querySelectorAll(".ln-toggle-modal");

//Preloader
window.addEventListener("load", function () {
  var pagePreloder = document.querySelector(".ln-preloader");
  pagePreloder.classList.add("ln-fade-out");

  setTimeout(function () {
    pagePreloder.style.display = "none";
  }, 2000);
});

//Abre Fecha Cartao
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".ln-contact-info");
  boxContact.classList.toggle("ln-is-open");
  this.classList.toggle("ln-change-icon");
});

//LOGO ANIMADO

//Abre e Fecha Modal de Orçamento

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var overlay = document.querySelector(".ln-overlay");
    var modalOrcamento = document.querySelector("#ln-modal-orcamento");

    overlay.classList.toggle("ln-is-open");
    modalOrcamento.classList.toggle("ln-is-open");
    modalOrcamento.classList.toggle("ln-slide-top-in");
  });
}

//ANIMACAO SCROLL
var myScrollDown = document.querySelector(".ln-scroll-down");
var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("ln-fade-out");
  },
  offset: "80%",
});
