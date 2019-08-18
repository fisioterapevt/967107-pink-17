var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var form = document.querySelector(".application__form");
var modalError = document.querySelector(".modal-error");
var formSurename = document.querySelector(".js-surname");
var formName = document.querySelector(".js-name");
var formMiddleName = document.querySelector(".js-middle-name");
var formTel = document.querySelector("#tel");
var formEmail = document.querySelector("#email");


var modalOk = document.querySelector(".modal-close");
var closeErrorModal = document.querySelector(".modal-error__button");
var closeModalOk = document.querySelector(".modal-close__button");
var sendForm = document.querySelector(".js-send-form");


// var storageSurname = localStorage.getItem("formSurename");
// var storageName = localStorage.getItem("formName");
// var storageMiddleName = localStorage.getItem("formMiddleName");
// var storageTel = localStorage.getItem("formTel");
// var storageEmail = localStorage.getItem("formEmail");





form.addEventListener("submit", function (evt) {
  if (!formSurename.value) {
    evt.preventDefault();
    modalError.classList.add("js-modal-error-show");
    formSurename.focus();
    formSurename.classList.add("js-err-color");
  }
  if (!formName.value) {
    evt.preventDefault();
    modalError.classList.add("js-modal-error-show");
    formName.focus();
    formName.classList.add("js-err-color");
  }
  if (!formTel.value) {
    evt.preventDefault();
    modalError.classList.add("js-modal-error-show");
    formTel.focus();
    formTel.classList.add("js-err-color");
  }
  if (!formEmail.value) {
    evt.preventDefault();
    modalError.classList.add("js-modal-error-show");
    formEmail.focus();
    formEmail.classList.add("js-err-color");
  } else {
    modalOk.classList.add("js-modal-close-show");
  }
});

closeErrorModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalError.classList.remove("js-modal-error-show");
});

closeModalOk.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOk.classList.remove("js-modal-close-show");
});
