let timer = document.getElementById("timer");
let stop = timer.textContent * 1000;

let addTimer = setInterval(() => timer.textContent -= 1, 1000);

setTimeout(() => {
  clearInterval(addTimer);
  alert("Вы победили в конкурсе"); 
  }, stop + 1);

