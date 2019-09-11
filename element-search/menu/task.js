let elementList, el;
elementList = Array.from (document.getElementsByClassName("menu__link"));
console.log(elementList);

function addSelectedClassIfClick() {
  if (this.nextElementSibling.classList.contains("menu_sub")) {
    if (this.nextElementSibling.classList.contains("menu_active")) {
      this.nextElementSibling.classList.remove("menu_active");
    } else {
      if (document.querySelector("ul.menu.menu_sub.menu_active") !== null) {
        document.querySelector("ul.menu.menu_sub.menu_active").classList.remove("menu_active");
      }  
      event.preventDefault();  
      this.nextElementSibling.classList.add("menu_active");
    } 

  } 
}

for (el of elementList) {
  el.onclick = addSelectedClassIfClick;
}
