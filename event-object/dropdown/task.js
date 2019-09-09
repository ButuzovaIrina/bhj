let text = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let menuList = Array.from(document.querySelectorAll(".dropdown__item"));

text.addEventListener("click", function() {
  event.preventDefault();
  list.classList.toggle("dropdown__list_active");
});

for (let elMenu of menuList) { 
  elMenu.addEventListener("click", function() {
    event.preventDefault();
    list.classList.toggle("dropdown__list_active");     
    text.textContent = event.target.textContent;
  });
}
  