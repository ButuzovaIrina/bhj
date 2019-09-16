let toDoEnterText = document.getElementById("task__input");
let toDoEnterButton = document.getElementById("tasks__add");
let divName = document.getElementById("tasks__list");

function removeItem() {
  let removeCh = this.closest(".task");
  divName.removeChild(removeCh);
};

function toDoAdd() {
  event.preventDefault();
  if (toDoEnterText.value !== "") {
    let divToDo = 
      `<div class="task">
        <div class="task__title">
          ${toDoEnterText.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div> `;
    divName.insertAdjacentHTML("afterBegin", divToDo);
    toDoEnterText.value ="";
    divName.getElementsByClassName("task__remove")[0].onclick = removeItem
  }
}

function toDoAddEnter(event) {
  if (event.keyCode === 13){
    toDoAdd();
  }
}

toDoEnterText.addEventListener("keydown", toDoAddEnter);
toDoEnterButton.addEventListener("click", toDoAdd);

