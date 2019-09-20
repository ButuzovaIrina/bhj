let winPop = document.getElementById("subscribe-modal");

winPop.className = "modal modal_active";
document.cookie = "Ivan=durak";
let elementsClose = Array.from(document.getElementsByClassName("modal__close"));

let getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
    }
}
    

if ( getCookie("winPop") == "closed" ) {
  winPop.className = "modal";
  console.log("bingo");
}

elementsClose[0].onclick = () =>  {
  document.cookie = "winPop=closed";
  winPop.className = "modal"; 
}
