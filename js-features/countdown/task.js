let timer = document.getElementById("timer");
let stop = timer.textContent * 1000;

let addTimer = setInterval(() => {
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе"); 
    timer.textContent = 5;
  } else {
    timer.textContent -= 1;
  }
}, 1000);


