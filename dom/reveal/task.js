let divView = Array.from (document.querySelectorAll(".reveal"));
console.log(divView); 

function addActive() {
  for (d of divView) { 
    let isInViewport = function(element){
      let viewportHeight = window.innerHeight;
      let elementTop = element.getBoundingClientRect().top;
      return elementTop < viewportHeight ? true : false;
    };

    let isOutViewport = function(element){
      let elementBotom = element.getBoundingClientRect().bottom;
      return elementBotom < 0 ? true : false;
    };

    if (isInViewport(d)) {
      d.classList.add("reveal_active");   
    }

    if (isOutViewport(d)) {
      d.classList.remove("reveal_active");  
    }
  }
}

document.addEventListener("scroll", addActive);    