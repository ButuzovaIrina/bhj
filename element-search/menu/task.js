let elementList, el;
elementList = Array.from (document.getElementsByClassName("menu__link"));
console.log(elementList);

function addSelectedClassIfClick() {
  if (this.nextElementSibling.classList.contains("menu_sub")) {
    if (document.querySelector("ul.menu.menu_sub.menu_active") !== null) {
      document.querySelector("ul.menu.menu_sub.menu_active").classList.toggle("menu_active");
    }
    event.preventDefault();
    this.nextElementSibling.classList.toggle("menu_active");
  } 
}

for (el of elementList) {
  el.onclick = addSelectedClassIfClick;
}
