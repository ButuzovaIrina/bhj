let arrayText = Array.from(document.querySelectorAll(".rotator__case"));
let i = 0;

  function textRotator() {
    if (i !== 0) {
      arrayText[i-1].classList.remove("rotator__case_active");
    } else {
      arrayText[arrayText.length-1].classList.remove("rotator__case_active");   
    }
    arrayText[i].classList.add("rotator__case_active");
    i++;
    if (i === arrayText.length) i = 0;
 }

 setInterval(textRotator, 1000);
 