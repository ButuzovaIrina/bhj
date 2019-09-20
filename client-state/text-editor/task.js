let editor = document.getElementById("editor");

if (localStorage.editText !== null) {
  editor.value = localStorage.editText;
}
editor.addEventListener("keydown", event => {
  if (event.keyCode === 13) {   
    let textTextArea = editor.value;
    localStorage.setItem("editText", textTextArea);
  } 
})

