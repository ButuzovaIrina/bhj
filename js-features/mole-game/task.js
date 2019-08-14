let countDead, countLost, holes;
countDead = document.getElementById("dead");
countLost = document.getElementById("lost");
holes = document.getElementsByClassName("hole-game");


function zeroize() {
  countDead.textContent = 0; 
  countLost.textContent = 0;
}

function divOnClick(event) {
  if (event.target.className.includes("hole_has-mole")) {
    countDead.textContent++;
  } else {
    countLost.textContent++;
  }
  if (countDead.textContent == 2) {
    alert("Вы победили");
    return zeroize();
  }
  if (countLost.textContent == 5) {
    alert("Вы проиграли"); 
   return zeroize();
  }
}

holes[0].onclick = divOnClick;


/*hole1 = document.getElementById("hole1");
hole2 = document.getElementById("hole2");
hole3 = document.getElementById("hole3");

function hole1OnClick() {
    if (hole1.className.includes("hole_has-mole")) {
        countDead.textContent ++;
      } else {
      countLost.textContent ++;
      }
}
function hole2OnClick() {
    if (hole2.className.includes("hole_has-mole")) {
        countDead.textContent ++;
      } else {
      countLost.textContent ++;
      }
}
function hole3OnClick() {
    if (hole3.className.includes("hole_has-mole")) {
        countDead.textContent ++;
      } else {
      countLost.textContent ++;
      }
}

for (let i = 0; i > 9; i++){
  let holeIndex = getHole(i);
  holeIndex.onclick = holeOnClick;
  
}

hole1.onclick = hole1OnClick;
hole2.onclick = hole2OnClick;
hole3.onclick = hole3OnClick;


function getHole(index) {
  return document.getElementById (`hole${index}`);
}


function holeOnClick() {
  if (holeIndex.className.includes("hole_has-mole")) {
    countDead.textContent ++;
  } else {
  countLost.textContent ++;
  }


}
}*/
