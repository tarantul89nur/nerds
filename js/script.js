var link = document.querySelector(".contacts-btn");
var contacts = document.querySelector(".contacts-form");
var name = document.querySelector("[name=name]");
var close = document.querySelector(".form-btn-close");

contacts.classList.add("js-form-hidden");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  contacts.classList.remove("js-form-hidden");
  name.focus();
})

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  contacts.classList.add("js-form-hidden");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (contacts.classList.contains("js-form-hidden")) {} else {
      contacts.classList.add("js-form-hidden");
    }
  }
});
