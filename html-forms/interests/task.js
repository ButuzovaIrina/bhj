let choose = Array.from(document.querySelectorAll(".interest__check"));

function addChoose() {
  let elemInList = Array.from(this.closest("li").querySelectorAll(".interest__check"));
  for (let elem of elemInList) {
    if (elem.checked !== true) {
      this.checked = true;
      elem.checked = true; 
    }  else {
      this.checked = false;
      elem.checked = false;
    }
  }
}
for (let chosen of choose) {
  chosen.addEventListener("change", addChoose);
}