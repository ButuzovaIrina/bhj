let winPop = document.getElementById("modal_main");
let winSucc = document.getElementById("modal_success");
winPop.className = "modal modal_active";

let elementsClose = Array.from(document.getElementsByClassName("modal__close"));

for ( i = 0; i < elementsClose.length; i++ ) {
  elementsClose[i].onclick = () =>  {
    winPop.className = "modal";
    winSucc.className = "modal";
  }
}

let elementsSucces = document.getElementsByClassName("show-success");
elementsSucces[0].onclick = () => {
  winPop.className = "modal";
  winSucc.className = "modal modal_active";
}