let textPrompt = Array.from(document.querySelectorAll(".has-tooltip"));

function viewPrompt() {
  let existPrompt = Array.from(document.getElementsByClassName("tooltip_active")); 
  console.log(existPrompt[0]);
  event.preventDefault(); 
  if (existPrompt[0] !== undefined) {
    existPrompt[0].classList.remove("tooltip_active"); 
    event.preventDefault();
  }
  let promptElem = document.createElement("div");
  promptElem.classList.add("tooltip", "tooltip_active");
  promptElem.textContent = this.getAttribute("title");
  let coords = this.getBoundingClientRect();
  promptElem.style.top = coords.bottom + 1 + "px";
  promptElem.style.left = coords.left + "px";
  document.body.append(promptElem); 
}

for (textElem of textPrompt) {
  textElem.addEventListener("click", viewPrompt);
}