let choose = Array.from(document.querySelectorAll(".interest__check"));

function addChoose() {
  
  if (!this.checked) {
    this.checked = true;
  } else {
    this.checked = false;
  }

  let elemInList = Array.from(this.closest("li").querySelectorAll(".interest__check"));
  for (let elem of elemInList) {
    if (elem.checked !== true) {
      elem.checked = true; 
    }  else {
      elem.checked = false;
    }
  }
}
for (let chosen of choose) {
  chosen.addEventListener("change", addChoose);
}