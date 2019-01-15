var writeUs = document.querySelector(".write-us-button");

var modalWriteUs = document.querySelector(".modal-write-us");
var writeUsClose = modalWriteUs.querySelector(".modal-close");

var form = modalWriteUs.querySelector("form");
var name = form.querySelector("[name=name]");
var email = form.querySelector("[name=email]");
var letter = form.querySelector("[name=letter]");

writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.add("modal-show");
});

writeUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalWriteUs.classList.remove("modal-show");
});

var map = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var modalMapClose = modalMap.querySelector(".modal-close");

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalMapClose.addEventListener("click", function(evt) {
  modalMap.classList.remove("modal-show");
});