let countClick = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
let imageWidth = image.width;



function increaseSizes() {
  if ( image.width === imageWidth ) { 
    image.width += 100;
    image.height += 100; 
   } else{
    image.width -= 100;
    image.height -= 100;
   }
countClick.textContent ++;
  }
image.onclick = increaseSizes;