let arrayTab = Array.from(document.querySelectorAll(".tab"));
let arrayText = [];
let arrayTabContent = Array.from(document.querySelectorAll(".tab__content"));

function addActive () {
  for (tabNotAct of arrayTab) {
    tabNotAct.classList.remove("tab_active");
   }
  for (tabNotAct of arrayTabContent) {
    tabNotAct.classList.remove("tab__content_active");
   }
  this.classList.add("tab_active"); 
  arrayTabContent[arrayText.indexOf(this.textContent)].classList.add("tab__content_active");
}

for (let tab = 0;  tab < arrayTab.length; tab++) {   
  arrayTab[tab].addEventListener("click", addActive);
  arrayText[tab] = arrayTab[tab].textContent;
}